<!-- agent-doc
summary: Defines committed session traces that let another agent resume work without reconstructing the session.
read_when: Starting, resuming, closing, or auditing substantive agent work.
owner: workflow-steward
status: current
last_reviewed: 2026-09-03
-->

# Agent traces

Create traces with `node tools/agent/trace.mjs start <task-slug>`. Keep the trace with the work it describes. A completed trace names the objective, fixed point, state, changed files, commands and results, runtime evidence, decisions, reviews, risks, next action, and exact continuation command.

After the commit contains the completed trace, create its immutable lookup tag with `node tools/agent/trace.mjs tag <trace-path>`.
