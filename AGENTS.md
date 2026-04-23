# AGENTS.md

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
