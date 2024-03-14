'use client'

import { motion } from 'framer-motion'
import { Clock7Icon, GlobeIcon, Laptop2Icon, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { usePostHog } from 'posthog-js/react'

import { CTAButton } from '@/components/CTAButton'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_RIGHT_ANIMATION_VARIANTS } from '@/lib/constants'

export const NameBanner = () => {
  const posthog = usePostHog()

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
      className="flex w-auto flex-col gap-4 md:gap-9"
    >
      <motion.h1
        className="flex flex-col gap-1 pb-5 text-4xl font-medium leading-none md:text-7xl xl:text-8xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <div className="flex flex-row-reverse items-end justify-end md:flex-col md:items-start">
          <Image
            src="/assets/waving-hand.png"
            alt="Fabricio Pirini"
            width={138}
            height={133}
            className="size-14 md:size-24 xl:size-[133px]"
          />
          <span className="font-leagueSpartan lg:whitespace-nowrap">Nice to meet you!</span>
        </div>
        <span className="font-leagueSpartan lg:whitespace-nowrap">I&apos;m Fabricio.</span>
      </motion.h1>
      <motion.p className="text-base sm:text-xl lg:text-2xl xl:text-[28px]" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        A dedicated Computer Engineer with a focus on Web Development at Norsk Gjenvinning. My goal is to integrate
        innovation with efficiency, making a meaningful contribution to the technology sector.
      </motion.p>
      <motion.div className="flex w-fit gap-2 rounded-full bg-white/10 px-6 py-4 md:gap-6">
        <CTAButton id="resume_download" type="secondary" as="link" href="/api/resume" text="Resume" />
        <Popover
          onOpenChange={(value) => {
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
                <span className="sr-only">Visit Fabricio&apos;s LinkedIn profile</span>
              </motion.a>
            </motion.div>
          </PopoverContent>
        </Popover>
      </motion.div>
    </motion.div>
  )
}
