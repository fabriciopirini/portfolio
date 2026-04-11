// ============================================================
// SITE COPY SOURCE OF TRUTH
// ============================================================
// All user-facing text for the website, organized by section.
// Fields typed Record<SiteVariant, ...> vary between:
//   'default' — Design Engineer positioning
//   'growth'  — Growth Engineer positioning
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
  body: string | ((yearsText: string) => string)
}

export interface SiteCopy {
  meta: {
    title: Record<SiteVariant, string>
    description: Record<SiteVariant, (years: number) => string>
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
      default: 'Fabricio Pirini, Design Engineer',
      growth: 'Fabricio Pirini, Growth Engineer',
    },
    description: {
      default: (years) =>
        `Design Engineer with ${years}+ years in React, Next.js, and TypeScript. I build interfaces that look exactly as intended and hold up under the hood.`,
      growth: (years) =>
        `Growth Engineer with ${years}+ years in React and TypeScript. Built A/B experimentation programs from scratch, owned the tracking stack, and shipped based on data. Based in Brazil, working remotely.`,
    },
  },

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  hero: {
    greeting: 'Nice to meet you!',
    tagline: {
      default: 'Design Engineer. I build interfaces that look exactly as intended and feel better than expected.',
      growth: 'Growth Engineer. I build the program, run the experiments, and own the numbers.',
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
          body: (yearsText) =>
            `I care about the pixel and the pipeline. React and Next.js, ${yearsText} years building interfaces that work exactly as designed, and hold up under the hood. Not corporate theater. Just craft.`,
        },
        {
          title: 'What matters',
          body: 'Component craft that scales. Design systems that bridge Figma and production. Every animation, every spacing decision, every hover state is a deliberate choice, not an accident.',
        },
        {
          title: 'Right now',
          body: 'Automating the gap between design and engineering. Design tokens that let designers push to production. Visual testing that ships with confidence. The details that make interfaces feel right.',
        },
      ],
      growth: [
        {
          title: 'Journey',
          body: (yearsText) =>
            `I care about the experiment and what comes back from it. ${yearsText} years in React and TypeScript. I build the thing, set up the tracking, and let the data settle the argument.`,
        },
        {
          title: 'What matters',
          body: 'Building the program, not just running experiments. The platform matters as much as the test. Without the right tooling and cadence, you are running one-offs. With it, you are learning at speed.',
        },
        {
          title: 'Right now',
          body: 'Setting up event tracking at a US crypto exchange. Tracking which features users actually use, which flows break quietly, whether the experiments are doing anything. The kind of data that tells you when you are wrong.',
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
            'From web scrapers to design systems. Each role added a layer: performance at scale, the full stack, then what it means to make something feel right for the person using it.',
          cards: [
            {
              title: 'Scaling data collection',
              paragraphs: [
                'Rebuilt web crawlers and scrapers from the ground up. 10x faster, half the resource cost. First exposure to shipping at scale and learning that performance is a feature, not an afterthought.',
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
              title: 'Frontend performance and design systems',
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
          heading: 'Current work',
          intro:
            'Bridging design and engineering. Design systems that scale, visual testing that ships with confidence, tokens that let designers work directly in production.',
          cards: [
            {
              title: 'Design systems and engineering craft',
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
                'Rebuilt web crawlers and scrapers from the ground up. 10x faster, half the resource cost. First exposure to shipping at scale and learning that performance is a feature, not an afterthought.',
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
            "Built the first A/B experimentation program at an online grocery startup. Owned the platform, the experiments, and the measurement.",
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
          heading: 'Current work',
          intro:
            'Setting up event tracking at a US crypto exchange. Building the visibility layer: which features users actually use, which flows drop off, whether the numbers back up the assumptions.',
          cards: [
            {
              title: 'Tracking and experimentation',
              paragraphs: [
                [
                  'Set up ',
                  { text: 'Segment event tracking', accent: true },
                  ' for the Support Center portal across web and 3 React Native apps. Instrumented experiment touchpoints and new UI elements to measure adoption and retention.',
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
    },
    description: {
      default:
        'Remote from Brazil. React, Next.js, design engineering. Available for contracts where the work matters more than the process deck.',
      growth:
        'Remote from Brazil. React, Next.js, TypeScript. Growth engineering, experimentation, event tracking. Available for contracts where the work is measured.',
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
