#!/usr/bin/env node

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { gzipSync } from "node:zlib";
import { spawnPortable } from "./process-runner.mjs";

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log("Usage: node tools/agent/review.mjs --phase <phase> --exclude-family <family> --persona <persona> --task <path-or-description> [--fixed-point <ref>]\n\nRuns configured reviewers until a different-family reviewer returns a substantive verdict. Every attempt is preserved as evidence.");
  process.exit(0);
}
const valueAfter = (flag, fallback = "") => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] ?? fallback : fallback;
};
const sanitize = (value, fallback) => (value || fallback).replace(/[^a-zA-Z0-9._/-]/g, "-");
const phase = sanitize(valueAfter("--phase"), "implementation");
const persona = sanitize(valueAfter("--persona"), "code-quality");
const excludeFamily = sanitize(valueAfter("--exclude-family"), "");
const task = valueAfter("--task", "Read the current diff, trace, and project instructions.");
const fixedPoint = valueAfter("--fixed-point", "working tree and current task");
const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "agent-system.config.json"), "utf8"));
const timeoutSeconds = Number(config.review?.timeoutSeconds ?? 180);
const directory = join(root, "docs", "agent-reviews");
mkdirSync(directory, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");

const prompt = `You are an independent ${persona} reviewer for the ${phase} phase.
Scope/fixed point: ${fixedPoint}
Task source: ${task}
Read AGENTS.md, AGENT_WORKFLOW.md, relevant routed docs, the task source, and the actual diff/evidence. Do not edit files, commit, tag, or suppress checks.
Report findings ordered by severity with file/evidence references, false-confidence risks, unverified assumptions, required doc/test/performance/visual updates, and a verdict of pass, pass-with-concerns, fail, or blocked. Preserve uncertainty. Keep the answer under 1200 words.`;
const promptSha256 = createHash("sha256").update(prompt).digest("hex");
const promptPath = join(directory, `${stamp}-${phase}-${persona}-prompt.md`);
writeFileSync(promptPath, prompt, "utf8");
const instruction = `Read ${promptPath} and perform that review. Do not edit files.`;

function invocation(provider) {
  if (provider.kind === "claude") return ["claude", ["-p", instruction, "--model", provider.model, "--effort", "medium", "--permission-mode", "plan", "--tools", "Read,Grep,Glob", "--no-session-persistence"]];
  if (provider.kind === "opencode") return ["opencode", ["run", "--pure", "-m", provider.model, "--format", "json", instruction]];
  if (provider.kind === "codex") {
    const codexArgs = ["exec", "-C", root, "-s", "read-only", "--ephemeral"];
    if (provider.model && provider.model !== "configured-default") codexArgs.push("-m", provider.model);
    codexArgs.push(instruction);
    return ["codex", codexArgs];
  }
  throw new Error(`Unsupported review provider kind: ${provider.kind}`);
}

const providers = (config.review?.providers ?? []).filter((provider) => provider.enabled && provider.family !== excludeFamily);
if (!providers.length) {
  console.error(`No enabled reviewer remains after excluding family '${excludeFamily}'`);
  process.exit(2);
}

let success = false;
for (const provider of providers) {
  const [command, commandArgs] = invocation(provider);
  const versionResult = spawnPortable(command, ["--version"], { encoding: "utf8", timeout: 15000 });
  const cliVersion = `${versionResult.stdout ?? ""}${versionResult.stderr ?? ""}`.trim();
  const startedAt = new Date().toISOString();
  const result = spawnPortable(command, commandArgs, {
    cwd: root,
    encoding: "utf8",
    timeout: timeoutSeconds * 1000,
    maxBuffer: 10 * 1024 * 1024,
  });
  const output = `${result.stdout ?? ""}${result.stderr ? `\nSTDERR\n${result.stderr}` : ""}`.trim();
  let reviewText = output;
  let parseErrors = 0;
  if (provider.kind === "opencode") {
    const texts = [];
    for (const line of (result.stdout ?? "").split(/\r?\n/)) {
      try {
        const event = JSON.parse(line);
        if (event.type === "text" && event.part?.text) texts.push(event.part.text);
      } catch {
        if (line.trim()) parseErrors += 1;
      }
    }
    reviewText = texts.join("\n\n").trim();
  }
  const verdictMatch = reviewText.match(/\bverdict\b[\s:*_.-]{0,32}\b(pass(?:[- ]with[- ]concerns)?|fail|blocked)\b/i);
  const verdict = verdictMatch?.[1]?.toLowerCase().replaceAll(" ", "-") ?? null;
  const rawOutputSha256 = createHash("sha256").update(output).digest("hex");
  const rawOutputPath = join(directory, `${stamp}-${phase}-${persona}-${provider.id}.raw.txt.gz`);
  writeFileSync(rawOutputPath, gzipSync(output));
  const evidence = {
    phase,
    persona,
    providerId: provider.id,
    family: provider.family,
    model: provider.model,
    cliVersion,
    fixedPoint,
    task,
    promptPath: promptPath.replaceAll("\\", "/"),
    promptSha256,
    startedAt,
    finishedAt: new Date().toISOString(),
    timeoutSeconds,
    exitCode: result.status,
    signal: result.signal,
    error: result.error?.message ?? null,
    parserWarnings: parseErrors ? [`Ignored ${parseErrors} non-JSON OpenCode output line(s)`] : [],
    verdict,
    rawOutputPath: rawOutputPath.replaceAll("\\", "/"),
    rawOutputSha256,
    output: reviewText,
  };
  evidence.qualified = result.status === 0 && reviewText.length >= 120 && Boolean(verdict);
  const evidencePath = join(directory, `${stamp}-${phase}-${persona}-${provider.id}.json`);
  writeFileSync(evidencePath, `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
  console.log(`${provider.id}: exit=${result.status} verdict=${verdict ?? "missing"} output=${reviewText.length} evidence=${evidencePath}`);
  if (evidence.qualified) {
    success = true;
    break;
  }
}
process.exit(success ? 0 : 1);
