import Atropos from 'atropos/react'

import {
  AzureLogo,
  FigmaLogo,
  GraphQLLogo,
  JavaScriptLogo,
  NextjsLogo,
  NodejsLogo,
  PlaywrightLogo,
  ReactLogo,
  SanityLogo,
  TailwindCSSLogo,
  TypeScriptLogo,
  VercelLogo,
} from '@/components/SvgLogos'
import { cn } from '@/lib/utils'

import 'atropos/css'

export const Skills = () => (
  <>
    <section className="container w-full pt-4 md:pt-10">
      <h2 className="text-center text-5xl font-bold">Technology</h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 py-6 text-2xl md:flex-[1_1_21%]">
        {skills.map(skill => (
          <Atropos
            key={skill.name}
            shadow={false}
            // highlight={false}
            rotateXMax={20}
            rotateYMax={20}
            rotateTouch="scroll-y"
            className="[&_span.atropos-highlight]:bg-[radial-gradient(circle_at_50%,rgba(255,255,255,0.15)_0%,transparent_50%)] [&_span.atropos-inner]:bg-skill-card [&_span.atropos-inner]:rounded-2xl"
          >
            <div
              className="flex h-auto w-40 flex-col items-center justify-between gap-2 rounded-2xl bg-skill-card drop-shadow-2xl p-8 md:h-56 md:w-56 md:gap-4 overflow-hidden"
              data-atropos-offset="0"
            >
              <div className="flex flex-col items-center justify-between h-full" data-atropos-offset="15">
                {skill.icon}
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            </div>
          </Atropos>
        ))}
      </div>
    </section>
  </>
)

const LogoStyles = 'h-16 w-16 min-h-16 min-w-16 md:h-24 md:w-24 md:min-h-24 md:min-w-24'

const skills = [
  {
    name: 'JavaScript',
    icon: <JavaScriptLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'TypeScript',
    icon: <TypeScriptLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'React',
    icon: <ReactLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'Next.js',
    icon: <NextjsLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'Node.js',
    icon: <NodejsLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'GraphQL',
    icon: <GraphQLLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'Vercel',
    icon: <VercelLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'Azure',
    icon: <AzureLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'Playwright',
    icon: <PlaywrightLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'TailwindCSS',
    icon: <TailwindCSSLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'Figma',
    icon: <FigmaLogo className={cn(LogoStyles)} />,
  },
  {
    name: 'CMS',
    icon: <SanityLogo className={cn(LogoStyles)} />,
  },
] as const
