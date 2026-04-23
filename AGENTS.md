# AGENTS.md

## UI/UX Audit Progress

Source: UI/UX Pro Max audit conducted April 2026. Work through these one at a time, test via browser, commit before moving on.

### Completed

- [x] **P0 #1**: Add skip-to-content link in layout.tsx (jumps to `#experience`)
- [x] **P0 #2**: Add focus-visible styles on all interactive elements (global ring in globals.css, hamburger button fix, dropdown menu ring)
- [x] **P0 #3**: Fix footer email link aria-label (was "Github", now "Send email to Fabricio")

### Pending (High Priority)

- [x] **P0 #4**: Fix touch targets below 44px — footer social icons (`size-10` = 40px), project card GitHub icon (~36px), CTAButton mobile (~39px)

### Pending (Medium Priority)

- [x] **P1 #5**: Respect reduced-motion for Framer Motion animations and Atropos 3D tilt
- [x] **P1 #6**: Add active nav state with IntersectionObserver
- [x] **P1 #7**: Reduce long animation durations (sideMe 1.2s, appearDownAndFade 3.5s)
- [x] **P1 #8**: Consider dropping Poppins font (3 → 2 font families) — kept, intentional design choice
- [x] **P1 #9**: Define z-index token scale (SideMe uses z-[1000])
- [x] **P1 #10**: Fix hover-only interactions for touch devices (MediaLinks hover:scale sticky on iOS) — already handled by tailwind `hoverOnlyWhenSupported: true`

### Pending (Low Priority)

- [x] **P2 #11**: Section padding inconsistency across Hero/AboutMe/Technology/WorkExperience/Projects
- [x] **P2 #12**: WorkExperience timeline border only renders for cardIdx === 0
- [x] **P2 #13**: Atropos library loaded for skill cards — consider lazy-loading
- [x] **P2 #14**: Project "What went wrong" summary text-primary/40 is borderline contrast (~4.2:1)
- [x] **P2 #15**: Coin counter hidden outside /shop — breaks gamification loop awareness — kept shop-only, intentional design
- [x] **P2 #16**: Add aria-labelledby to sections
- [x] **P2 #17**: Border-radius inconsistency — 21 instances of `rounded-xl/md/lg/3xl` override squircle default (skill cards, project cards, experience cards, footer, AboutMe, SideMe bubble, gallery cards, contact popover, basket trigger, drawers)
- [x] **P2 #18**: AboutMe carousel opts.active=false on desktop — verify graceful degradation — works, 3 cards visible in row
- [ ] **P3 #19**: Logo has both alt text and aria-hidden (redundant)
- [x] **P3 #19**: Logo has both alt text and aria-hidden (redundant) — fixed, decorative logo uses alt="" with aria-hidden
- [x] **P3 #20**: View transition blur filter may cause performance issues on low-end devices — already disabled via prefers-reduced-motion in P1 #5
- [x] **P3 #21**: SideMe 90s delay is very conservative for engagement — kept, intentional design
