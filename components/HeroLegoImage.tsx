import { CheckCircle2Icon, Clock7Icon, MapPinIcon } from 'lucide-react'
import Image from 'next/image'

import { ImageBubble } from '@/components/ImageBubble'
import ProfilePic from '@/public/assets/lego_me.png'
import LegoMeWithBubbleText from '@/public/assets/lego-me-with-bubble-text.png'

export const HeroLegoImage = () => {
  const date1 = new Date('2017-09-01') // 1 year before I started working as a developer at Sportradar (that includes my internship)
  const date2 = new Date()

  const diffTime = Math.abs(date2.valueOf() - date1.valueOf())
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))

  return (
    <Image
      className="h-auto w-full object-contain lg:h-[800px]"
      src={LegoMeWithBubbleText}
      alt="Fabricio as a Lego figure with bubbles of text around him that say Senior Frontend Engineer, 6+ years of experience, and Norway based"
      width={800}
      height={800}
      priority
    />
  )

  return (
    <>
      <ImageBubble
        icon={
          <CheckCircle2Icon
            fill="#373943"
            className="z-10 size-9 rounded-full bg-accent stroke-accent p-1 md:size-[calc(30px+2*8px)] md:p-2 xl:size-[calc(40px+2*16px)] xl:p-3"
          />
        }
        highlightedText="Senior"
        text="Software Engineer"
        className="left-0 top-1/2"
      />
      <ImageBubble
        icon={
          <Clock7Icon
            fill="#373943"
            className="z-10 size-9 rounded-full bg-accent stroke-accent p-1 md:size-[calc(30px+2*8px)] md:p-2 xl:size-[calc(40px+2*16px)] xl:p-3"
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
            className="z-10 size-9 rounded-full bg-accent stroke-accent p-1 md:size-[calc(30px+2*8px)] md:p-2 xl:size-[calc(40px+2*16px)] xl:p-3"
          />
        }
        highlightedText="Norway"
        text="Based"
        className="bottom-5 right-5"
      />
      <div className="size-full">
        <Image
          className="mx-auto max-h-[800px] object-contain"
          src={ProfilePic}
          alt="Profile Picture"
          width={500}
          height={800}
          priority
        />
      </div>
    </>
  )
}
