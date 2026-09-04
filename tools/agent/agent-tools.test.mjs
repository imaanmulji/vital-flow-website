import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import test from "node:test";

const toolRoot = resolve("tools/agent");
const temporaryDirectories = [];
const makeTemp = () => {
  const path = mkdtempSync(join(tmpdir(), "agent-tools-test-"));
  temporaryDirectories.push(path);
  return path;
};
process.on("exit", () => {
  for (const path of temporaryDirectories) {
    if (dirname(path) === tmpdir() && basename(path).startsWith("agent-tools-test-")) {
      rmSync(path, { recursive: true, force: true });
    }
  }
});

const scripts = [
  "validate-agent-system.mjs",
  "trace.mjs",
  "run-captured.mjs",
  "review.mjs",
  "precommit.mjs",
  "repair.mjs",
];

for (const script of scripts) {
  test(`${script} exposes help without side effects`, () => {
    const result = spawnSync(process.execPath, [join(toolRoot, script), "--help"], {
      cwd: process.cwd(),
      encoding: "utf8",
    });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Usage:/);
  });
}

test("draft project contract passes structural validation only", () => {
  const result = spawnSync(process.execPath, [join(toolRoot, "validate-agent-system.mjs"), "--allow-draft"], {
    cwd: process.cwd(),
    encoding: "utf8",
  });
  assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
});

test("trace creation and captured command produce hashed evidence", () => {
  const cwd = makeTemp();
  const started = spawnSync(process.execPath, [join(toolRoot, "trace.mjs"), "start", "evidence-test"], { cwd, encoding: "utf8" });
  assert.equal(started.status, 0, started.stderr);
  const trace = started.stdout.trim();
  assert.equal(existsSync(trace), true);
  const captured = spawnSync(process.execPath, [join(toolRoot, "run-captured.mjs"), "--trace", trace, "--", process.execPath, "--version"], { cwd, encoding: "utf8" });
  assert.equal(captured.status, 0, captured.stderr);
  const text = readFileSync(trace, "utf8");
  assert.match(text, /exit 0/);
  assert.match(text, /sha256/);
  assert.match(text, /evidence/);
});

test("completed committed trace receives an immutable lookup tag", () => {
  const cwd = makeTemp();
  assert.equal(spawnSync("git", ["init"], { cwd, encoding: "utf8" }).status, 0);
  const started = spawnSync(process.execPath, [join(toolRoot, "trace.mjs"), "start", "tag-test"], { cwd, encoding: "utf8" });
  assert.equal(started.status, 0, started.stderr);
  const trace = started.stdout.trim();
  writeFileSync(trace, readFileSync(trace, "utf8").replace("- Status: active", "- Status: complete"), "utf8");
  assert.equal(spawnSync("git", ["add", "."], { cwd, encoding: "utf8" }).status, 0);
  const committed = spawnSync("git", ["-c", "user.name=Agent Tool Test", "-c", "user.email=agent-tool@example.invalid", "commit", "-m", "Add completed trace"], { cwd, encoding: "utf8" });
  assert.equal(committed.status, 0, committed.stderr);
  const tagged = spawnSync(process.execPath, [join(toolRoot, "trace.mjs"), "tag", trace], { cwd, encoding: "utf8" });
  assert.equal(tagged.status, 0, tagged.stderr);
  const tag = tagged.stdout.trim();
  assert.match(tag, /^agent-trace\//);
  const listed = spawnSync("git", ["tag", "--list", tag], { cwd, encoding: "utf8" });
  assert.equal(listed.stdout.trim(), tag);
});

test("normal validation rejects an empty directory", () => {
  const cwd = makeTemp();
  const result = spawnSync(process.execPath, [join(toolRoot, "validate-agent-system.mjs")], { cwd, encoding: "utf8" });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing/);
});

test("LLM repair refuses to run while disabled", () => {
  const result = spawnSync(process.execPath, [join(toolRoot, "repair.mjs"), "--check-index", "0", "--files", "AGENT_WORKFLOW.md"], {
    cwd: process.cwd(),
    encoding: "utf8",
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /LLM repair is disabled/);
});
