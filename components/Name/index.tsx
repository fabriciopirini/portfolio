'use client'

import { motion } from 'framer-motion'
import { Clock7Icon, GlobeIcon, Laptop2Icon, Linkedin, Mail } from 'lucide-react'
import { usePostHog } from 'posthog-js/react'

import { CTAButton } from '@/components/CTAButton'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_RIGHT_ANIMATION_VARIANTS } from '@/lib/constants'

export const NameBanner = () => {
  const posthog = usePostHog()

  const date1 = new Date('2017-09-01') // 1 year before I started working as a developer at Sportradar (that includes my internship)
  const date2 = new Date()

  const diffTime = Math.abs(date2.valueOf() - date1.valueOf())
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className="flex flex-col gap-3 pb-5 sm:flex-row sm:items-center"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <span>I&apos;m</span>
        <span className="inline-block text-5xl font-medium text-accent md:text-6xl">Fabricio Pirini</span>
      </motion.h1>
      <motion.h2 className="flex flex-row items-baseline gap-3" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Laptop2Icon size={20} className="inline-block" />
        <span>Senior Frontend Engineer</span>
      </motion.h2>
      <motion.h2 className="flex flex-row items-baseline gap-3" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Clock7Icon size={20} className="inline-block" />
        <span>{`${diffYears ?? 6}+ years of experience`}</span>
      </motion.h2>
      <motion.h2 className="mb-4 flex flex-row items-baseline gap-3" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <GlobeIcon size={20} className="inline-block" />
        <span>Based in Norway</span>
      </motion.h2>
      <motion.div className="flex flex-col-reverse gap-6 pb-8 sm:flex-row">
        <CTAButton id="resume_download" type="secondary" as="link" href="/api/resume" text="Resume" download />
        <Popover
          onOpenChange={value => {
            const event = value ? 'contact_me_open' : 'contact_me_close'
            posthog?.capture(event)
          }}
        >
          <PopoverTrigger asChild>
            <CTAButton type="primary" as="button" text="Contact me" />
          </PopoverTrigger>
          <PopoverContent className="mt-4 rounded-xl border-2 border-accent bg-white drop-shadow-md" align="center">
            <motion.div
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="flex flex-row items-center justify-around gap-3"
            >
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <motion.a
                href="mailto:fabriciopirini@gmail.com"
                className="flex flex-col gap-2"
                variants={FADE_RIGHT_ANIMATION_VARIANTS}
                onClick={() => posthog?.capture('contact_me_email')}
              >
                <div className="rounded-full bg-primary p-4">
                  <Mail size={32} className="mx-auto inline-block" />
                </div>
                <span className="mx-auto text-lg text-primary-background">Email</span>
                <span className="sr-only">Send email to Fabricio</span>
              </motion.a>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <motion.a
                href="https://www.linkedin.com/in/fabriciopirini/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2"
                variants={FADE_RIGHT_ANIMATION_VARIANTS}
                onClick={() => posthog?.capture('contact_me_linkedin')}
              >
                <div className="rounded-full bg-primary p-4">
                  <Linkedin size={32} className="mx-auto inline-block" />
                </div>
                <span className="mx-auto text-lg text-primary-background">LinkedIn</span>
                <span className="sr-only">Visit Fabricio's LinkedIn profile</span>
              </motion.a>
            </motion.div>
          </PopoverContent>
        </Popover>
      </motion.div>
    </motion.div>
  )
}
