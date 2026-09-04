<!-- agent-doc
summary: Defines the repository workflow from task intake through verified, resumable completion.
read_when: Before substantive implementation, autonomous work, or final validation.
owner: workflow-steward
status: current
last_reviewed: 2026-09-03
-->

# Agent workflow

## Start

1. Read the active `AGENTS.md` chain, this file, `docs/agents/DOCS_INDEX.md`, and the task source.
2. Confirm the repository root, worktree, branch, dirty state, task authority, and fixed point. Preserve unrelated changes.
3. Create a trace with `node tools/agent/trace.mjs start <task-slug>`.
4. Define observable done conditions, test seams, runtime proof, documentation impact, review gates, and rollback.

## Research and plan

Use primary evidence. For major work, run heterogeneous research and plan reviews with `node tools/agent/review.mjs`. Record findings and dispositions in the trace. A failed or timed-out reviewer is not a completed gate.

## Implement

Work in vertical slices: red-capable targeted check, minimum implementation, targeted validation, production-faithful runtime exercise, and evidence capture. Use `node tools/agent/run-captured.mjs --trace <path> -- <command> [args...]` for material commands.

Run the real app during the work. A build or mocked test alone is not runtime proof. If execution is impossible, record the exact blocker and remaining uncertainty.

Update system docs and `TEST_INVENTORY.md` with material changes. Convert repeated mechanical failures into deterministic fix-capable checks or reusable `tools/agent/` scripts when feasible.

## Review and close

1. Run heterogeneous implementation review with the relevant personas in `docs/agents/REVIEW.md`.
2. Fix or disposition every finding.
3. Run targeted tests, app smoke path, full validation, applicable visual regression and performance checks, then `node tools/agent/validate-agent-system.mjs`.
4. Run wrap-up review. Update `docs/agents/FEEDBACK.md` with concrete workflow friction.
5. Complete the trace with evidence, decisions, risks, and exact continuation instructions.
6. Commit work and trace together when authorized. After the commit contains the completed trace, run `node tools/agent/trace.mjs tag <trace-path>`.

Never call work complete when a configured gate failed, timed out, was unavailable, or was skipped without a documented risk decision.

The scaffold begins with `adoptionStatus: draft`. Use `--allow-draft` only to validate structure during setup. Set the status to `current` only after real commands replace placeholders and normal validation passes; do not install hooks before then.
