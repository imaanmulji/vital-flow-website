<!-- agent-doc
summary: Tracks evidence and resumable state for production-release.
read_when: Resuming, reviewing, or auditing this task.
owner: workflow-steward
status: current
last_reviewed: 2026-09-04
-->

# Agent trace: production-release

- Status: complete
- Started: 2026-09-04T03:14:45.470Z
- Starting commit: e85422a549d710c10bec06b27f41071c8686e2ba

## Objective

Close any remaining fixed-speed treatment claims discovered at the release gate, validate the complete release candidate, and publish the owner-approved favicon and care-expectations update through GitHub and Vercel.

## State

The final BPPV speed/outcome claims were replaced with individualized language, pull request #1 was merged into `main`, Vercel completed the production deployment, and `https://www.vitalflowpt.com/` passed the production canary. Independent release review found no remaining P0/P1 regression.

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
- Pull request #1 merged at `2026-09-04T03:19:57Z` as `7c195773277849fa14489bfc5ed294a7d31035ad` after both Vercel checks passed.
- Vercel marked the production deployment successful.
- The live production sitemap smoke checked all 25 routes with zero response or risky-copy issues.
- Live targeted checks returned HTTP 200 for `/`, `/blog`, and `/blog/signs-you-need-vestibular-therapy`; the new care/timeline copy and corrected blog language rendered while the removed claims did not.
- The live `/favicon.ico` returned HTTP 200 and matched the approved asset byte-for-byte (SHA-256 `4d161dc3580d3228a12e7866f2e593872bbe300b61b7e2ed78c4cdbbad6a62f2`).
- A fresh in-app browser check found the live homepage content present, no error overlay, no horizontal overflow, and no console errors.

## Reviews

- Independent pre-production review identified the two BPPV claims as a release blocker, then re-read the corrected working tree and found no further P0/P1 issue across design, testing, maintainability, performance, and adversarial checks.
- Plan/scope audit found the requested favicon and care-expectations work complete and the scope clean. Vercel state remains intentionally pending until deployment verification.
- Coverage audit assessed 76% before counting the fresh post-fix runtime checks and approximately 82% afterward. Remaining interaction-test gaps are low-risk for this static copy/UI release.

## Risks

- Browser favicon caches can temporarily retain the prior icon; the production asset itself is current and verified.
- Medicare participation language is contradictory across existing pages. `VF-002` requires owner-confirmed policy before copy can be reconciled safely.
- The clinician portrait remains blocked on an owner-approved image under `VF-001`.

## Continuation

- Next action: resolve `VF-002` after the owner confirms the correct Medicare participation policy; resolve `VF-001` after an approved portrait is supplied.
- Rollback: promote the Vercel production deployment immediately preceding merge `7c195773277849fa14489bfc5ed294a7d31035ad`, or revert that merge and let Vercel redeploy `main`.
