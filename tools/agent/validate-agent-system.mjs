#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { gunzipSync } from "node:zlib";

if (process.argv.includes("--help")) {
  console.log("Usage: node tools/agent/validate-agent-system.mjs [--allow-draft]\n\nValidates project agent docs, configuration, traces, reviews, and test inventory. --allow-draft checks structure without claiming adoption is complete.");
  process.exit(0);
}
const allowDraft = process.argv.includes("--allow-draft");
const root = (() => {
  try {
    return execFileSync("git", ["rev-parse", "--show-toplevel"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return process.cwd();
  }
})();

const requiredMarkdown = [
  "AGENT_WORKFLOW.md",
  "TODOS.md",
  "docs/agents/DOCS_INDEX.md",
  "docs/agents/RUNBOOK.md",
  "docs/agents/TESTING.md",
  "docs/agents/TEST_INVENTORY.md",
  "docs/agents/VALIDATION.md",
  "docs/agents/REVIEW.md",
  "docs/agents/CODING_CONVENTIONS.md",
  "docs/agents/PERFORMANCE.md",
  "docs/agents/VISUAL_REGRESSION.md",
  "docs/agents/TOOLS.md",
  "docs/agents/SELF_HEALING_DOCS.md",
  "docs/agents/SWEEPS.md",
  "docs/agents/FEEDBACK.md",
  "docs/agent-traces/README.md",
  "docs/agent-reviews/README.md",
  "docs/agent-repairs/README.md",
];

const errors = [];
const warnings = [];
const normalize = (path) => path.split(sep).join("/");

function validateHeader(rel) {
  const path = join(root, rel);
  if (!existsSync(path)) {
    errors.push(`${rel}: missing`);
    return;
  }
  const text = readFileSync(path, "utf8");
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const rules = [
    lines[0] === "<!-- agent-doc",
    /^summary: \S.+/.test(lines[1] ?? ""),
    /^read_when: \S.+/.test(lines[2] ?? ""),
    /^owner: [a-z0-9][a-z0-9-]*$/.test(lines[3] ?? ""),
    /^status: (current|draft|stale)$/.test(lines[4] ?? ""),
    /^last_reviewed: \d{4}-\d{2}-\d{2}$/.test(lines[5] ?? ""),
    lines[6] === "-->",
  ];
  if (rules.some((valid) => !valid)) errors.push(`${rel}: invalid seven-line agent-doc header`);
  if (!allowDraft && (lines[4] === "status: draft" || /\bTODO\b/.test(text))) {
    errors.push(`${rel}: still draft or contains TODO`);
  }
}

for (const rel of requiredMarkdown) validateHeader(rel);

const routerFiles = [
  ["AGENTS.md", "<!-- agent-system-router:start -->"],
  ["CLAUDE.md", "<!-- agent-system-claude-router:start -->"],
];
for (const [rel, marker] of routerFiles) {
  const path = join(root, rel);
  if (!existsSync(path)) errors.push(`${rel}: missing`);
  else if (!readFileSync(path, "utf8").includes(marker)) errors.push(`${rel}: agent-system router block missing`);
}

const configPath = join(root, "agent-system.config.json");
let config;
if (!existsSync(configPath)) errors.push("agent-system.config.json: missing");
else {
  try {
    config = JSON.parse(readFileSync(configPath, "utf8"));
  } catch (error) {
    errors.push(`agent-system.config.json: ${error.message}`);
  }
}

if (config) {
  if (config.version !== 1) errors.push("agent-system.config.json: unsupported version");
  if (!allowDraft && config.adoptionStatus !== "current") {
    errors.push("agent-system.config.json: adoptionStatus must be 'current' before normal validation or hook installation");
  }
  for (const key of ["start", "healthcheck", "smoke"]) {
    if (!allowDraft && (!Array.isArray(config.runtime?.[key]) || config.runtime[key].length === 0)) {
      errors.push(`agent-system.config.json: runtime.${key} must contain a verified command`);
    }
  }
  if (!allowDraft && (!Array.isArray(config.validation?.full) || config.validation.full.length === 0)) {
    errors.push("agent-system.config.json: validation.full must contain verified commands");
  }
  const limits = config.nightShift ?? {};
  for (const key of ["maxTasks", "maxMinutes", "maxRetriesPerTask", "maxLlmRepairAttempts"]) {
    if (!Number.isFinite(limits[key]) || limits[key] < 0) errors.push(`agent-system.config.json: invalid nightShift.${key}`);
  }
  if (config.llmRepair?.enabled) {
    if (!config.llmRepair.providerId) errors.push("agent-system.config.json: enabled LLM repair needs providerId");
    if (!Array.isArray(config.llmRepair.validation) || !config.llmRepair.validation.length) {
      errors.push("agent-system.config.json: enabled LLM repair needs post-repair validation");
    }
  }
  const enabledFamilies = new Set((config.review?.providers ?? []).filter((provider) => provider.enabled).map((provider) => provider.family));
  if (enabledFamilies.size < Number(config.review?.minimumDistinctFamilies ?? 2)) {
    errors.push("agent-system.config.json: too few enabled review families for heterogeneous review");
  }
}

function walk(directory) {
  const output = [];
  if (!existsSync(directory)) return output;
  for (const name of readdirSync(directory)) {
    if ([".git", "node_modules", "dist", "build", "coverage", ".next", ".venv"].includes(name)) continue;
    const path = join(directory, name);
    if (statSync(path).isDirectory()) output.push(...walk(path));
    else output.push(path);
  }
  return output;
}

if (config?.tests?.patterns && existsSync(join(root, config.tests.inventory))) {
  const inventory = readFileSync(join(root, config.tests.inventory), "utf8");
  const likelyTests = walk(root)
    .map((path) => normalize(relative(root, path)))
    .filter((path) => !path.startsWith("docs/") && config.tests.patterns.some((pattern) => path.toLowerCase().includes(pattern.toLowerCase())));
  for (const test of likelyTests) {
    if (!inventory.includes(`\`${test}\``)) warnings.push(`TEST_INVENTORY.md may be missing ${test}`);
  }
}

const traceDir = join(root, "docs", "agent-traces");
for (const path of walk(traceDir).filter((path) => path.endsWith(".md") && !path.endsWith("README.md"))) {
  const text = readFileSync(path, "utf8");
  for (const heading of ["Objective", "State", "Evidence", "Reviews", "Risks", "Continuation"]) {
    if (!new RegExp(`^## ${heading}\\s*$`, "m").test(text)) errors.push(`${normalize(relative(root, path))}: missing ## ${heading}`);
  }
}

const reviewDir = join(root, "docs", "agent-reviews");
for (const path of walk(reviewDir).filter((path) => path.endsWith(".json"))) {
  try {
    const review = JSON.parse(readFileSync(path, "utf8"));
    for (const key of ["phase", "persona", "providerId", "family", "model", "cliVersion", "promptSha256", "startedAt", "finishedAt", "timeoutSeconds", "exitCode", "qualified", "verdict", "rawOutputPath", "rawOutputSha256", "output"]) {
      if (!(key in review)) errors.push(`${normalize(relative(root, path))}: missing ${key}`);
    }
    if (review.rawOutputPath && existsSync(review.rawOutputPath)) {
      const raw = gunzipSync(readFileSync(review.rawOutputPath));
      const actualHash = createHash("sha256").update(raw).digest("hex");
      if (actualHash !== review.rawOutputSha256) errors.push(`${normalize(relative(root, path))}: raw output hash mismatch`);
    } else if (review.rawOutputPath) {
      errors.push(`${normalize(relative(root, path))}: raw output file missing`);
    }
    if (review.qualified) {
      if (!/^(pass|pass-with-concerns|fail|blocked)$/.test(review.verdict ?? "")) errors.push(`${normalize(relative(root, path))}: invalid qualified verdict`);
      if ((review.output ?? "").length < 120) errors.push(`${normalize(relative(root, path))}: qualified review output is too short`);
    }
  } catch (error) {
    errors.push(`${normalize(relative(root, path))}: ${error.message}`);
  }
}

for (const warning of warnings) console.warn(`WARN ${warning}`);
for (const error of errors) console.error(`ERROR ${error}`);
console.log(`Agent-system validation: ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
