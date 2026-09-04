<!-- agent-doc
summary: Maps every maintained test file or suite to the behavior, public seam, and risks it proves.
read_when: Planning behavior changes, selecting targeted tests, reviewing coverage, or auditing test effectiveness.
owner: test-integrity-reviewer
status: current
last_reviewed: 2026-09-03
-->

# Test inventory

List paths in backticks so `validate-agent-system.mjs` can compare likely test files with this inventory.

| Test path or suite | Behavior and public seam | Risks and notable omissions |
| --- | --- | --- |
| `tools/agent/agent-tools.test.mjs` | Agent tool help and draft-structure validation | Does not invoke paid or authenticated reviewers |
| Manual browser smoke | Public routes, responsive layout, links, favicon, and console state | No automated application end-to-end suite; evidence belongs in the active trace |
| `npm run build` | Production route compilation, TypeScript, metadata, and asset processing | Does not prove browser interaction or visual correctness |
