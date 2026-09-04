<!-- agent-doc
summary: Defines heterogeneous phase reviews, reviewer personas, evidence fields, and finding disposition rules.
read_when: At research, plan, implementation, and wrap-up gates for major work.
owner: review-steward
status: current
last_reviewed: 2026-09-03
-->

# Cross-agent review

Use at least one reviewer from a different provider/model family than the implementer when available. CLI diversity alone is insufficient. Reviewers read and report; they do not edit or commit.

## Phase gates

- Research: source quality, contradictions, missing evidence, domain assumptions.
- Plan: requirements, architecture, sequencing, rollback, tests, observability, feasibility.
- Implementation: correctness, scope, security, maintainability, tests, runtime evidence, performance, AI smells.
- Wrap-up: validation completeness, doc/trace accuracy, finding dispositions, clean diff, resumability.

## Personas and doc ownership

- spec/domain — requirements, terminology, and domain docs;
- maintainability/code quality — conventions, module boundaries, duplication, accidental complexity;
- security — trust boundaries, secrets, authorization, dependency and injection risk;
- performance — budgets, profiling evidence, algorithmic and resource regressions;
- test integrity — seam choice, assertion sensitivity, false confidence, flakiness;
- visual/accessibility — screenshots, states, keyboard, contrast, responsive behavior;
- operations — runbook, observability, recovery, deployment and rollback;
- AI smells — fabricated APIs, blanket exceptions, excessive comments, brittle mocks, scope creep, and unverified claims.

Every evidence file records provider, model, family, CLI version, phase, persona, fixed point, prompt hash, timestamps, timeout, exit code, and raw output. Findings are fixed, rejected with evidence, deferred with a queue reference, or blocked.
