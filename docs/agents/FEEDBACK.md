<!-- agent-doc
summary: Accumulates concrete agent-workflow friction, failures, successful patterns, and proposed guardrail improvements.
read_when: Closing a substantive session or periodically improving the global and project workflows.
owner: workflow-steward
status: current
last_reviewed: 2026-09-03
-->

# Agent workflow feedback

Append only evidence-backed entries. Periodically review and promote repeated lessons into skills, deterministic tools, tests, hooks, or concise guidance.

## Entry template

### YYYY-MM-DD — trace or task

- What happened:
- Evidence:
- Root cause or uncertainty:
- Workflow/tool improvement:
- Disposition and owner:

### 2026-09-03 — favicon-care-expectations

- What happened: The Vercel connector returned no teams even though the laptop browser was already authenticated and showed the project; the bundled `agent-browser` command was also unavailable on PATH.
- Evidence: Browser access resolved `imaanmulji/vital-flow-website`; `git ls-remote` and clone succeeded; the CLI verification attempt failed with command-not-found.
- Root cause or uncertainty: Connector authorization state is separate from the browser session, and the plugin shipped skill instructions without a callable CLI in this environment.
- Workflow/tool improvement: Detect the authenticated browser and CLI availability before telling a mobile user to repeat connection steps; use CUA plus Chrome DevTools Protocol as the documented local fallback.
- Disposition and owner: Used the signed-in browser and production-style CDP checks for this task; plugin/runtime owners should improve capability detection.
