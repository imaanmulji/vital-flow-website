#!/usr/bin/env node

import { createHash } from "node:crypto";
import { appendFileSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { spawnPortable } from "./process-runner.mjs";

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log("Usage: node tools/agent/run-captured.mjs --trace <trace-path> -- <command> [args...]\n\nRuns a material command, saves full output, and appends timestamp, exit code, and output hash to the trace.");
  process.exit(0);
}
const traceIndex = args.indexOf("--trace");
const divider = args.indexOf("--");
if (traceIndex < 0 || !args[traceIndex + 1] || divider < 0 || divider === args.length - 1) {
  console.error("Usage: node tools/agent/run-captured.mjs --trace <trace-path> -- <command> [args...]");
  process.exit(2);
}
const trace = resolve(args[traceIndex + 1]);
const [command, ...commandArgs] = args.slice(divider + 1);
const startedAt = new Date().toISOString();
const result = spawnPortable(command, commandArgs, {
  cwd: process.cwd(),
  encoding: "utf8",
  timeout: Number(process.env.AGENT_COMMAND_TIMEOUT_MS ?? 900000),
});
const stdout = result.stdout ?? "";
const stderr = result.stderr ?? "";
const finishedAt = new Date().toISOString();
const sha = createHash("sha256").update(stdout + "\n" + stderr).digest("hex");
const safeStamp = startedAt.replace(/[:.]/g, "-");
const evidenceDir = join(dirname(trace), "evidence", basename(trace, ".md"));
mkdirSync(evidenceDir, { recursive: true });
const evidencePath = join(evidenceDir, `${safeStamp}.log`);
writeFileSync(evidencePath, `command: ${JSON.stringify([command, ...commandArgs])}\nstarted: ${startedAt}\nfinished: ${finishedAt}\nexit: ${result.status}\nsignal: ${result.signal ?? ""}\nerror: ${result.error?.message ?? ""}\nsha256: ${sha}\n\nSTDOUT\n${stdout}\nSTDERR\n${stderr}`, "utf8");
appendFileSync(trace, `\n- ${startedAt} — \`${[command, ...commandArgs].join(" ")}\` — exit ${result.status ?? "null"} — sha256 \`${sha}\` — evidence \`${relative(dirname(trace), evidencePath).replaceAll("\\", "/")}\`\n`, "utf8");
process.stdout.write(stdout);
process.stderr.write(stderr);
process.exit(result.status ?? 1);
