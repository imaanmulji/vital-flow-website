<!-- agent-doc
summary: Defines performance-sensitive paths, reproducible benchmarks, budgets, profiling tools, and regression policy.
read_when: Changing hot paths, dependencies, data volume, rendering, startup, I/O, or concurrency.
owner: performance-reviewer
status: current
last_reviewed: 2026-09-03
-->

# Performance contract

## Benchmarks and budgets

- Primary scenario: a cold mobile load of the production or Vercel preview home page in Chrome Lighthouse, default mobile throttling, three runs, median reported.
- 2026-09-03 production observation: Performance 93 and Largest Contentful Paint 3.2 seconds. This is an observational baseline, not a service-level guarantee.
- Investigate a median score drop greater than 5 points or an LCP increase greater than 10%. Do not block copy-only work on a single noisy run.

## Profiling

- Use the production build (`npm run build` followed by `npm run start`) for bundle and runtime investigation.
- Use Chrome DevTools Performance and Network panels for rendering, LCP, image, font, and request analysis. The site has no application database or background worker to profile.

## Regression policy

Capture baseline and post-change results. Treat noisy single runs as inconclusive. A regression beyond the documented tolerance blocks completion unless explicitly accepted with evidence.
