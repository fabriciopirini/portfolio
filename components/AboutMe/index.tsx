'use client'

import { CircleCheckBigIcon, RouteIcon, TrendingUpIcon } from 'lucide-react'
import Image from 'next/image'
import { useWindowSize } from 'usehooks-ts'

import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel'
import { useYearsOfExperience } from '@/hooks/use-years-of-experience'
import { COPY } from '@/lib/site-copy'
import { ACTIVE_VARIANT } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import LegoPiece from '@/public/assets/lego-piece.png'

export const AboutMe = () => {
  const screen = useWindowSize()
  const { yearsText } = useYearsOfExperience()

  const isMobile = screen?.width < 1280 // 1280px is the breakpoint for the xl size

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative flex w-full flex-col gap-5 bg-white py-16 text-center lg:container md:px-28 md:py-20 lg:gap-16"
    >
      <CornerMinus pos="top-right" />
      <CornerMinus pos="top-left" />
      <CornerMinus pos="bottom-left" />
      <CornerMinus pos="bottom-right" />
      <h2 id="about-heading" className="font-leagueSpartan text-3xl font-medium text-secondary md:text-7xl">{COPY.about.heading}</h2>
      <Carousel
        className="mx-auto w-full max-w-xs md:max-w-2xl xl:max-w-none"
        opts={{
          active: isMobile,
        }}
      >
        <CarouselContent className="text-left">
          {[RouteIcon, CircleCheckBigIcon, TrendingUpIcon].map((Icon, i) => {
            const card = COPY.about.cards[ACTIVE_VARIANT][i]
            const body = typeof card.body === 'function' ? card.body(yearsText ?? 'nine') : card.body
            return (
              <CarouselItem key={card.title} className="lg:basis-2/3 xl:basis-1/3">
                <div className="flex h-full flex-col gap-5 bg-[#373943] p-10">
                  <Icon
                    strokeWidth={1.5}
                    className={cn('pointer-events-none text-accent', i === 1 ? 'mb-4 size-12' : 'size-16')}
                  />
                  <h3 className="font-leagueSpartan text-3xl font-medium text-primary max-xl:select-none">{card.title}</h3>
                  <p className="text-primary max-xl:select-none">{body}</p>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselDots className="xl:hidden" isDarkMode={false} />
      </Carousel>
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
