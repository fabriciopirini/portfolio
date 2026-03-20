'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2Icon, MapPinIcon, RocketIcon } from 'lucide-react'
import Image from 'next/image'

import { ImageBubble } from '@/components/ImageBubble'
import { calculateYearsOfExperience } from '@/lib/utils'
import ProfilePic from '@/public/assets/lego_me.png'

export const HeroLegoImage = () => {
  const [diffYears, setDiffYears] = useState<number | null>(null)

  // Intentional: calculateYearsOfExperience() calls new Date(), which Next.js forbids
  // during static prerendering of Client Components. Deferring to an effect ensures
  // the value is always computed on the client after hydration. The '...' fallback
  // shown during SSR/hydration is acceptable for this decorative badge.
  // react-doctor-disable-next-line react-doctor/rendering-hydration-no-flicker
  useEffect(() => {
    // react-doctor-disable-next-line react-hooks-js/set-state-in-effect
    setDiffYears(calculateYearsOfExperience())
  }, [])

  return (
    <div>
      <ImageBubble
        icon={
          <CheckCircle2Icon
            fill="#373943"
            className="!z-20 size-9 rounded-full bg-accent stroke-accent p-1 md:size-[calc(30px+2*8px)] md:p-2 xl:size-[calc(35px+2*16px)] xl:p-3"
            aria-hidden
          />
        }
        highlightedText="Senior"
        text="Software Engineer"
        className="left-0 top-1/2"
      />
      <ImageBubble
        icon={
          <RocketIcon
            fill="#373943"
            className="!z-20 size-9 rounded-full bg-accent stroke-accent p-1 md:size-[calc(30px+2*8px)] md:p-2 xl:size-[calc(35px+2*16px)] xl:p-3"
            aria-hidden
          />
        }
        highlightedText={`${diffYears ?? '...'}+ years`}
        text="of experience"
        className="right-0 top-1/4"
      />
      <ImageBubble
        icon={
          <MapPinIcon
            fill="#373943"
            className="!z-20 size-9 rounded-full bg-accent stroke-accent p-1 md:size-[calc(30px+2*8px)] md:p-2 xl:size-[calc(35px+2*16px)] xl:p-3"
            aria-hidden
          />
        }
        highlightedText="Brazil"
        text="Based"
        className="bottom-5 right-5"
      />
      <div className="size-full @container" style={{ containerType: 'inline-size' }}>
        <Image
          id="hero-lego-image"
          className="mx-auto max-h-[800px] object-contain"
          src={ProfilePic}
          alt="Profile Picture"
          width={500}
          height={800}
          priority
          aria-hidden
        />
      </div>
    </div>
  )
}
