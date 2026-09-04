<!-- agent-doc
summary: Defines evidence-driven documentation updates, seven-line metadata, ownership, routing, and stale-doc handling.
read_when: Behavior, commands, architecture, tests, constraints, ownership, or source-of-truth locations change.
owner: documentation-steward
status: current
last_reviewed: 2026-09-03
-->

# Self-healing documentation

Agent-owned Markdown starts with the exact seven-line `agent-doc` envelope used here. Keep `summary` and `read_when` concrete and greppable.

The scaffold value `last_reviewed: 1970-01-01` is an explicit “never project-reviewed” sentinel. Replace it with the actual review date before setting a document or project adoption status to `current`.

Update docs in the same change when material evidence changes: public behavior, commands, interfaces, architecture, tests, constraints, performance budgets, visual baselines, failure modes, ownership, or source-of-truth paths. Do not churn docs for formatting-only edits.

Every authoritative doc appears in `DOCS_INDEX.md` with an owner persona. Review personas check their owned docs during implementation and wrap-up. If evidence conflicts with a doc, mark it stale immediately, record the conflict, and repair it before completion or queue a blocking follow-up.

Never preserve certainty that evidence no longer supports. Include constraints, tradeoffs, caveats, and unresolved uncertainty.
