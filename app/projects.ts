export type Project = {
  id: string
  title: string
  summary: string
  role: string
  outcome: string
  stack: string[]
  repoUrl?: string
  thingThatWentWrong?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'visual-testing',
    title: 'Visual Testing System',
    summary:
      'Rebuilt the visual regression suite from scratch. Replaced a 12-minute CI job with a sub-60-second Playwright pipeline and tripled coverage in the process.',
    role: 'Tech Lead',
    outcome: '12 min → <1 min, 3× coverage',
    stack: ['Playwright', 'TypeScript', 'CI/CD'],
    thingThatWentWrong:
      'First version tried to diff every pixel. Screenshot noise from antialiasing killed the signal-to-noise ratio. Switched to element-level snapshots and the false-positive rate dropped to near zero.',
  },
  {
    id: 'design-tokens',
    title: 'Design Token Automation',
    summary:
      'Automated design token propagation across 11 core components. Designers now push theme changes to production without opening a PR or filing a ticket.',
    role: 'Solo build',
    outcome: '11 components, zero engineering overhead per theme release',
    stack: ['Figma', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'live-chat-unification',
    title: 'Live Chat Unification',
    summary:
      'Led the consolidation of web and mobile chat into a single platform integration, centralizing support tooling for the entire product.',
    role: 'Tech Lead',
    outcome: 'Unified support across 2 apps, one integration to maintain',
    stack: ['React', 'React Native', 'GraphQL'],
    thingThatWentWrong:
      'The web and mobile SDKs had diverged significantly. We had to write an adapter layer to normalize event shapes before we could share any business logic. Added two weeks but saved months of future drift.',
  },
  {
    id: 'sanity-cms',
    title: 'CMS Architecture Overhaul',
    summary:
      'Redesigned the Sanity content setup to support multi-product publishing. Content teams can now manage and deploy articles across all products without engineering involvement.',
    role: 'Solo build',
    outcome: 'Content deploys decoupled from engineering releases',
    stack: ['Sanity', 'Next.js', 'TypeScript'],
  },
]
