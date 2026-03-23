# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- BEGIN:nextjs-agent-rules -->

## Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

## Package manager

Use `bun`, not `npm` or `yarn`. Use `bunx` instead of `npx`.

## Commands

- **Dev**: `bun dev` (port 3001, not 3000)
- **Type check**: `bun ts`
- **Type check + lint**: `bun check-code`
- **Format + lint (write)**: `bun lint`
- **Unit tests**: `bun test:unit`
- **E2E tests**: `bun test:e2e`

## Code style

- No semicolons, single quotes, 120-char line width (oxfmt enforced)
- Tailwind classes are auto-sorted by oxfmt — don't manually reorder them
- Inside `app/`, named exports are required. Default exports only for Next.js special files: `page.tsx`, `layout.tsx`, `opengraph-image.tsx`, `error.tsx`, `not-found.tsx`, `sitemap.ts`, `robots.ts`
- Use `import type` for type-only imports (oxlint will error otherwise)
- Path alias `@/` maps to the project root

## React Compiler

`reactCompiler: true` is enabled. Avoid manual `useMemo`/`useCallback` — the compiler handles memoization automatically. Only add them if you have a concrete performance measurement showing they're needed.
