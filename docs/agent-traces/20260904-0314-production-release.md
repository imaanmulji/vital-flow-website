<!-- agent-doc
summary: Tracks evidence and resumable state for production-release.
read_when: Resuming, reviewing, or auditing this task.
owner: workflow-steward
status: current
last_reviewed: 2026-09-04
-->

# Agent trace: production-release

- Status: active
- Started: 2026-09-04T03:14:45.470Z
- Starting commit: e85422a549d710c10bec06b27f41071c8686e2ba

## Objective

Close any remaining fixed-speed treatment claims discovered at the release gate, validate the complete release candidate, and publish the owner-approved favicon and care-expectations update through GitHub and Vercel.

## State

The final BPPV speed/outcome claims have been replaced with individualized language. Fresh lint, production build, and a 25-route local production-runtime smoke pass. Independent release review found no remaining P0/P1 regression. Commit, protected preview verification, merge, and production canary remain.

## Decisions

- Removed the treatment-duration promise from the blog card and the single-treatment resolution statistic from the article because both could recreate the expectation the owner asked to remove.
- Kept clinical timing that describes natural history, postpartum screening guidance, appointment length, or insurance processing because those statements do not promise a patient's treatment result.
- Logged the inherited Medicare participation contradiction as blocked follow-up `VF-002` instead of guessing which policy is accurate.

## Changed files

- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `TODOS.md`
- This trace.

## Evidence

- `npm run lint` passed after the copy correction.
- `npm run build` passed after the copy correction and generated all 30 routes.
- The production-style local runtime served all 25 sitemap routes with no risky copy matches.
- Targeted checks confirmed the two removed BPPV claims no longer render on `/blog` or `/blog/signs-you-need-vestibular-therapy`.

## Reviews

- Independent pre-production review identified the two BPPV claims as a release blocker, then re-read the corrected working tree and found no further P0/P1 issue across design, testing, maintainability, performance, and adversarial checks.
- Plan/scope audit found the requested favicon and care-expectations work complete and the scope clean. Vercel state remains intentionally pending until deployment verification.
- Coverage audit assessed 76% before counting the fresh post-fix runtime checks and approximately 82% afterward. Remaining interaction-test gaps are low-risk for this static copy/UI release.

## Risks

- Production must not be called ready until the main-branch Vercel deployment is Ready and `vitalflowpt.com` is checked directly.
- Medicare participation language is contradictory across existing pages. `VF-002` requires owner-confirmed policy before copy can be reconciled safely.
- The clinician portrait remains blocked on an owner-approved image under `VF-001`.

## Continuation

- Next action: commit and push the corrected release candidate, verify its Vercel preview, create and merge the GitHub pull request, then run the production canary.
- Exact command: `git push origin codex/favicon-care-expectations`
