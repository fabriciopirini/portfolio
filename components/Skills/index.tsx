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

const LogoStyles = 'h-16 w-16 min-h-16 min-w-16 md:h-24 md:w-24 md:min-h-24 md:min-w-24'

export const Skills = () => {
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

  return (
    <section className="container w-full pt-4 md:pt-10">
      <h2 className="text-center text-5xl font-bold">Technology</h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 py-6 text-2xl md:flex-[1_1_21%]">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="flex h-auto w-40 flex-col items-center justify-between gap-2 rounded-2xl bg-skill-card drop-shadow-2xl duration-300 transition-transform focus:scale-105 hover:scale-105 ease-in-out p-8 md:h-56 md:w-56 md:gap-4"
          >
            {skill.icon}
            {/* <Image className="h-auto w-auto" width={150} height={150} src={skill.icon} alt={skill.name} /> */}
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
