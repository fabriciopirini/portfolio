// ============================================================
// CAREER SOURCE OF TRUTH
// ============================================================
// This file is the authoritative record of Fabricio's career.
// Resume variants are derived from this — each job has bullets
// keyed by variant so the same content can be emphasized differently
// depending on the application target.
//
// ACTIVE_VARIANT in lib/site-config.ts controls which version renders
// across the entire site.
// ============================================================

import type { SiteVariant } from './site-config'
export type { SiteVariant }

export interface RolePeriod {
  role: string
  start: string
  end: string
  /** bullets keyed by variant; falls back to 'default' if variant key is absent */
  bullets: Partial<Record<SiteVariant, string[]>>
}

export interface CompanyEntry {
  id: string
  company: string
  location: string
  /** Multiple periods = multiple roles at the same company (shown as sub-sections) */
  periods: RolePeriod[]
  /**
   * Raw notes — unformatted details, metrics, stories, and context.
   * Not rendered on the resume. Used as reference when writing application
   * essays, preparing interview answers, or generating new resume variants.
   */
  rawNotes: string
}

export interface SkillsRow {
  label: string
  value: string
}

export interface EducationEntry {
  id: string
  institution: string
  location: string
  credential: string
  start: string
  end: string
  /**
   * Raw notes — context, stories, and details not rendered on the resume.
   * Use for interview prep, application essays, or generating new variants.
   */
  rawNotes: string
}

export interface SideProject {
  id: string
  name: string
  url: string
  year: string
  /** One-line description for resume/portfolio use */
  description: string
  rawNotes: string
}

export interface CareerData {
  subtitle: Record<SiteVariant, string>
  summary: Record<SiteVariant, (yearsOfExperience: number) => string>
  skills: Record<SiteVariant, SkillsRow[]>
  /** Variant-specific display order for jobs — list job ids in desired order */
  jobOrder: Record<SiteVariant, string[]>
  jobs: CompanyEntry[]
  education: EducationEntry[]
  sideProjects: SideProject[]
}

// ============================================================
// DATA
// ============================================================

export const CAREER: CareerData = {
  subtitle: {
    default: 'Senior Software Engineer',
    growth: 'Senior Engineer, Growth and Experimentation',
  },

  summary: {
    default: (years) =>
      `Senior Software Engineer with ${years}+ years in React and TypeScript, working across web and mobile. Currently at a leading US crypto exchange, owning the design system and shipping to 4 platforms, including a React Native support portal built from scratch across 3 mobile apps. I tend to build foundational things: testing pipelines, theming systems, shared packages. Previously led frontend teams at e-commerce and grocery delivery scale-ups in Norway.`,
    growth: (years) =>
      `Senior engineer with ${years}+ years in React, Next.js, and TypeScript. Built the first A/B experimentation program at an online grocery startup. Owned the platform, the experiments, and the measurement. Ran 2 to 4 live experiments per month. Opened Finland and Germany by removing locale blockers. Currently setting up event tracking at a US crypto exchange using Segment. WCAG 2.0 AA compliance across 70+ European properties.`,
  },

  skills: {
    default: [
      { label: 'Languages & Runtimes', value: 'TypeScript, JavaScript (ES2024+), HTML5, CSS3, Node.js' },
      { label: 'Frameworks & UI', value: 'React, Next.js, Redux Toolkit, Tailwind CSS, Radix UI' },
      { label: 'Testing & Quality', value: 'Playwright, Vitest, Jest, React Testing Library, Storybook' },
      { label: 'Tooling & DevOps', value: 'Docker, CI/CD (GitHub Actions), GraphQL, Figma, Power BI' },
    ],
    growth: [
      { label: 'Languages & Runtimes', value: 'TypeScript, JavaScript (ES2024+), HTML5, CSS3, Node.js' },
      { label: 'Frameworks & UI', value: 'React, Next.js, Redux Toolkit, Tailwind CSS, Radix UI' },
      { label: 'Analytics & Experimentation', value: 'Segment, Mixpanel, Growthbook, LaunchDarkly, Unleash, StatSig' },
      { label: 'Testing & Quality', value: 'Playwright, Vitest, Jest, React Testing Library, Storybook' },
      { label: 'Tooling & DevOps', value: 'Docker, CI/CD (GitHub Actions), GraphQL, Figma, Power BI' },
    ],
  },

  jobOrder: {
    default: ['crypto-exchange', 'ecommerce-platform', 'grocery-startup', 'sportradar', 'samsung'],
    growth: ['crypto-exchange', 'ecommerce-platform', 'grocery-startup', 'sportradar', 'samsung'],
  },

  jobs: [
    {
      id: 'crypto-exchange',
      company: 'Leading Cryptocurrency Exchange Platform - US Client',
      location: 'Brazil (Remote)',
      periods: [
        {
          role: 'Contractor - Frontend Engineer',
          start: 'Nov. 2024',
          end: 'Present',
          bullets: {
            default: [
              'Cut visual regression test runtime from 12 min to under a minute by building the Playwright VRT infrastructure from scratch. Coverage tripled across the component library.',
              'Built the Figma-to-code design token pipeline that powers theming across 3 brand lines (6 light/dark variants). Teams went from days of manual work per brand to automated updates.',
              'Shipped an in-app support portal to 3 React Native apps from scratch. Built tier-aware contact options, VIP manager card, and live support queue visibility. Coordinated phased rollout across consumer, pay, and pro mobile applications.',
              'Built 15+ dynamic financial data table components (deposit fees, withdrawal fees, margin pairs, position limits) with search, deep-linking, copy, and i18n. Fixed 25+ accessibility issues platform-wide: keyboard navigation, focus management, and ARIA attributes.',
            ],
            growth: [
              'Set up Segment tracking for the Support Center portal across web and 3 React Native apps, instrumenting experiment touchpoints to measure feature adoption and retention signal.',
              'Cut visual regression test runtime from 12 min to under a minute by building the Playwright VRT infrastructure from scratch. Coverage tripled across the component library.',
              'Built 15+ dynamic financial data tables with search, deep-linking, copy, and i18n support.',
              'Fixed 25+ accessibility issues platform-wide: keyboard navigation, focus management, and ARIA attributes.',
            ],
          },
        },
      ],
      rawNotes: `
        TRACKING WORK (not on default resume):
        - Set up Segment tracking for the Support Center portal (web + 3 mobile apps)
        - Track user interactions with experiments and new UI elements
        - Measure feature adoption and retention signal to decide if new features are worth keeping
        - This is the primary growth-adjacent work in this role

        DESIGN SYSTEM:
        - Owns the design system for the company
        - Figma-to-code token pipeline: 3 brand lines, 6 light/dark variants
        - Before: days of manual work per brand change; after: automated

        REACT NATIVE:
        - Support portal shipped to 3 apps: consumer, pay, pro
        - Tier-aware contact options, VIP manager card, live support queue

        ACCESSIBILITY:
        - 25+ a11y fixes across the platform
        - Keyboard navigation, focus management, ARIA attributes
        - Financial data tables: 15+ components, search, deep-linking, i18n

        CURRENT PROFESSIONAL DEVELOPMENT (2025–2026):
        - Deliberately investing in product mindset and software architecture as AI lowers the cost of implementation
        - Core thesis: as AI makes shipping code cheaper, the bottleneck shifts to deciding what to build and whether it's worth it
        - Reading list completed or in progress:
          * The Mom Test — Rob Fitzpatrick (ask about past behavior, not hypothetical opinions)
          * Continuous Discovery Habits — Teresa Torres (continuous customer discovery as a team habit)
          * Lean Analytics — Croll & Yoskovitz (know the one metric your current work is meant to move)
          * INSPIRED — Marty Cagan (product thinking, empowered teams)
          * Designing Data-Intensive Applications — Martin Kleppmann (systems architecture at scale)
        - Two daily habits derived from this reading, now applied to every non-trivial ticket:
          1. Before starting: write one sentence in the ticket description: "The last time this hurt was when [person] had to [workaround] because [gap]." If you can't fill it in, go ask before starting.
          2. In every PR description: add a success metric field: "This should move [metric] from [baseline] to [target] by [date]." Review it two weeks post-deploy.
        - Used as Q6 Loom video topic in Buffer application (April 2026)
      `,
    },
    {
      id: 'ecommerce-platform',
      company: 'Norsk Gjenvinning',
      location: 'Norway (Remote)',
      periods: [
        {
          role: 'Lead Software Engineer & Tech Lead',
          start: 'Sep. 2023',
          end: 'Sep. 2024',
          bullets: {
            default: [
              'Managed 5 engineers across 2 time zones. Built the sprint cadence, code review process, and CI/CD setup from scratch.',
              'Rebuilt legacy storefronts and built new ones, shipping 5 with React, TypeScript, and Next.js. Worked with everyone from the CEO to junior engineers across design, product, and business.',
              'Built a shared component library used by 3 product teams, cutting feature cycle time by roughly 25%.',
            ],
            growth: [
              'Managed 5 engineers across 2 time zones. Built the sprint cadence, code review process, and CI/CD setup from scratch.',
              'Shipped 5 storefronts with React, TypeScript, and Next.js. Built a shared component library adopted by 3 product teams.',
            ],
          },
        },
        {
          role: 'Lead Frontend Engineer',
          start: 'Sep. 2022',
          end: 'Aug. 2023',
          bullets: {
            default: [
              'Integrated 5 storefronts with Sanity CMS and the internal design system, giving the content team full control over brand-aligned pages without engineering involvement.',
              'Got Core Web Vitals into the green on key checkout routes through code splitting, lazy loading, and edge caching. LCP under 2s.',
              'Led WCAG 2.0 AA compliance across e-commerce storefronts and brand landing pages for a portfolio of 70+ European companies.',
              'Mentored 3 junior engineers. Two were promoted within 18 months.',
            ],
            growth: [
              'Set up Google Analytics and SEO tooling from scratch for Norwegian client properties, including Norsk Gjenvinning, one of Norway\'s largest recycling companies.',
              'Got Core Web Vitals into the green on key checkout routes (LCP under 2s) through code splitting, lazy loading, and edge caching.',
              'Integrated 5 storefronts with Sanity CMS, giving the content team full control over brand-aligned pages without engineering involvement.',
              'Led WCAG 2.0 AA compliance across e-commerce storefronts and brand landing pages for a portfolio of 70+ European companies.',
            ],
          },
        },
      ],
      rawNotes: `
        SEO WORK (not on default resume):
        - Set up GA and SEO infrastructure for Norwegian client properties from scratch
        - Includes Norsk Gjenvinning (one of Norway's largest companies — recycling/waste mgmt)
        - This was greenfield: no analytics, no SEO baseline, built from zero

        CORE WEB VITALS:
        - LCP under 2s on key checkout routes
        - Code splitting, lazy loading, edge caching

        WCAG 2.0 AA:
        - 70+ European companies in the portfolio
        - Storefronts + brand landing pages

        COMPONENT LIBRARY:
        - Used by 3 product teams
        - ~25% feature cycle time reduction

        TEAM LEAD CONTEXT:
        - 5 engineers, 2 time zones
        - Built sprint cadence, code review process, CI/CD from scratch
        - Worked from CEO to junior engineer
      `,
    },
    {
      id: 'grocery-startup',
      company: 'Oda',
      location: 'Norway',
      periods: [
        {
          role: 'Software Engineer',
          start: 'Aug. 2020',
          end: 'Aug. 2022',
          bullets: {
            default: [
              'Built the A/B experimentation program from scratch and kept it running at 2 to 4 experiments a month.',
              'Removed hard-coded configs that were blocking international expansion. Finland and Germany went live without engineering changes.',
              'Ran Technical Debt workshops every two months to keep the backlog from compounding. Shipping pace held through a 2x headcount growth.',
            ],
            growth: [
              'Built the A/B experimentation program from scratch, the company\'s first, while also owning the platform it ran on. Ran 2 to 4 live experiments per month through a 2x headcount growth.',
              'Ran a hero-removal experiment expecting higher conversion. It dropped. The introductory layer was providing context users needed to commit. Killed the variant on data, not instinct.',
              'Shipped a stripped onboarding flow (stepper + logo only, minimum data per step) with lead capture for out-of-coverage users. Conversion increased.',
              'Removed hard-coded locale configurations blocking international expansion. Finland and Germany launched without engineering changes to the core platform.',
            ],
          },
        },
      ],
      rawNotes: `
        GROWTH ACADEMY:
        - Manually selected by Yara Paoli (Chief Growth Officer at Oda, formerly VP Growth at Skyscanner) to join one cohort of Growth Academy (https://www.growth-academy.com/)
        - Selection was not open — she handpicked participants
        - Prior to being selected, stood out in an internal growth workshop by asking the best question, voted by popular vote among attendees
        - Yara gifted him the course based on that performance
        - Yara was the boss's boss at Oda — this is a skip-level recognition signal, not a manager doing a favor
        - LinkedIn: https://www.linkedin.com/in/yarapaoli/
        - Strong proof point for growth engineering positioning: selected by a senior growth leader, not self-nominated

        EXPERIMENTATION CONTEXT:
        - First experimentation team at the company — no prior program, no prior platform
        - Had to build the platform AND run experiments simultaneously
        - Starting cadence: 1 experiment every 2 weeks (~2/month)
        - As tooling matured and parallel experiment isolation improved: grew to 2 experiments per week (~8/month)
        - Resume bullets currently say "2 to 4 live experiments per month" — conservative average; peak was higher
        - This is directly analogous to what Buffer needs: they have no dedicated A/B testing framework

        TOOLING EVOLUTION:
        - Started with Unleash (open source feature flagging tool, Norwegian-origin, already familiar to parts of the engineering org)
        - Unleash only did feature flags — not enough for a full experimentation program
        - Moved to Growthbook: feature flags + experiment setup and rollout + results dashboards + statistical layer, all in one place
        - Team could define experiments, read results, and make decisions without pulling in an engineer
        - Tracking stack: gtag → GTM → server-side GTM
        - Moved to server-side GTM specifically to stop adblockers from silently dropping analytics events
        - Frontend: integrated Growthbook SDK into the React + Next.js app from scratch
        - Wired experiment assignment logic; ensured variants didn't bleed across user sessions

        TEAM COMPOSITION:
        - Started as sole engineer on the team — did initial research and architecture alone
        - Once scope was defined, made the case to hire a second SWE; built implementation together after that
        - Full team: 2 SWEs + 1 growth expert (team manager) + 1 data analyst + 2 designers
        - Tech was a 2-person job; the platform was a full team effort

        REFORGE INFLUENCE:
        - Fabricio did not complete Reforge programs himself
        - Direct managers at Oda had Reforge credentials and ran the team using that framework
        - Fabricio absorbed the language and methodology by working inside it daily
        - Application framing: "I didn't do the programs, but I worked inside that thinking every day until it stopped feeling like a framework and just felt like how you approach a problem"
        - Do not claim the credentials; do own the applied knowledge

        CULTURE-BUILDING WORK:
        - Building the platform was roughly half the work
        - The other half: getting the team to write hypotheses before building, define success metrics before shipping (not after), and agree upfront on what a conclusive result looked like
        - The tooling enables the culture — it doesn't create it

        EXPERIMENT 1 — Homepage "Show, Don't Tell" (FAILED):
        - Hypothesis: removing hero section and showing products above the fold would increase conversion
        - We were confident this was an improvement
        - Result: conversion dropped
        - Learning: introductory context is necessary for customers to commit to a purchase
        - Decision: killed the variant based on data, not intuition
        - Why this story matters: shows willingness to be wrong and trust data over conviction

        EXPERIMENT 2 — Immersive Onboarding (SUCCESS):
        - Hypothesis: reducing friction in onboarding by stripping nav/header/footer and collecting minimum info per step would increase conversion
        - Build: stepper form only, logo only. Each step collected only what was needed to validate delivery coverage
        - Also: added lead capture for users where delivery wasn't available (capture the out-of-coverage lead rather than lose them)
        - Result: conversion increased
        - This shows PLG thinking: reduce friction, capture intent even on negative outcomes

        EXPERIMENT 3 — Building the platform itself:
        - The "experiment" was also building the infrastructure experiments ran on
        - This is the context Buffer needs: no dedicated experimentation platform → you built one

        LOCALIZATION:
        - Removed hard-coded locale configs (language strings, region-specific settings)
        - Finland and Germany went live without any engineering changes to the core platform
        - This is directly relevant to Buffer's localization gap (buffer.com is English-only with zero infrastructure)

        CULTURE CHAMPION:
        - Recognized by company leadership
        - Removed from growth variant (not relevant to growth engineering positioning)

        TECH DEBT:
        - Workshops every 2 months
        - Maintained shipping pace through 2x headcount growth
      `,
    },
    {
      id: 'sportradar',
      company: 'Sportradar',
      location: 'Norway',
      periods: [
        {
          role: 'Full Stack Engineer',
          start: 'Sept. 2018',
          end: 'Aug. 2020',
          bullets: {
            default: [
              'Refactored web crawlers and scrapers into 5 independent microservices, cutting runtime by 120x and resource usage by 10x.',
              'Migrated CI/CD from Jenkins to GitLab, reducing deploy failures by 85% through Docker containerization and pipeline redesign.',
            ],
          },
        },
      ],
      rawNotes: `
        - Microservices refactor: 5 services, 120x runtime reduction, 10x resource reduction
        - CI/CD: Jenkins → GitLab, 85% deploy failure reduction via Docker + pipeline redesign
        - Primarily a systems/infrastructure role
        - Least relevant for growth engineering positioning

        HOW NORWAY HAPPENED:
        - Right before graduating, decided to go back abroad for the working phase of life
        - Tried Canada first — too much competition, couldn't get traction
        - Cold applied internationally across multiple countries
        - Got interviews in Belgium, India, Denmark, Norway, and possibly others
        - Got the Sportradar offer in Norway
        - Negotiated a 2-month delay to finish his degree, then moved immediately after graduating
        - Never learned Norwegian — full English environment, and always knew Norway was a temporary chapter
        - Stayed 6 years (2018–2024), then returned to Brazil

        WHAT THIS SAYS ABOUT CHARACTER:
        - Not a passive career — actively sought international exposure right out of university
        - Comfortable operating in unfamiliar environments (UofT, then Norway)
        - Decisive: got the offer, finished the degree, moved. No extended deliberation.
      `,
    },
    {
      id: 'samsung',
      company: 'Samsung R&D Center',
      location: 'Campinas, Brazil',
      periods: [
        {
          role: 'Software Engineering Intern',
          start: 'Jan. 2017',
          end: 'Jan. 2018',
          bullets: {
            default: [
              'Built a WCAG 2.0 AA Web Accessibility portal and automated internal reporting dashboards with Power BI.',
              'Contributed to IoT prototype R&D and gave talks on Web Accessibility at 2 industry conferences.',
            ],
          },
        },
      ],
      rawNotes: `
        - WCAG 2.0 AA Web Accessibility portal — this is the origin of the a11y expertise
        - Power BI dashboards for internal reporting
        - IoT prototype R&D (Samsung ARTIK platform)

        INTERNAL RECOGNITION:
        - First intern in Samsung R&D history to present at "Tech Talk Fridays" — the company's internal weekly tech talks
        - Presented on the Accessibility Guide and the work done building the WCAG portal
        - Org specifically elevated an intern to present in front of the full team — no prior intern had done this
        - Strong early authority signal: recognized as someone worth putting in front of the room

        PUBLIC APPEARANCES:

        1. IoT Training — SBIAgro 2017 (Oct 3, 2017, UNICAMP, Campinas)
           - XI Congresso Brasileiro de Agroinformática
           - Samsung ran a technical IoT workshop using the ARTIK platform
           - Fabricio was CO-INSTRUCTOR alongside Rodrigo Borrozino (SIDI solutions architect)
           - Named by name in Samsung's official press release: "Fabricio Pirini, estudante de Engenharia da Computação da UNIFEI"
           - 30 spots for students, researchers, startup CEOs/CTOs
           - Topics: ARTIK platform intro, cloud connection, GPIO control, OTA firmware updates
           - Notably: he was a student co-teaching professionals and startup founders
           - Source: https://news.samsung.com/br/samsung-promove-treinamento-de-internet-das-coisas-em-congresso-da-sociedade-brasileira-de-agroinformatica

        2. Accessibility Guide — SIDI/Samsung (2016–2017)
           - Fabricio's WCAG portal work contributed to SIDI's Accessibility Guide for mobile app developers
           - First public presentation of the guide: Nov 2016, "VIII Encontro Internacional de Tecnologia e Inovação para Pessoas com Deficiência", São Paulo
           - Related research published and presented at ACM IMCOM 2017, Beppu, Japan (Jan 2017)
           - The Nov 2016 and ACM IMCOM presentations were by SIDI's team — they happened before Fabricio joined
           - Fabricio's contribution was the portal work; the external presentations were not his
           - Source: https://news.samsung.com/br/instituto-ligado-a-samsung-apresenta-nova-versao-de-guia-para-aplicativos-voltados-a-pessoas-com-deficiencia

        UNICAMP AI COURSE (2017):
        - Took one AI course at UNICAMP (Universidade Estadual de Campinas) as a visiting undergrad student
        - Campinas is where Samsung internship was located — same city as UNICAMP
        - UNICAMP is Brazil's top engineering/CS university (equivalent weight to a top US school)
        - The course was more advanced and up-to-date than what UNIFEI offered at the time
        - Covered bleeding-edge AI topics for the period (2017 = deep learning explosion)
        - Hard course — worth noting as evidence of intellectual stretch during an already demanding internship year
      `,
    },
  ],

  // ============================================================
  // EDUCATION
  // ============================================================
  education: [
    {
      id: 'unifei',
      institution: 'UNIFEI — Universidade Federal de Itajubá',
      location: 'Itajubá, Brazil',
      credential: 'Bachelor of Computer Engineering',
      start: '2012',
      end: '2018',
      rawNotes: `
        - Computer Engineering degree — hardware + software curriculum
        - Never worked in hardware professionally; chose software from the first internship and never looked back
        - Degree took ~6 years due to two major interruptions: 18-month UofT exchange (2013–2014) and full-year Samsung internship (2017)
        - Both interruptions were intentional choices to pursue real-world experience

        TCC (Final Thesis, 2018):
        - Built a web interface that controlled a real FPGA in real time
        - Problem: physical lab classes rely on breadboards and physical components — failures, broken parts, and missing components are constant friction
        - Solution: a browser UI where students could configure circuit elements that reflected instantly in real hardware (relays, circuit state)
        - Not a simulation: real data, real hardware, real feedback
        - Essentially IoT before it was a portfolio buzzword
        - Proves the software/hardware boundary is a seam Fabricio understands, not a wall
        - Interview answer: this is the origin of the "I know why the system behaves this way" instinct
        - Strong DE proof point — a web UI controlling hardware — predates the DE job title by years
      `,
    },
    {
      id: 'uoft',
      institution: 'University of Toronto',
      location: 'Toronto, Canada',
      credential: 'Exchange Program — Electrical and Computer Engineering (18 months, 3 semesters)',
      start: 'Mid 2013',
      end: 'Late 2014',
      rawNotes: `
        - Exchange program (sandwich graduation in Brazilian academic terms) — degree still from UNIFEI
        - 18 months, 3 semesters in the ECE Department
        - UofT is a top-10 global engineering school and the best in Canada
        - Summer internship in Prof. Andreas Moshovos' computer architecture lab
          - Moshovos: ACM SIGARCH Maurice-Wilkes Award winner, high-performance processor and memory system design
          - Work: studying Intel PIN (dynamic binary instrumentation framework)
          - Task: building a pintool to capture all branches executed by an application and their direction
          - Working with Graph Analytics as a target application
          - Context was lost when university email expired — one personal email thread survives as reference
          - This was a summer internship, not formal published research — don't oversell it
        - Strong character signal: voluntarily displaced to one of the world's best engineering schools as an undergrad
        - Part of a pattern: UofT → Norway → international remote work. Fabricio consistently moves toward hard, unfamiliar environments.
      `,
    },
  ],

  // ============================================================
  // SIDE PROJECTS
  // ============================================================
  sideProjects: [
    {
      id: 'encontra-ferias',
      name: 'Encontra Férias',
      url: 'https://vercel.com/fabricio-pirinis-projects/v0-encontra-ferias',
      year: '2025',
      description: 'CLT vacation optimizer — calculates how to stretch Brazilian statutory vacation days around public holidays.',
      rawNotes: `
        - Full name: Férias CLT Otimizador
        - Solves a real, recurring Brazilian problem: CLT workers have 30 vacation days/year and need to align them with public holidays to maximize actual time off
        - Built with v0.app + Next.js + TypeScript, deployed on Vercel
        - Shows product instinct: identified a shared pain point for any Brazilian salaried worker, built a clean tool around it
        - Part of the pattern: felt friction → built a fix → deployed it properly
        - Referenced in Buffer application (April 2026) Q5 as evidence of building things for real users
      `,
    },
    {
      id: 'personal-utilities',
      name: 'Personal & Family Utilities',
      url: '',
      year: '2025–2026',
      description: 'Cluster of small Next.js/TypeScript apps built for daily personal and family use.',
      rawNotes: `
        - All private repos, all TypeScript + Next.js
        - shopping-list — shared family shopping list
        - trip-checklist — packing/prep checklist for trips
        - drink-tracker — personal drink tracking
        - salva-meu-cafe ("save my coffee") — coffee-related personal tracker
        - expenses — personal expense tracking
        - v0-expenses-converter-app — expense converter, built with v0.app, deployed on Vercel
        - Pattern: built for actual daily use by himself and family, not portfolio pieces
        - Referenced in Buffer application (April 2026) Q5 as evidence of building things real people use
        - Same instinct as Sorteador and University Timetable Generator — friction felt, solution shipped
      `,
    },
    {
      id: 'sorteador',
      name: 'Sorteador',
      url: 'https://github.com/fabriciopirini/sorteador',
      year: '2026',
      description: 'Clean raffle/shuffle tool built for tech meetups — no ads, no clutter.',
      rawNotes: `
        - Origin: attended meetups that used ad-heavy raffle tools — most of the screen was ads
        - Built a clean, minimal alternative and shared it with the meetup community
        - This is a recurring pattern: encounters friction in a shared context, fixes it, gives the fix back
        - Same instinct as the university timetable generator (see below)
        - TypeScript
      `,
    },
    {
      id: 'university-timetable-generator',
      name: 'University Timetable Generator',
      url: 'https://github.com/fabriciopirini/university-timetable-generator',
      year: '~2019',
      description: 'Online timetable tool for students to plan courses efficiently, built with Flask.',
      rawNotes: `
        - Built during UNIFEI era — felt the pain as a student and wanted to fix it for everyone
        - Python + Flask backend, web frontend
        - Classic product instinct: identified a real shared problem, built and shared the solution
        - Part of the "felt pain → built fix → shared with community" pattern
        - This and Sorteador show the same behavioral loop at different points in his career
      `,
    },
    {
      id: 'miyooBot',
      name: 'MiyooBot',
      url: 'https://github.com/fabriciopirini/miyooBot',
      year: '2023',
      description: 'TypeScript bot that alerts when MiyooMini V3 handheld returns to stock on AliExpress.',
      rawNotes: `
        - Built for personal use: wanted a MiyooMini V3 (retro handheld gaming device), kept missing restocks
        - Automated the problem away
        - Shows the automation-first mindset: if something is manual and annoying, write a script
        - TypeScript
      `,
    },
    {
      id: 'clojure-rest-api',
      name: 'Clojure REST API',
      url: 'https://github.com/fabriciopirini/clojure-rest-api',
      year: '2020',
      description: 'REST API built in Clojure using functional programming and TDD.',
      rawNotes: `
        - Origin: take-home test for a job application
        - Described as "probably one of the most fun take-homes" — enjoyed the functional programming constraints
        - Clojure is a real departure from the mainstream React/TS path; choosing to enjoy it rather than endure it says something
        - Shows intellectual range: can pick up paradigms outside his daily work and find them interesting
        - TDD discipline applied even in an unfamiliar language
      `,
    },
    {
      id: 'design-system',
      name: 'Design System Exploration',
      url: 'https://github.com/fabriciopirini/design-system',
      year: '2022',
      description: 'Personal exploration of design system architecture using Tailwind CSS, Storybook, and Radix UI.',
      rawNotes: `
        - Built in 2022 — during the e-commerce platform role, before design systems were his primary job
        - Self-directed study: was interested in design systems on his own time, then it became his work
        - The design token pipeline and component library work at the crypto exchange is the professional version of this
        - Shows that his DE specialization wasn't accidental — he was studying it before it was required
      `,
    },
    {
      id: 'digital-controlled-shower',
      name: 'Digital Controlled Shower',
      url: 'https://github.com/fabriciopirini/Digital-Controlled-Shower',
      year: '2018',
      description: 'Arduino-based shower temperature controller using a TRIAC for AC current regulation.',
      rawNotes: `
        - University project (UNIFEI)
        - C++ on Arduino, controlling a TRIAC (Triode for Alternating Current) — real hardware, real AC current
        - Documents the hardware/embedded roots of his Computer Engineering background
        - Part of the evidence that the software/hardware boundary is a seam he understands, not a wall
        - Connects to the TCC (FPGA web interface) — both show comfort operating at the software/hardware boundary
      `,
    },
  ],
}
