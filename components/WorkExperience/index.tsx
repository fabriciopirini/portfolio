import { BadgeCheckIcon } from 'lucide-react'

import type { Paragraph } from '@/lib/site-copy'
import { COPY } from '@/lib/site-copy'
import { ACTIVE_VARIANT } from '@/lib/site-config'

const renderParagraph = (para: Paragraph, key: number) => {
  if (typeof para === 'string') {
    return <p key={key}>{para}</p>
  }
  return (
    <p key={key}>
      {para.map((seg, i) =>
        typeof seg === 'string' ? (
          seg
        ) : (
          <span key={i} className="font-semibold text-accent">
            {seg.text}
          </span>
        )
      )}
    </p>
  )
}

export const WorkExperience = () => {
  const chapters = COPY.workExperience.chapters[ACTIVE_VARIANT]

  return (
    <section
      id="experience"
      className="flex w-full flex-col gap-16 py-16 pl-6 pr-4 lg:container md:px-0 md:py-20 lg:gap-32"
    >
      {chapters.map((chapter, chapterIdx) => (
        <div key={chapterIdx} className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
          <div className="shrink-0 basis-2/5">
            <p className="mb-7 font-leagueSpartan text-3xl font-medium lg:mb-14 lg:text-6xl">{chapter.heading}</p>
            <p className="lg:mb-10 lg:text-3xl">{chapter.intro}</p>
          </div>
          <div>
            {chapter.cards.map((card, cardIdx) => (
              <div key={cardIdx} className="relative ml-2 basis-3/5 md:ml-8">
                <BadgeCheckIcon
                  fill="#ffc457"
                  className="pointer-events-none absolute top-0 -ml-6 -mt-1 size-14 text-primary-background"
                />
                <div
                  className="mt-1 border-l-[7px] border-dotted border-accent/50 pb-10 pl-12"
                >
                  <div className="size-full space-y-5 rounded-xl border border-white bg-[#1E1E1E] p-7">
                    <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">{card.title}</p>
                    <div className="space-y-5 text-primary/70 lg:text-2xl">
                      {card.paragraphs.map((para, paraIdx) => renderParagraph(para, paraIdx))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
