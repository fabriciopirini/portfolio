'use client'

import { CheckCircle2Icon, MapPinIcon, RocketIcon } from 'lucide-react'
import Image from 'next/image'

import { ImageBubble } from '@/components/ImageBubble'
import ProfilePic from '@/public/assets/lego_me.png'

export const HeroLegoImage = () => {
  const date1 = new Date('2017-09-01')
  const date2 = new Date()

  const diffTime = Math.abs(date2.valueOf() - date1.valueOf())
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365))

  return (
    <div>
      <ImageBubble
        icon={
          <CheckCircle2Icon
            fill="#373943"
            className="!z-20 size-9 rounded-full bg-accent stroke-accent p-1 md:size-[calc(30px+2*8px)] md:p-2 xl:size-[calc(40px+2*16px)] xl:p-3"
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
            className="!z-20 size-9 rounded-full bg-accent stroke-accent p-1 md:size-[calc(30px+2*8px)] md:p-2 xl:size-[calc(40px+2*16px)] xl:p-3"
            aria-hidden
          />
        }
        highlightedText={`${diffYears}+ years`}
        text="of experience"
        className="right-0 top-1/4"
      />
      <ImageBubble
        icon={
          <MapPinIcon
            fill="#373943"
            className="!z-20 size-9 rounded-full bg-accent stroke-accent p-1 md:size-[calc(30px+2*8px)] md:p-2 xl:size-[calc(40px+2*16px)] xl:p-3"
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
