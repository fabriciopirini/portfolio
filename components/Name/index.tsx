'use client'
import { motion } from 'framer-motion'
import { GlobeIcon, Laptop2Icon, Linkedin, Mail } from 'lucide-react'

import { CTAButton } from '@/components/CTAButton'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_RIGHT_ANIMATION_VARIANTS } from '@/lib/constants'

export const NameBanner = () => (
  <>
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
      <motion.p
        className="flex flex-col gap-3 pb-5 sm:flex-row sm:items-center"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <span>I&apos;m</span>
        <span className="inline-block text-5xl font-medium text-accent md:text-6xl">Fabricio Pirini</span>
      </motion.p>
      <motion.p className="flex flex-row items-baseline gap-3" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Laptop2Icon size={20} className="inline-block" />
        Frontend Engineer
      </motion.p>
      <motion.p className="mb-4 flex flex-row items-baseline gap-3" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <GlobeIcon size={20} className="inline-block" />
        Based in Norway
      </motion.p>
      <motion.div className="flex flex-col-reverse gap-6 pb-8 sm:flex-row">
        <CTAButton type="secondary" external text="Resume" href="https://bit.ly/fabriciopirini-updated-CV" isAnimated />
        <Popover>
          <PopoverTrigger asChild>
            <CTAButton type="primary" text="Contact me" isAnimated />
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
              <motion.a
                href="mailto:fabriciopirini@gmail.com"
                className="flex flex-col gap-2"
                variants={FADE_RIGHT_ANIMATION_VARIANTS}
              >
                <div className="rounded-full bg-primary p-4">
                  <Mail size={32} className="mx-auto inline-block" />
                </div>
                <span className="mx-auto text-lg text-primary-background">Email</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/fabriciopirini/"
                className="flex flex-col items-center justify-center gap-2"
                variants={FADE_RIGHT_ANIMATION_VARIANTS}
              >
                <div className="rounded-full bg-primary p-4">
                  <Linkedin size={32} className="mx-auto inline-block" />
                </div>
                <span className="mx-auto text-lg text-primary-background">LinkedIn</span>
              </motion.a>
            </motion.div>
          </PopoverContent>
        </Popover>
      </motion.div>
    </motion.div>
  </>
)