// ============================================================
// SITE COPY SOURCE OF TRUTH
// ============================================================
// All user-facing text for the website, organized by section.
// Fields typed Record<SiteVariant, ...> vary between:
//   'default' — Senior Frontend Engineer positioning
//   'growth'  — Senior Frontend Engineer - Growth & Experimentation positioning
//
// ACTIVE_VARIANT in lib/site-config.ts controls which renders.
// ============================================================

import type { SiteVariant } from './site-config'

// A Segment is a plain string or an accent-highlighted phrase.
// Use Segment[] (rich paragraph) for paragraphs with inline highlights.
type Segment = string | { text: string; accent: true }
export type Paragraph = string | Segment[]

export interface WorkCard {
  title: string
  paragraphs: Paragraph[]
}

export interface WorkChapter {
  heading: string
  intro: string
  cards: WorkCard[]
}

export interface AboutCard {
  title: string
  body: string
}

export interface SiteCopy {
  meta: {
    title: Record<SiteVariant, string>
    description: Record<SiteVariant, string>
  }
  hero: {
    greeting: string
    tagline: Record<SiteVariant, string>
    ctaResume: string
    ctaContact: string
    emailLabel: string
    linkedinLabel: string
  }
  about: {
    heading: string
    cards: Record<SiteVariant, AboutCard[]>
  }
  workExperience: {
    chapters: Record<SiteVariant, WorkChapter[]>
  }
  projects: {
    heading: string
    subheading: string
    goesWrong: string
  }
  technology: {
    heading: string
  }
  footer: {
    tagline: Record<SiteVariant, string>
    description: Record<SiteVariant, string>
  }
  contact: {
    email: string
    subject: string
    body: string
    dialogTitle: string
    dialogBody: string
    emailPrompt: string
    emailClientDefault: string
    emailClientSend: string
    sideTitle: string
    sideDismiss: string
    sideAccept: string
  }
  errors: {
    notFound: { heading: string; body: string; cta: string }
    error: { heading: string; body: string; retry: string; home: string }
  }
  consoleMessage: string
}

export const COPY: SiteCopy = {
  // ----------------------------------------------------------
  // META
  // ----------------------------------------------------------
  meta: {
    title: {
      default: 'Fabricio Pirini, Senior Frontend Engineer',
      growth: 'Fabricio Pirini, Growth Engineer',
      product: 'Fabricio Pirini, Product Engineer',
    },
    description: {
      default:
        'Senior Frontend Engineer building fintech products for web and mobile, building since 2017. React, React Native, Expo, and Next.js.',
      growth:
        'Growth Engineer, building since 2017. Built A/B experimentation programs from scratch, owned the tracking stack, and shipped based on data. Based in Brazil, working remotely.',
      product:
        'Product Engineer, building since 2017. I build systems that solve real user problems and measure what matters. Based in Brazil, working remotely.',
    },
  },

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  hero: {
    greeting: 'Nice to meet you!',
    tagline: {
      default: 'Senior Frontend Engineer building fintech products for web and mobile.',
      growth: 'Growth Engineer. I build the program, run the experiments, and own the numbers.',
      product:
        'Product Engineer. Ship. Measure. Follow up. Define what moves the needle before writing the first line.',
    },
    ctaResume: 'Resume',
    ctaContact: 'Contact me',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
  },

  // ----------------------------------------------------------
  // ABOUT
  // ----------------------------------------------------------
  about: {
    heading: 'About me',
    cards: {
      default: [
        {
          title: 'Journey',
          body: 'I care about the product and the engineering underneath it. React and Next.js, building since 2017.',
        },
        {
          title: 'What matters',
          body: 'Foundational systems that make teams faster: component libraries, testing infrastructure, design token pipelines, and APIs that hold up under load.',
        },
        {
          title: 'Right now',
          body: "Building a pre-launch US consumer fintech's Expo and React Native app for iOS, Android, and web, plus its Next.js admin, from the first commit.",
        },
      ],
      growth: [
        {
          title: 'Journey',
          body: 'I care about the experiment and what comes back from it. Building since 2017 in React and TypeScript. I build the thing, set up the tracking, and let the data settle the argument.',
        },
        {
          title: 'What matters',
          body: 'Building the program, not just running experiments. The platform matters as much as the test. Without the right tooling and cadence, you are running one-offs. With it, you are learning at speed.',
        },
        {
          title: 'Right now',
          body: "Building a pre-launch US consumer fintech's Expo and React Native app for iOS, Android, and web, plus its Next.js admin, from the first commit.",
        },
      ],
      product: [
        {
          title: 'Journey',
          body: 'I care about the user and the metrics. Building since 2017 in React and TypeScript. I build the thing, measure whether it solved the problem, and iterate based on data.',
        },
        {
          title: 'What matters',
          body: 'Writing success metrics before writing code. Following up after deployment to see if it worked. Shipping quickly, then iterating. I open PRs early and document decisions because context that stays in your head helps nobody.',
        },
        {
          title: 'Right now',
          body: "Building a pre-launch US consumer fintech's Expo and React Native app for iOS, Android, and web, plus its Next.js admin, from the first commit.",
        },
      ],
    },
  },

  // ----------------------------------------------------------
  // WORK EXPERIENCE
  // Segment[] paragraphs: plain string OR array of string|{text,accent}
  // for inline accent highlights. cardIdx === 0 gets the dotted
  // border connector in the component.
  // ----------------------------------------------------------
  workExperience: {
    chapters: {
      default: [
        {
          heading: 'Where it all started',
          intro:
            'From web scrapers to full-stack software engineering. Each role added a layer: performance at scale, the full stack, then leading teams and systems that ship.',
          cards: [
            {
              title: 'Scaling data collection',
              paragraphs: [
                'Rebuilt web crawlers and scrapers from the ground up. 120x faster runtime, 10x fewer resources. First exposure to shipping at scale and learning that performance is a feature, not an afterthought.',
                'Learned how teams actually work together: Agile in practice, not on a slide deck.',
              ],
            },
            {
              title: 'Scaling the platform',
              paragraphs: [
                "Migrated a legacy codebase to React, not just a rewrite, but a chance to rethink every interaction from the user's perspective. Worked with the design team to close the gap between what was designed and what actually shipped.",
                'Mentored developers while on-call for the Django backend. Knowing the full stack is what lets me make better front-end decisions.',
              ],
            },
          ],
        },
        {
          heading: 'Growing into leadership',
          intro:
            "When I took on leadership, I realized it wasn't about me anymore. It was about making my team and company better.",
          cards: [
            {
              title: 'Frontend architecture and performance',
              paragraphs: [
                [
                  'Led frontend architecture for an e-commerce platform. Made things ',
                  { text: '40% faster', accent: true },
                  ' by treating performance as a design problem, not a backend problem.',
                ],
                'Worked directly with designers to close the gap between intent and implementation. The UI shipped looking exactly like the Figma file. That became the standard.',
              ],
            },
            {
              title: 'Defining the front-end standard',
              paragraphs: [
                'Set the component architecture, design token strategy, and front-end practices that gave all teams a shared language between design and code.',
                'The engineering depth: knowing the cloud, the stack, the system end to end. That is what makes the front-end layer more durable.',
              ],
            },
          ],
        },
        {
          heading: 'Kraken, 2024–2026',
          intro:
            'Foundational systems across web and mobile: design systems, visual testing, backend integrations, and software that teams could ship with confidence.',
          cards: [
            {
              title: 'Full-stack systems and engineering craft',
              paragraphs: [
                [
                  'Automated ',
                  { text: 'design tokens', accent: true },
                  ' across 11 core components. Designers now push themes to production without opening a ticket.',
                ],
                [
                  'Built a ',
                  { text: 'visual testing system', accent: true },
                  ' that cut test execution from 12 minutes to under 1 minute and tripled coverage.',
                ],
                [
                  'Led ',
                  { text: 'live chat unification', accent: true },
                  ' across web and mobile. One integration, two platforms, consistent experience.',
                ],
                [
                  'Rebuilt the ',
                  { text: 'Sanity content setup', accent: true },
                  '. Content teams now deploy articles independently, without engineering involvement.',
                ],
              ],
            },
          ],
        },
      ],
      growth: [
        {
          heading: 'Where it all started',
          intro:
            'From web scrapers to growth engineering. Each role added a layer: performance at scale, the full stack, then what actually moves a metric.',
          cards: [
            {
              title: 'Scaling data collection',
              paragraphs: [
                'Rebuilt web crawlers and scrapers from the ground up. 120x faster runtime, 10x fewer resources. First exposure to shipping at scale and learning that performance is a feature, not an afterthought.',
                'Learned how teams actually work together: Agile in practice, not on a slide deck.',
              ],
            },
            {
              title: 'Scaling the platform',
              paragraphs: [
                "Migrated a legacy codebase to React, not just a rewrite, but a chance to rethink every interaction from the user's perspective.",
                'Mentored developers while on-call for the Django backend. Knowing the full stack is what lets me make better front-end decisions.',
              ],
            },
          ],
        },
        {
          heading: 'Building the experimentation program',
          intro:
            'Built the first A/B experimentation program at an online grocery startup. Owned the platform, the experiments, and the measurement.',
          cards: [
            {
              title: 'Building the experimentation program',
              paragraphs: [
                [
                  'Ran ',
                  { text: '2 to 4 live experiments per month', accent: true },
                  ' while building the platform they ran on. The company had no prior experimentation program.',
                ],
                'Removed hard-coded locale configurations. Finland and Germany launched without engineering changes to the core platform.',
              ],
            },
            {
              title: 'Experiments that taught us something',
              paragraphs: [
                'Ran a homepage restructure: removed the hero section to surface products above the fold. High confidence it would lift conversion. It dropped. Kept the original based on data, not intuition.',
                'Shipped an immersive onboarding flow, stripped to a stepper form and logo only. Added lead capture for out-of-coverage users. Conversion increased.',
              ],
            },
          ],
        },
        {
          heading: 'Kraken, 2024–2026',
          intro:
            'Event tracking at Kraken. The visibility layer: which features users actually use, which flows drop off, whether the numbers back up the assumptions.',
          cards: [
            {
              title: 'Tracking and experimentation',
              paragraphs: [
                [
                  'Set up ',
                  { text: 'Segment event tracking', accent: true },
                  ' for an in-app support portal across web and 3 React Native apps (Kraken, Kraken Pro, Krak). Instrumented experiment touchpoints and new UI elements to measure adoption and retention.',
                ],
                [
                  'Built a ',
                  { text: 'visual testing system', accent: true },
                  ' that cut test execution from 12 minutes to under 1 minute and tripled coverage.',
                ],
                [
                  'Automated ',
                  { text: 'design tokens', accent: true },
                  ' across 11 core components. Designers now push themes to production without opening a ticket.',
                ],
              ],
            },
          ],
        },
      ],
      product: [
        {
          heading: 'Where it all started',
          intro:
            'From web scrapers to product engineering. Each role added a layer: performance at scale, the full stack, then learning that shipping is the easier part. The hard part is whether it worked.',
          cards: [
            {
              title: 'Scaling data collection',
              paragraphs: [
                'Refactored web crawlers and scrapers into 5 independent microservices. 120x faster, 10x less resource usage. Measured the improvement to justify the migration.',
                'Migrated CI/CD from Jenkins to GitLab. 85% reduction in deploy failures. Tracked deployment frequency and failure rate as metrics.',
              ],
            },
            {
              title: 'Learning full stack',
              paragraphs: [
                'Worked across Django backend and React frontend. Built A/B experimentation infrastructure from scratch.',
                "The full-stack perspective helps me make better product decisions. I know what's possible, what's hard, and what's expensive.",
              ],
            },
          ],
        },
        {
          heading: 'Building the experimentation program',
          intro:
            'Built the first A/B experimentation program at an online grocery startup. Owned the platform (GrowthBook), the experiments, and the measurement.',
          cards: [
            {
              title: 'From 0 to 1 experimentation',
              paragraphs: [
                [
                  'Ran ',
                  { text: '2 to 4 experiments per month', accent: true },
                  ' while building the platform they ran on. The company had no prior experimentation program.',
                ],
                'Analyzed results and made go/no-go decisions based on data. Killed features that looked good on paper but failed in the wild.',
              ],
            },
            {
              title: 'Measured international expansion',
              paragraphs: [
                'Removed hard-coded locale configurations blocking Finland and Germany. Monitored adoption via product analytics after launch.',
                'The work was done. The measurement proved it worked. Parsed, not guessed.',
              ],
            },
          ],
        },
        {
          heading: 'Kraken, 2024–2026',
          intro:
            'Foundational systems at Kraken: design tokens that eliminated manual theme work, shared components adopted by 3 teams, and the tracking setup that shows which features users touch.',
          cards: [
            {
              title: 'Figma-to-code design pipeline',
              paragraphs: [
                [
                  'Built ',
                  { text: 'design token pipeline', accent: true },
                  ' powering multiple brands (light/dark variants). Replaced days of manual work per brand change.',
                ],
                'Measured reduction in handoff time. Faster time-to-market for brand initiatives.',
              ],
            },
            {
              title: 'Component library for internal products',
              paragraphs: [
                'Built a shared component library adopted by 3 product teams. Measured ~25% reduction in feature cycle time.',
                'Tracked component usage patterns to prioritize investment vs deprecation.',
              ],
            },
          ],
        },
      ],
    },
  },

  // ----------------------------------------------------------
  // PROJECTS
  // ----------------------------------------------------------
  projects: {
    heading: "Things I've actually built",
    subheading: 'Selected work. What went sideways, and what shipped.',
    goesWrong: 'What went wrong',
  },

  // ----------------------------------------------------------
  // TECHNOLOGY
  // ----------------------------------------------------------
  technology: {
    heading: 'Technology',
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    tagline: {
      default: 'Ship less fluff. Build more trust.',
      growth: 'Measure first. Then ship.',
      product: 'Ship. Then measure. Then iterate.',
    },
    description: {
      default:
        'Remote from Brazil. React, React Native, Expo, and Next.js. Building fintech products for web and mobile.',
      growth:
        'Remote from Brazil. React, Next.js, TypeScript. Growth engineering, experimentation, and event tracking.',
      product:
        'Remote from Brazil. React, Next.js, and product engineering.',
    },
  },

  // ----------------------------------------------------------
  // CONTACT
  // ----------------------------------------------------------
  contact: {
    email: 'fabricio@fabriciopirini.com',
    subject: "Let's have a chat",
    body: "Hey, Fabricio! I'm very interested in your services. Can we have a chat? By the way, loved the website! 🚀",
    dialogTitle: 'Interested?',
    dialogBody: "You seemed interested in what I can bring to your project. Let's have a chat!",
    emailPrompt: 'Send me an email from:',
    emailClientDefault: 'Your favorite app',
    emailClientSend: 'Send email',
    sideTitle: "Still here? Let's talk.",
    sideDismiss: 'No thanks',
    sideAccept: 'Sure!',
  },

  // ----------------------------------------------------------
  // ERROR PAGES
  // ----------------------------------------------------------
  errors: {
    notFound: {
      heading: 'Whoops! Empty Shelf!',
      body: "Looks like the page you were trying to visit is out on a coffee break. Let's navigate back to the homepage before it gets lost in the void of cyberspace.",
      cta: 'Return Home',
    },
    error: {
      heading: 'Glitch in the Matrix',
      body: "Our website's conveyor belt seems to have hit a snag. While we reboot the system, why not try refreshing, or head back to the safety of the homepage?",
      retry: 'Try again',
      home: 'Return Home',
    },
  },

  // ----------------------------------------------------------
  // CONSOLE EASTER EGG
  // ----------------------------------------------------------
  consoleMessage:
    '\n%cFabricio Pirini%c\n\nYou opened DevTools. I respect that.\n\n%cBuilt with Next.js 16, React 19, Framer Motion, and strong opinions about spacing.\n\n%cWant to build something together? → fabricio@fabriciopirini.com\n\n',
}
