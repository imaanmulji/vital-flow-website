<!-- agent-doc
summary: Routes agents to authoritative system documents and names the persona responsible for each.
read_when: At task intake and whenever the correct source of truth is unclear.
owner: documentation-steward
status: current
last_reviewed: 2026-09-03
-->

# Agent docs index

Read only the documents whose conditions apply. Add project system docs here; do not duplicate their contents.

| Document | Read when | Owner persona |
| --- | --- | --- |
| `AGENT_WORKFLOW.md` | Substantive or autonomous work | workflow-steward |
| `docs/agents/RUNBOOK.md` | Running or debugging the app | operations-reviewer |
| `docs/agents/TESTING.md` | Adding, changing, or auditing tests | test-integrity-reviewer |
| `docs/agents/TEST_INVENTORY.md` | Changing behavior or test coverage | test-integrity-reviewer |
| `docs/agents/VALIDATION.md` | During implementation and close-out | quality-reviewer |
| `docs/agents/REVIEW.md` | Any major phase gate | review-steward |
| `docs/agents/CODING_CONVENTIONS.md` | Editing code | maintainability-reviewer |
| `docs/agents/PERFORMANCE.md` | Performance-sensitive paths | performance-reviewer |
| `docs/agents/VISUAL_REGRESSION.md` | User-visible UI changes | visual-reviewer |
| `docs/agents/TOOLS.md` | Creating or using agent tooling | tooling-steward |
| `docs/agents/SELF_HEALING_DOCS.md` | Any material behavior or architecture change | documentation-steward |
| `docs/agents/SWEEPS.md` | Periodic or cross-commit audits | quality-reviewer |
| `docs/agents/FEEDBACK.md` | End of a substantive shift | workflow-steward |
| `docs/agent-repairs/README.md` | Configuring or auditing LLM repair | tooling-steward |
| `README.md` | Understanding the product and local development entry points | product-steward |
| `package.json` | Checking exact scripts, framework versions, and dependencies | maintainability-reviewer |
| `next.config.mjs` | Changing Next.js build or runtime behavior | operations-reviewer |

The application is a static marketing site without a database or authenticated product API. Add narrower architecture, security, or data documents here if those surfaces are introduced.
