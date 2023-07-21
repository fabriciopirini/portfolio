'use client'

import type { Ref } from 'react'
import { useState } from 'react'
import React from 'react'
import { cva } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { ExternalLinkIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const CTAButtonStyles = cva(
  'rounded-xl bg-inherit py-3 sm:py-4 text-center flex items-center px-6 sm:px-10 text-primary cursor-pointer select-none',
  {
    variants: {
      intent: {
        primary: 'bg-accent text-primary-background',
        secondary: 'border-4 border-accent text-accent ',
      },
      external: {
        true: 'items-baseline justify-center',
      },
    },
  }
)

type CTAButtonProps = {
  text: string
  type?: 'primary' | 'secondary'
  external?: boolean
  href?: string
  isAnimated?: boolean
}

export const CTAButton = React.forwardRef((props: CTAButtonProps, ref) => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false)

  const { type = 'primary', text, external = false, href, isAnimated = false } = props

  return (
    <motion.a
      ref={ref as Ref<HTMLAnchorElement>}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.3,
        },
      }}
      whileTap={{
        scale: 0.9,
        transition: {
          duration: 0.2,
        },
      }}
      className={cn(CTAButtonStyles({ intent: type }), isAnimationRunning && 'animate-none')}
      onClick={() => setIsAnimationRunning(true)}
      onAnimationEnd={() => setIsAnimationRunning(false)}
      {...(external && { target: '_blank', rel: 'noopener noreferrer', href })}
      {...(isAnimated && {
        variants: {
          hidden: { opacity: 0 },
          show: { opacity: 1, y: 0, transition: { type: 'spring' } },
        },
      })}
      {...props}
    >
      {text}
      {external && <ExternalLinkIcon size={20} className="ml-2 inline-block" />}
    </motion.a>
  )
})

CTAButton.displayName = 'CTAButton'
