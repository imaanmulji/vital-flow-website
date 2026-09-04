<!-- agent-doc
summary: Records repository-specific coding conventions that are not already enforced mechanically.
read_when: Editing or reviewing source code in this repository.
owner: maintainability-reviewer
status: current
last_reviewed: 2026-09-03
-->

# Coding conventions

Prefer deterministic formatters, linters, types, and tests over prose. Keep only conventions that require judgment or explain a project-specific constraint.

- Use TypeScript and Next.js App Router conventions. Pages and layouts remain Server Components unless browser-only state or effects require a small client component.
- Keep route-specific content in `src/app/**/page.tsx`, reusable site sections in `src/components/shared`, layout chrome in `src/components/layout`, and low-level primitives in `src/components/ui`.
- Use `next/link` for internal navigation, `next/image` for content images, and Next.js file-based metadata for icons. External links opened in a new tab include `rel="noopener noreferrer"`.
- Preserve the established `brand.*` Tailwind palette, responsive breakpoints, semantic headings, visible focus behavior, and plain-language alt text.
- Do not make guaranteed recovery-time, visit-count, reimbursement, or outcome claims without documented evidence and owner approval. Describe individualized assessment and ongoing plan review instead.
- Avoid broad dependency upgrades, unreviewed generated markup, duplicated page shells, and client-side JavaScript for static content.

When a recurring review comment can be checked mechanically, add a fix-capable rule or tool and remove redundant prose.
