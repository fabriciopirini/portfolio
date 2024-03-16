import { CircleCheckBigIcon, MinusIcon, PartyPopperIcon, QuoteIcon, TrendingUpIcon } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export const AboutMe = () => (
  <section
    id="about"
    className="container relative flex w-full flex-col gap-16 rounded-xl bg-white py-16 text-center md:px-28 md:py-20 lg:mb-36"
  >
    <CornerMinus className="right-4 top-4" />
    <CornerMinus className="left-4 top-4" />
    <CornerMinus className="bottom-4 left-4" />
    <CornerMinus className="bottom-4 right-4" />
    <h2 className="font-leagueSpartan text-5xl font-medium text-secondary md:text-7xl">About me</h2>
    <Carousel className="mx-auto w-full max-w-xs md:max-w-2xl xl:max-w-none">
      <CarouselContent className="text-left">
        <CarouselItem className="lg:basis-2/3 xl:basis-1/3">
          <div className="h-full rounded-xl bg-[#373943] p-10">
            <PartyPopperIcon strokeWidth={1.5} className="size-16 text-accent md:mb-10" />
            <h3 className="font-leagueSpartan text-3xl font-medium text-primary md:mb-6">I&apos;m Fabricio</h3>
            <p className="text-primary">
              I&apos;m a dedicated Computer Engineer with a focus on Web Development at Norsk Gjenvinning. My expertise
              lies in React, Next.js, and Typescript, enhanced by my academic background from UNIFEI and an
              international experience at the University of Toronto.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="lg:basis-2/3 xl:basis-1/3">
          <div className="h-full rounded-xl bg-[#373943] p-10">
            <CircleCheckBigIcon strokeWidth={1.5} className="size-12 text-accent md:mb-10" />
            <h3 className="font-leagueSpartan text-3xl font-medium text-primary md:mb-6">Commitment</h3>
            <p className="text-primary">
              I&apos;m committed to continual learning, especially in automation and code optimization, to improve
              software development practices. Outside of technology, I value spending time with my family, exploring
              films, and enjoying tranquil settings.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="lg:basis-2/3 xl:basis-1/3">
          <div className="h-full rounded-xl bg-[#373943] p-10">
            <TrendingUpIcon strokeWidth={1.5} className="size-16 text-accent md:mb-10" />
            <h3 className="font-leagueSpartan text-3xl font-medium text-primary md:mb-6">Experience</h3>
            <p className="text-primary">
              My experience has enabled me to enhance web applications and optimize CI/CD processes, aiming to boost
              team efficiency, achieve superior results, and nurture a positive workplace. My goal is to integrate
              innovation with efficiency, making a meaningful contribution to the technology sector.
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="max-sm:hidden xl:hidden" />
      <CarouselNext className="max-sm:hidden xl:hidden" />
      <CarouselDots className="xl:hidden" isDarkMode={false} />
    </Carousel>
    <div className="flex min-h-10 justify-center gap-2">
      <QuoteIcon fill="#ffc457" className="size-7 -scale-x-100 text-accent" />
      <p className="flex items-end text-3xl font-medium text-secondary">
        My journey reflects a commitment to excellence and innovation
      </p>
      <QuoteIcon fill="#ffc457" className="size-7 text-accent" />
    </div>
    <div className="flex items-center justify-center gap-2">
      <button className={cn(buttonVariants({ variant: 'outline' }))}>Github</button>
      <button className={cn(buttonVariants())}>LinkedIn</button>
    </div>
  </section>
)

const CornerMinus = ({ className }: { className: string }) => (
  <div className={cn('absolute', className)}>
    <MinusIcon strokeWidth={4} className={cn('absolute size-12 rotate-45 text-accent', className)} />
    <MinusIcon strokeWidth={4} className={cn('absolute size-12 -rotate-45 text-accent', className)} />
  </div>
)
