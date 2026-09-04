#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { spawnPortable } from "./process-runner.mjs";

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log("Usage: node tools/agent/precommit.mjs\n\nRuns configured deterministic fix commands, checks, and normal agent-system validation. Hook installation is blocked while adoptionStatus is draft.");
  process.exit(0);
}
const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "agent-system.config.json"), "utf8"));

function run(argv, label) {
  if (!Array.isArray(argv) || !argv.length) throw new Error(`${label} command must be a non-empty argv array`);
  console.log(`${label}: ${argv.join(" ")}`);
  const result = spawnPortable(argv[0], argv.slice(1), {
    cwd: root,
    encoding: "utf8",
    stdio: "inherit",
    timeout: 10 * 60 * 1000,
  });
  return result.status ?? 1;
}

for (const command of config.hooks?.fix ?? []) {
  const status = run(command, "fix");
  if (status !== 0) process.exit(status);
}
for (const [index, command] of (config.hooks?.check ?? []).entries()) {
  const status = run(command, "check");
  if (status === 0) continue;
  if (!config.llmRepair?.enabled) process.exit(status);
  let staged = "";
  try {
    staged = spawnPortable("git", ["diff", "--cached", "--name-only", "--diff-filter=ACMR"], {
      cwd: root,
      encoding: "utf8",
    }).stdout ?? "";
  } catch {}
  const files = staged.split(/\r?\n/).filter(Boolean);
  if (!files.length) process.exit(status);
  const repair = run(["node", "tools/agent/repair.mjs", "--check-index", String(index), "--files", ...files], "llm-repair");
  if (repair !== 0) process.exit(repair);
  console.error("LLM repair completed and validation passed. Review and restage the modified files, then commit again.");
  process.exit(1);
}
process.exit(run(["node", "tools/agent/validate-agent-system.mjs"], "agent-system"));
