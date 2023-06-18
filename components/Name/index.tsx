'use client'
import { motion } from 'framer-motion'
import { GlobeIcon, Laptop2Icon } from 'lucide-react'

import { CTAButton } from '@/components/CTAButton'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'

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
      <motion.p className="flex flex-row items-baseline gap-3 md:mb-4" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <GlobeIcon size={20} className="inline-block" />
        Based in Norway
      </motion.p>
      <motion.div className="flex flex-col-reverse gap-6 pb-8 sm:flex-row">
        <CTAButton type="secondary" text="Contact me" href="/" isAnimated />
        <CTAButton external text="Resume" href="https://bit.ly/fabriciopirini-updated-CV" isAnimated />
      </motion.div>
    </motion.div>
  </>
)
