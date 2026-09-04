<!-- agent-doc
summary: Holds the prioritized local task queue when no external tracker is declared.
read_when: Selecting work for an interactive or autonomous agent shift.
owner: product-steward
status: current
last_reviewed: 2026-09-03
-->

# Task queue

Use stable IDs. Record priority, dependencies, acceptance criteria, risk, and status. Do not start blocked work or invent priority.

## Ready

No repository-local product work is currently queued. Product and deployment work is requested by the repository owner and tracked in its originating task or pull request.

## Blocked

- `VF-001` (P1): Replace the homepage clinician-photo placeholder. Dependency: an owner-approved portrait of Dr. Palak Mulji and approved alt text. Acceptance: the verified portrait renders responsively without layout shift. Risk: `public/images/dr-palak-portrait.webp` visibly identifies a different clinician and must not be used as Dr. Mulji.

## Done
