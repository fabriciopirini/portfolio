'use client'

import { CircleCheckBigIcon, QuoteIcon, RouteIcon, TrendingUpIcon } from 'lucide-react'
import Image from 'next/image'
import { useWindowSize } from 'usehooks-ts'

import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import LegoPiece from '@/public/assets/lego-piece.png'

export const AboutMe = () => {
  const screen = useWindowSize()

  const isMobile = screen?.width < 1280 // 1280px is the breakpoint for the xl size

  return (
    <section
      id="about"
      className="relative flex w-full flex-col gap-5 rounded-xl bg-white py-7 text-center lg:container md:px-28 md:py-20 lg:mb-36 lg:gap-16"
    >
      <CornerMinus pos="top-right" />
      <CornerMinus pos="top-left" />
      <CornerMinus pos="bottom-left" />
      <CornerMinus pos="bottom-right" />
      <h2 className="font-leagueSpartan text-3xl font-medium text-secondary md:text-7xl">About me</h2>
      <Carousel
        className="mx-auto w-full max-w-xs md:max-w-2xl xl:max-w-none"
        opts={{
          active: isMobile,
        }}
      >
        <CarouselContent className="text-left">
          <CarouselItem className="lg:basis-2/3 xl:basis-1/3">
            <div className="flex h-full flex-col gap-5 rounded-xl bg-[#373943] p-10">
              <RouteIcon strokeWidth={1.5} className="pointer-events-none size-16 text-accent" />
              <h3 className="font-leagueSpartan text-3xl font-medium text-primary max-xl:select-none">Journey</h3>
              <p className="text-primary max-xl:select-none">
                I build <span className="font-semibold text-accent">fast, scalable systems</span> using React and
                Next.js. Remote from Brazil. I care about code that works, not corporate theater.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-2/3 xl:basis-1/3">
            <div className="flex h-full flex-col gap-5 rounded-xl bg-[#373943] p-10">
              <CircleCheckBigIcon strokeWidth={1.5} className="pointer-events-none mb-4 size-12 text-accent" />
              <h3 className="font-leagueSpartan text-3xl font-medium text-primary max-xl:select-none">What matters</h3>
              <p className="text-primary max-xl:select-none">
                <span className="font-semibold">Automation</span> that saves people time.{' '}
                <span className="font-semibold">Design systems</span> that make teams faster. And building with
                intention, no bloat.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-2/3 xl:basis-1/3">
            <div className="flex h-full flex-col gap-5 rounded-xl bg-[#373943] p-10">
              <TrendingUpIcon strokeWidth={1.5} className="pointer-events-none size-16 text-accent" />
              <h3 className="font-leagueSpartan text-3xl font-medium text-primary max-xl:select-none">Right now</h3>
              <p className="text-primary max-xl:select-none">
                Working on <span className="font-semibold">platform infrastructure</span> that helps other developers
                build better products. Test suites, design tokens, performance wins.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselDots className="xl:hidden" isDarkMode={false} />
      </Carousel>
      <div className="flex min-h-10 justify-center gap-2 px-8 pb-14 pt-5 lg:py-5">
        <QuoteIcon
          fill="#ffc457"
          className="pointer-events-none size-5 min-h-5 min-w-5 -scale-x-100 text-accent lg:size-7"
        />
        <p className="my-auto flex max-w-[30ch] items-end text-xl font-medium text-secondary lg:text-3xl">
          Good code speaks for itself
        </p>
        <QuoteIcon fill="#ffc457" className="mt-auto size-5 min-h-5 min-w-5 text-accent lg:size-7" />
      </div>
    </section>
  )
}

const CornerMinus = ({
  pos,
  className,
}: {
  pos: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'
  className?: string
}) => (
  <div
    className={cn(
      'pointer-events-none absolute',
      {
        'right-2 top-2 lg:right-4 lg:top-4': pos === 'top-right',
        'left-2 top-2 lg:left-4 lg:top-4': pos === 'top-left',
        'bottom-2 left-2 lg:bottom-4 lg:left-4': pos === 'bottom-left',
        'bottom-2 right-2 lg:bottom-4 lg:right-4': pos === 'bottom-right',
      },
      className
    )}
  >
    <Image
      src={LegoPiece}
      alt="Lego piece"
      width={48}
      height={48}
      className={cn('pointer-events-none size-9 text-accent drop-shadow lg:size-12', {
        'rotate-12': pos === 'top-left' || pos === 'bottom-right',
        '-rotate-12': pos === 'top-right' || pos === 'bottom-left',
      })}
      aria-hidden
    />
    {/* <PuzzlePiece
      className={cn('pointer-events-none absolute size-9 text-accent drop-shadow-2xl lg:size-12', {
        'rotate-12': pos === 'top-left' || pos === 'bottom-right',
        '-rotate-12': pos === 'top-right' || pos === 'bottom-left',
      })}
    /> */}
  </div>
)
