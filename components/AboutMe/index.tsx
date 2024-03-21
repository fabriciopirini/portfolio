import { CircleCheckBigIcon, MinusIcon, QuoteIcon, RouteIcon, TrendingUpIcon } from 'lucide-react'
import { useWindowSize } from 'usehooks-ts'

import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export const AboutMe = () => {
  const screen = useWindowSize()

  const isMobile = screen?.width < 1280 // 1280px is the breakpoint for the xl size

  return (
    <section
      id="about"
      className="relative flex w-full flex-col gap-5 rounded bg-white py-7 text-center lg:container md:px-28 md:py-20 lg:mb-36 lg:gap-16"
    >
      <CornerMinus className="pointer-events-none right-2 top-2 lg:right-4 lg:top-4" />
      <CornerMinus className="pointer-events-none left-2 top-2 lg:left-4 lg:top-4" />
      <CornerMinus className="pointer-events-none bottom-2 left-2 lg:bottom-4 lg:left-4" />
      <CornerMinus className="pointer-events-none bottom-2 right-2 lg:bottom-4 lg:right-4" />
      <h2 className="font-leagueSpartan text-3xl font-medium text-secondary md:text-7xl">About me</h2>
      <Carousel
        className="mx-auto w-full max-w-xs md:max-w-2xl xl:max-w-none"
        opts={{
          active: isMobile,
        }}
      >
        <CarouselContent className="text-left">
          <CarouselItem className="lg:basis-2/3 xl:basis-1/3">
            <div className="flex h-full flex-col gap-5 rounded bg-[#373943] p-10">
              <RouteIcon strokeWidth={1.5} className="pointer-events-none size-16 text-accent" />
              <h3 className="font-leagueSpartan text-3xl font-medium text-primary max-xl:select-none">Journey</h3>
              <p className="text-primary max-xl:select-none">
                I&apos;m a dedicated Computer Engineer with a focus on Web Development at Norsk Gjenvinning. My
                expertise lies in React, Next.js, and Typescript, enhanced by my academic background from UNIFEI and an
                international experience at the University of Toronto.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-2/3 xl:basis-1/3">
            <div className="flex h-full flex-col gap-5 rounded bg-[#373943] p-10">
              <CircleCheckBigIcon strokeWidth={1.5} className="pointer-events-none mb-4 size-12 text-accent" />
              <h3 className="font-leagueSpartan text-3xl font-medium text-primary max-xl:select-none">Commitment</h3>
              <p className="text-primary max-xl:select-none">
                I&apos;m committed to continual learning, especially in automation and code optimization, to improve
                software development practices. Outside of technology, I value spending time with my family, exploring
                films, and enjoying tranquil settings.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-2/3 xl:basis-1/3">
            <div className="flex h-full flex-col gap-5 rounded bg-[#373943] p-10">
              <TrendingUpIcon strokeWidth={1.5} className="pointer-events-none size-16 text-accent" />
              <h3 className="font-leagueSpartan text-3xl font-medium text-primary max-xl:select-none">Experience</h3>
              <p className="text-primary max-xl:select-none">
                My experience has enabled me to enhance web applications and optimize CI/CD processes, aiming to boost
                team efficiency, achieve superior results, and nurture a positive workplace. My goal is to integrate
                innovation with efficiency, making a meaningful contribution to the technology sector.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselDots className="xl:hidden" isDarkMode={false} />
      </Carousel>
      <div className="flex min-h-10 justify-center gap-2 px-8 pb-14 pt-5  lg:py-5">
        <QuoteIcon
          fill="#ffc457"
          className="pointer-events-none size-5 min-h-5 min-w-5 -scale-x-100 text-accent lg:size-7"
        />
        <p className="my-auto flex max-w-[30ch] items-end text-xl font-medium text-secondary lg:text-3xl">
          My journey reflects a commitment to excellence and innovation
        </p>
        <QuoteIcon fill="#ffc457" className="mt-auto size-5 min-h-5 min-w-5 text-accent lg:size-7" />
      </div>
    </section>
  )
}

const CornerMinus = ({ className }: { className: string }) => (
  <div className={cn('absolute', className)}>
    <MinusIcon
      strokeWidth={4}
      className={cn('pointer-events-none absolute size-9 rotate-45 text-accent lg:size-12', className)}
    />
    <MinusIcon
      strokeWidth={4}
      className={cn('pointer-events-none absolute size-9 -rotate-45 text-accent lg:size-12', className)}
    />
  </div>
)
