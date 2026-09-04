<!-- agent-doc
summary: Catalogs reusable agent tools, their contracts, extension rules, and repair safety boundaries.
read_when: Running, modifying, or creating automation under tools/agent.
owner: tooling-steward
status: current
last_reviewed: 2026-09-03
-->

# Agent tools

| Tool | Purpose |
| --- | --- |
| `validate-agent-system.mjs` | Validate docs, configuration, traces, reviews, and test inventory. |
| `trace.mjs` | Start traces and tag committed completed traces. |
| `run-captured.mjs` | Run commands and append exit-code/output-hash evidence to a trace. |
| `review.mjs` | Run timeout-bounded heterogeneous reviews and save raw evidence. |
| `precommit.mjs` | Run configured deterministic fixers, checks, and agent-system validation. |
| `repair.mjs` | Run explicitly enabled, file-scoped LLM repair and post-repair validation. |

New tools must have a narrow contract, non-destructive defaults, `--help`, timeouts for subprocesses, structured exit codes, cross-platform paths, and a representative test. Prefer Node already used by the agent system; use project-native languages when that materially reduces dependencies.

LLM repair is opt-in only. It requires explicit provider/model, budget, timeout, file limit, captured before/after diff, and post-repair validation. It may not stage, commit, tag, disable checks, or touch files outside the declared scope. After repair, the hook stops so a human or primary agent must inspect and restage the result.
