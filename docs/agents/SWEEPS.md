<!-- agent-doc
summary: Defines periodic cross-commit, documentation, test-confidence, visual, security, and performance sweeps.
read_when: Scheduling or running recurring repository health audits.
owner: quality-reviewer
status: current
last_reviewed: 2026-09-03
-->

# Periodic sweeps

Configure cadence only after commands, budgets, safe windows, and repository scope are known.

- Recent-commit sweep: review a fixed commit range for interactions, regressions, repeated smells, missing docs, and risky assumptions invisible in one diff.
- Test-confidence sweep: use mutation or controlled perturbation to prove critical tests fail for the right reason.
- Performance sweep: run stable benchmarks against budgets and investigate statistically meaningful drift.
- Visual sweep: capture deterministic states, compare baselines, and run human/agent visual review.
- Documentation sweep: validate headers, links, owners, commands, and contradictions against current code and runtime evidence.
- Security/operations sweep: review dependency changes, trust boundaries, secrets, observability, recovery, and runbook accuracy.

Every sweep produces a trace, fixed range/baseline, findings, dispositions, and queue entries. A sweep does not silently edit unrelated code.
