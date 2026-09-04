<!-- agent-doc
summary: Defines public test seams, test design rules, mocking limits, and how tests are maintained.
read_when: Adding behavior, fixing bugs, changing tests, or auditing false confidence.
owner: test-integrity-reviewer
status: current
last_reviewed: 2026-09-03
-->

# Testing guide

Tests prove behavior through public interfaces and should survive internal refactors. Use vertical slices: one failing test, minimum implementation, then the next behavior.

## Approved seams

- The primary product seam is the rendered website in a real browser, locally and on a Vercel preview. Use it for navigation, copy, responsive layout, links, favicon, accessibility, and console-error checks.
- `npm run build` is the production compilation seam for route generation, TypeScript, metadata files, and server/client component boundaries.
- `npm run lint` is the static quality seam for TypeScript and React source.
- The repository currently has no application unit or integration suite. Add one only when behavior has a stable public interface that a browser/build check cannot cover economically.

## Commands

- Targeted: `npm run lint` and the smallest relevant browser route.
- Full suite: `node --test tools/agent/agent-tools.test.mjs`, `npm run lint`, then `npm run build`.
- End-to-end: start the real app and exercise the affected routes and controls in a browser at required viewports.
- Mutation or sensitivity audit: not automated for application code; when a regression guard is added, deliberately reverse the protected behavior once to prove the check fails.

## Avoid

- tautological expected values;
- snapshots without independent behavioral assertions;
- mocking the behavior under test;
- private-method or implementation-coupled assertions;
- tests that pass when the protected branch is removed or inverted;
- broad sleeps, uncontrolled clocks, networks, randomness, or shared state.

Update `TEST_INVENTORY.md` with added, removed, renamed, or materially changed tests.
