#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join, relative, resolve } from "node:path";

const [action, argument] = process.argv.slice(2);
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
const now = new Date();
const stamp = now.toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 13);
const day = now.toISOString().slice(0, 10);
const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);

if (action === "--help" || action === "-h") {
  console.log("Usage:\n  node tools/agent/trace.mjs start <task-slug>\n  node tools/agent/trace.mjs tag <trace-path>");
  process.exit(0);
}

if (action === "start") {
  const slug = slugify(argument ?? "task");
  const directory = join(root, "docs", "agent-traces");
  mkdirSync(directory, { recursive: true });
  const path = join(directory, `${stamp}-${slug}.md`);
  if (existsSync(path)) throw new Error(`Trace already exists: ${path}`);
  let head = "not-a-git-repository";
  try {
    head = execFileSync("git", ["rev-parse", "HEAD"], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {}
  const content = `<!-- agent-doc
summary: Tracks evidence and resumable state for ${slug}.
read_when: Resuming, reviewing, or auditing this task.
owner: workflow-steward
status: current
last_reviewed: ${day}
-->

# Agent trace: ${slug}

- Status: active
- Started: ${now.toISOString()}
- Starting commit: ${head}

## Objective

TODO

## State

TODO

## Decisions

TODO

## Changed files

TODO

## Evidence

TODO

## Reviews

TODO

## Risks

TODO

## Continuation

- Next action: TODO
- Exact command: TODO
`;
  writeFileSync(path, content, "utf8");
  console.log(path);
  process.exit(0);
}

if (action === "tag") {
  if (!argument) throw new Error("Usage: node tools/agent/trace.mjs tag <trace-path>");
  const path = resolve(root, argument);
  if (!existsSync(path)) throw new Error(`Trace not found: ${path}`);
  const text = readFileSync(path, "utf8");
  if (!/- Status: complete\b/.test(text)) throw new Error("Trace must contain '- Status: complete' before tagging");
  try {
    execFileSync("git", ["rev-parse", "--is-inside-work-tree"], { cwd: root, stdio: "ignore" });
  } catch {
    throw new Error("Trace tagging requires a Git repository");
  }
  const rel = relative(root, path).replaceAll("\\", "/");
  execFileSync("git", ["cat-file", "-e", `HEAD:${rel}`], { cwd: root, stdio: "ignore" });
  execFileSync("git", ["diff", "--quiet", "--", rel], { cwd: root, stdio: "ignore" });
  execFileSync("git", ["diff", "--cached", "--quiet", "--", rel], { cwd: root, stdio: "ignore" });
  const name = basename(path, ".md");
  const tag = `agent-trace/${name}`;
  try {
    execFileSync("git", ["rev-parse", "--verify", `refs/tags/${tag}`], { cwd: root, stdio: "ignore" });
    throw new Error(`Tag already exists: ${tag}`);
  } catch (error) {
    if (error.message?.startsWith("Tag already exists")) throw error;
  }
  execFileSync("git", ["tag", "-a", tag, "HEAD", "-m", `Agent trace ${name}`], { cwd: root, stdio: "inherit" });
  console.log(tag);
  process.exit(0);
}

console.log("Usage:\n  node tools/agent/trace.mjs start <task-slug>\n  node tools/agent/trace.mjs tag <trace-path>");
process.exit(action ? 2 : 0);
