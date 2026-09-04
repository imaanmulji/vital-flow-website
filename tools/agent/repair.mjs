#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { isAbsolute, join, relative, resolve } from "node:path";
import { spawnPortable } from "./process-runner.mjs";

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log("Usage: node tools/agent/repair.mjs --check-index <n> --files <path...>\n\nRuns an explicitly enabled, file-scoped LLM repair; captures diff evidence; validates; and never stages or commits.");
  process.exit(0);
}
const valueAfter = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};
const filesIndex = args.indexOf("--files");
const files = filesIndex >= 0 ? args.slice(filesIndex + 1) : [];
const checkIndex = Number(valueAfter("--check-index"));
const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "agent-system.config.json"), "utf8"));
if (!config.llmRepair?.enabled) throw new Error("LLM repair is disabled in agent-system.config.json");
if (!Number.isInteger(checkIndex) || !config.hooks?.check?.[checkIndex]) throw new Error("Invalid --check-index");
if (!files.length || files.length > config.llmRepair.maxFiles) throw new Error("Repair file scope is empty or exceeds maxFiles");

const allowed = new Set(files.map((file) => {
  const absolute = resolve(root, file);
  const rel = relative(root, absolute).replaceAll("\\", "/");
  if (rel.startsWith("../") || isAbsolute(rel)) throw new Error(`File is outside repository: ${file}`);
  if (!existsSync(absolute)) throw new Error(`Repair file does not exist: ${file}`);
  return rel;
}));
const provider = config.review.providers.find((item) => item.id === config.llmRepair.providerId && item.enabled);
if (!provider) throw new Error("Configured LLM repair provider is unavailable or disabled");
if (provider.kind === "opencode") throw new Error("OpenCode repair is not enabled because non-interactive edit approval is not safely configured");

const run = (argv, timeoutSeconds = 300) => spawnPortable(argv[0], argv.slice(1), {
  cwd: root,
  encoding: "utf8",
  timeout: timeoutSeconds * 1000,
  maxBuffer: 10 * 1024 * 1024,
});
const diff = () => run(["git", "diff", "--", ...allowed]).stdout ?? "";
const changed = () => new Set((run(["git", "diff", "--name-only"]).stdout ?? "").split(/\r?\n/).filter(Boolean).map((path) => path.replaceAll("\\", "/")));

const beforeChanged = changed();
const beforeDiff = diff();
const checkCommand = config.hooks.check[checkIndex];
const failure = run(checkCommand, config.llmRepair.timeoutSeconds);
if (failure.status === 0) {
  console.log("Configured check already passes; no LLM repair was run.");
  process.exit(0);
}

const evidenceDir = join(root, "docs", "agent-repairs");
mkdirSync(evidenceDir, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const failureText = `${failure.stdout ?? ""}\n${failure.stderr ?? ""}`.slice(-30000);
const promptPath = join(evidenceDir, `${stamp}-${provider.id}-prompt.md`);
writeFileSync(promptPath, `Fix only these files: ${[...allowed].join(", ")}\n\nThe failing command is ${JSON.stringify(checkCommand)}.\n\nFailure output:\n${failureText}\n\nMake the smallest safe repair. Do not stage, commit, tag, change hooks, disable checks, or edit any other file.`, "utf8");
const instruction = `Read ${promptPath} and make the requested file-scoped repair. Do not stage or commit.`;
let invocation;
if (provider.kind === "claude") invocation = ["claude", ["-p", instruction, "--model", provider.model, "--effort", "low", "--permission-mode", "acceptEdits", "--tools", "Read,Edit,Write,Grep,Glob", "--no-session-persistence"]];
else if (provider.kind === "codex") {
  const codexArgs = ["exec", "-C", root, "-s", "workspace-write", "--ephemeral"];
  if (provider.model && provider.model !== "configured-default") codexArgs.push("-m", provider.model);
  codexArgs.push(instruction);
  invocation = ["codex", codexArgs];
} else throw new Error(`Unsupported repair provider kind: ${provider.kind}`);

const startedAt = new Date().toISOString();
const result = run([invocation[0], ...invocation[1]], config.llmRepair.timeoutSeconds);
const afterChanged = changed();
const newChanged = [...afterChanged].filter((path) => !beforeChanged.has(path));
const outOfScope = newChanged.filter((path) => !allowed.has(path));
const afterDiff = diff();
let validationPassed = result.status === 0 && outOfScope.length === 0;
const validationResults = [];
if (validationPassed) {
  for (const command of [checkCommand, ...(config.llmRepair.validation ?? [])]) {
    const checked = run(command, config.llmRepair.timeoutSeconds);
    validationResults.push({ command, exitCode: checked.status, stdout: checked.stdout ?? "", stderr: checked.stderr ?? "" });
    if (checked.status !== 0) validationPassed = false;
  }
}
const hash = (value) => createHash("sha256").update(value).digest("hex");
const evidence = {
  providerId: provider.id,
  family: provider.family,
  model: provider.model,
  startedAt,
  finishedAt: new Date().toISOString(),
  files: [...allowed],
  checkCommand,
  promptPath: promptPath.replaceAll("\\", "/"),
  beforeDiffSha256: hash(beforeDiff),
  afterDiffSha256: hash(afterDiff),
  outOfScope,
  exitCode: result.status,
  error: result.error?.message ?? null,
  output: `${result.stdout ?? ""}${result.stderr ?? ""}`,
  validationPassed,
  validationResults,
};
writeFileSync(join(evidenceDir, `${stamp}-${provider.id}.json`), `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
if (outOfScope.length) console.error(`Repair changed files outside scope: ${outOfScope.join(", ")}`);
process.exit(validationPassed ? 0 : 1);
