<!-- agent-doc
summary: Defines screenshot capture, deterministic states, baseline storage, comparison, and human visual review.
read_when: Changing a rendered UI, layout, styling, interaction state, or visual asset.
owner: visual-reviewer
status: current
last_reviewed: 2026-09-03
-->

# Visual regression

Start the app with `npm run dev -- --hostname 127.0.0.1 --port 3000`. The marketing routes require no seed data or account.

- Inspect affected routes at 390x844, 768x1024, and 1440x1000 in Chrome, light theme, English locale, 100% zoom, and default reduced-motion setting.
- Capture screenshots through the browser automation surface used by the task. Pixel-diff tooling and committed baselines are not configured; screenshots belong to the task or pull-request evidence, not the Git repository.
- Review hierarchy, text wrapping, spacing, card alignment, header/mobile CTA overlap, horizontal overflow, keyboard focus, contrast, image crops, favicon appearance, broken links, and console errors.
- A visual approval applies only to the inspected commit and viewport set. Repeat after any material CSS, font, image, or layout change.

Commit stable baselines only when repository policy allows it; otherwise attach immutable artifacts to the review surface and link them from the trace.
