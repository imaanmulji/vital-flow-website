<!-- agent-doc
summary: Defines targeted checks used during implementation and the complete end-of-shift validation matrix.
read_when: Planning verification, completing a slice, committing, or ending an autonomous shift.
owner: quality-reviewer
status: current
last_reviewed: 2026-09-03
-->

# Validation contract

## Targeted during implementation

- Lint touched TypeScript/React code with `npm run lint`; there is no configured formatter or safe auto-fix command.
- Compile and typecheck the full application with `npm run build` after a coherent slice.
- Run `node --test tools/agent/agent-tools.test.mjs` when agent-owned tooling or contract files change.
- Start with `npm run dev -- --hostname 127.0.0.1 --port 3000`, then smoke the affected public route in a real browser.

## Full close-out

- `npm run lint`.
- `npm run build` for production compilation and typechecking.
- `node --test tools/agent/agent-tools.test.mjs`; no automated application test suite is currently configured.
- Browser smoke every changed route and its important links or controls.
- For visual changes, inspect 390px, 768px, and 1440px widths and record screenshots or equivalent evidence in the trace.
- For performance-sensitive changes, compare three mobile Lighthouse runs against `docs/agents/PERFORMANCE.md`.
- `node tools/agent/validate-agent-system.mjs`
- Run implementation and wrap-up review through `tools/agent/review.mjs`; record unavailable reviewers and every finding disposition without treating an unavailable reviewer as a pass.

Record command, exit code, timestamp, and output hash in the session trace. Do not collapse a partial run into “all tests pass.”
