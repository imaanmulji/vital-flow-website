<!-- agent-doc
summary: Defines the evidence, file scope, safety boundary, and review cycle for opt-in LLM repair.
read_when: Enabling, running, reviewing, or debugging an LLM-assisted repair.
owner: tooling-steward
status: current
last_reviewed: 2026-09-03
-->

# LLM repair evidence

Deterministic fixers run first. `repair.mjs` is disabled until `agent-system.config.json` names a provider, validation commands, timeout, and maximum file count.

Repair is limited to explicitly staged or passed files. It records the failing command, provider/model, timestamps, output, and before/after diff hashes. Any new change outside the allowed file set fails the repair. Successful repair still stops the commit so the result can be reviewed and restaged. The repair agent never stages, commits, tags, changes hook configuration, or suppresses checks.
