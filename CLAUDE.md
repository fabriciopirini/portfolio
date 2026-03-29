# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Design context

@.impeccable.md contains the design context for this project — users, brand personality, aesthetic direction, and design principles. Read it before making any UI or design decisions.

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

## Copy voice

This site positions Fabricio as a **Design Engineer** — someone equally at home in Figma discussions and TypeScript PRs. Every word should reinforce that identity.

### Identity

- Title: **Design Engineer**. Not "Full Stack Developer", not "Frontend Engineer", not "Computer Engineer".
- Engineering depth (backend, infra, cloud) is a **DE amplifier**, not a contradiction. Frame it as: "I know why the API is slow, so I can design around it." Never hide it, never lead with it.
- Existing work (React modernization, visual testing, design tokens, working directly with designers) is DE work done under other titles. Reframe it through that lens.

### Voice

- Fragment-first, declarative sentences. "Not corporate theater. Just craft." not "I am passionate about crafting high-quality software."
- Short punchy statements over long explanations. One precise sentence beats three vague ones.
- Specificity over claims. Name the metric: "40% faster", "12 minutes to under 1 minute", "11 components". Never "significantly improved performance".
- Wry, not loud. The personality is a wink, not a shout.

### Process

After drafting any copy, run `/humanizer` on it before finalizing. This catches robotic phrasing that reads as AI-generated even when it technically follows the voice guidelines.

### What to avoid

- **Banned phrases**: "platform tooling", "platform infrastructure", "platform tools", "integrating innovation with efficiency", "dedicated [job title]", "results-driven", "passionate about", "leveraging", "bringing your ideas to life"
- **Banned word**: "infrastructure" — unless referring to a specific, named system. Never as a category ("I work on infrastructure").
- No AI-generated blandness. If a sentence could appear in a LinkedIn autocomplete, rewrite it.
- No corporate filler. Every sentence should sound like a real person with opinions.
- No dashes of any kind in copy — no em dashes (—), no en dashes (–), no hyphens used as pauses. Use commas or restructure the sentence.

### DE proof points to reinforce

When writing about Fabricio's work, these are the DE-specific achievements that prove the identity — use them, don't invent new ones:

- Figma-to-production gap closed (UI shipped matching the Figma file exactly)
- Design tokens automated across 11 core components — designers push themes without opening a ticket
- Visual testing system: 12 min → <1 min CI, 3× coverage
- Live chat unification: one integration, two platforms
- Sanity CMS rebuild: content teams deploy independently

## React Compiler

`reactCompiler: true` is enabled. Avoid manual `useMemo`/`useCallback` — the compiler handles memoization automatically. Only add them if you have a concrete performance measurement showing they're needed.
