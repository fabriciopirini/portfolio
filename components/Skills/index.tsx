import Atropos from 'atropos/react'
import { CircleCheckBigIcon, PartyPopperIcon, TrendingUpIcon } from 'lucide-react'

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
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

import 'atropos/css'

export const Skills = () => (
  <>
    <section className="container w-full pt-4 md:pt-10">
      <h2 className="font-leagueSpartan mb-5 text-center text-5xl font-bold xl:mb-14 xl:text-7xl">Technology</h2>
      <Carousel className="mx-auto w-full lg:hidden">
        <CarouselContent className="text-left">
          {splitArrayIntoChunks(skills, 4).map((skillChunk, index) => (
            <CarouselItem key={index} className="mx-auto flex flex-row flex-wrap items-center justify-center gap-3">
              {skillChunk.map((skill) => (
                <div key={skill.name} className="aspect-square h-auto w-5/12">
                  <div
                    className="flex size-full flex-col items-center justify-between gap-2 overflow-hidden rounded-2xl bg-skill-card p-8 drop-shadow-2xl"
                    data-atropos-offset="0"
                  >
                    <div className="flex h-full flex-col items-center justify-center" data-atropos-offset="15">
                      {skill.icon}
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white max-sm:hidden xl:hidden" />
        <CarouselNext className="text-white max-sm:hidden xl:hidden" />
        <CarouselDots className="xl:hidden" isDarkMode />
      </Carousel>
      <div className="hidden py-6 text-2xl md:flex-[1_1_21%] lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-5">
        {skills.map((skill) => (
          <Atropos
            key={skill.name}
            shadow={false}
            // highlight={false}
            rotateXMax={20}
            rotateYMax={20}
            rotateTouch="scroll-y"
            className="[&_span.atropos-highlight]:bg-[radial-gradient(circle_at_50%,rgba(255,255,255,0.15)_0%,transparent_50%)] [&_span.atropos-inner]:rounded-2xl [&_span.atropos-inner]:bg-skill-card"
          >
            <div
              className="flex h-auto w-40 flex-col items-center justify-between gap-2 overflow-hidden rounded-2xl bg-skill-card p-8 drop-shadow-2xl md:size-56 md:gap-4"
              data-atropos-offset="0"
            >
              <div className="flex h-full flex-col items-center justify-between" data-atropos-offset="15">
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

const splitArrayIntoChunks = (arr: readonly any[], chunkSize: number) => {
  const chunkedArray: any[] = []

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize))
  }

  return chunkedArray
}

const LogoStyles = 'h-16 w-16 min-h-16 min-w-16 md:h-24 md:w-24 md:min-h-24 md:min-w-24 rounded-xl'

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
