# AGENTS.md

## Agent Discovery & Content Negotiation

Patterns established April 2026 for AI agent discoverability (isitagentready.com checks).

### Link Headers (RFC 8288)

- Use **registered IANA relation types only** — `describedby`, `service-doc`, `api-catalog` etc. Custom types like `rel="cv"` are ignored by validators.
- Set via `headers()` export in `app/page.tsx` (Next.js page convention).
- Example: `Link: '</llms.txt>; rel="describedby", </resume>; rel="describedby"'`

### Markdown Content Negotiation

- **Do NOT use `proxy.ts`** for header-based routing. Next.js 16 deprecated middleware in favor of proxy, but rewrites are better here.
- Use `beforeFiles` rewrites in `next.config.js` with `has` conditions matching `Accept` headers. Default array rewrites are `afterFiles` (fire after filesystem routes like `app/page.tsx`), so they lose to filesystem routes.
- Route handler returns `Content-Type: text/markdown` + `Vary: Accept` + `x-markdown-tokens`.
- Pattern from Next.js 16 docs: `{ source: '/', destination: '/api/markdown', has: [{ type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' }] }`

### robots.txt with Content Signals

- `MetadataRoute.Robots` type in `app/robots.ts` **cannot emit comments**. Switched to route handler (`app/api/robots/route.ts`) + rewrite.
- Content-Signal format: `# Content-Signal: ai-train=no, search=yes, ai-input=yes` (IETF aipref working group).
- Keep dynamic — use env var for sitemap URL. **Bug caught**: `NEXT_PUBLIC_VERCEL_URL` already includes `https://`, don't prepend it again.

### Key Lessons

- **Read Context7 docs before implementing** — Next.js 16 renamed middleware.ts to proxy.ts, and the rewrite execution order (`beforeFiles` vs `afterFiles`) matters for content negotiation.
- **Test locally AND on Vercel** — some behaviors (caching headers, edge runtime) differ between local and production.
- **Use `vercel ls`** to check deployment status instead of hardcoded waits.

## Testing Policy

All new features, updates, and changes must include tests to prevent regressions:

- **API routes** (`app/api/*`): unit tests verifying response headers, status codes, and body content.
- **Rewrite rules**: integration tests confirming content negotiation returns correct `Content-Type` based on `Accept` header.
- **Route handlers**: test edge cases (missing files, invalid paths).
- Use `bun test:unit` for unit tests, `bun test:e2e` for end-to-end.

## UI/UX Audit Progress

Source: UI/UX Pro Max audit conducted April 2026. Work through these one at a time, test via browser, commit before moving on.

### Completed (Audit 1)

- [x] **P0 #1**: Add skip-to-content link in layout.tsx (jumps to `#experience`)
- [x] **P0 #2**: Add focus-visible styles on all interactive elements (global ring in globals.css, hamburger button fix, dropdown menu ring)
- [x] **P0 #3**: Fix footer email link aria-label (was "Github", now "Send email to Fabricio")
- [x] **P0 #4**: Fix touch targets below 44px — footer social icons, project card GitHub icon, CTAButton mobile
- [x] **P1 #5**: Respect reduced-motion for Framer Motion animations and Atropos 3D tilt
- [x] **P1 #6**: Add active nav state with IntersectionObserver
- [x] **P1 #7**: Reduce long animation durations (sideMe 1.2s, appearDownAndFade 3.5s)
- [x] **P1 #8**: Consider dropping Poppins font (3 → 2 font families) — kept, intentional design choice
- [x] **P1 #9**: Define z-index token scale (SideMe uses z-[1000])
- [x] **P1 #10**: Fix hover-only interactions for touch devices — already handled by `hoverOnlyWhenSupported: true`
- [x] **P2 #11**: Section padding inconsistency across Hero/AboutMe/Technology/WorkExperience/Projects
- [x] **P2 #12**: WorkExperience timeline border only renders for cardIdx === 0
- [x] **P2 #13**: Atropos library loaded for skill cards — consider lazy-loading
- [x] **P2 #14**: Project "What went wrong" summary text-primary/40 is borderline contrast (~4.2:1)
- [x] **P2 #15**: Coin counter hidden outside /shop — kept shop-only, intentional design
- [x] **P2 #16**: Add aria-labelledby to sections
- [x] **P2 #17**: Border-radius inconsistency — 21 instances of rounded overrides
- [x] **P2 #18**: AboutMe carousel opts.active=false on desktop — works, 3 cards visible
- [x] **P3 #19**: Logo alt+aria-hidden redundancy — fixed, decorative logo uses alt="" + aria-hidden
- [x] **P3 #20**: View transition blur filter perf — already disabled via prefers-reduced-motion
- [x] **P3 #21**: SideMe 90s delay — kept, intentional design

### Completed (Audit 2)

- [x] **P1 #N11**: Projects role label `text-primary/50` contrast fail (~3.7:1) → bumped to `/65`
- [x] **P1 #N12**: Projects details `text-primary/60` borderline contrast → bumped to `/70`
- [x] **P1 #N5**: Basket remove button touch target too small (20px icon, no padding) → added `size-11` + `rounded-full` + hover/active states
- [x] **P1 #N1**: HeroLegoImage `alt="Profile Picture"` + `aria-hidden` conflict → changed to `alt=""`
- [x] **P1 #N3**: Name popover email `<a>` missing `aria-label` → added `aria-label="Send email to Fabricio"`
- [x] **P2 #N4**: error.tsx missing `aria-live` for screen readers → added `role="alert" aria-live="assertive"`
- [x] **P2 #N9**: Shop product cards fixed `size-[345px]` overflow on small screens → added `max-w-[calc(100vw-2rem)]`
- [x] **P3 #N15**: Hamburger menu no "Home" link when not on homepage → added Home link with separator
- [x] **P3 #N8**: BackgroundBeams double render — kept, intentional SSR hydration tradeoff (different SVG paths per breakpoint)
