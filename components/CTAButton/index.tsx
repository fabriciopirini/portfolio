'use client'

import { cva } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { DownloadIcon, ExternalLinkIcon } from 'lucide-react'
import type { Ref } from 'react'
import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import Link from 'next/link'

export const CTAButtonStyles = cva(
  'rounded-xl bg-inherit text-3xl py-3 sm:py-4 text-center flex items-center px-5 sm:px-8 justify-center text-primary cursor-pointer select-none',
  {
    variants: {
      intent: {
        primary: 'bg-accent text-primary-background',
        secondary: 'border-4 border-accent text-accent bg-primary-hero',
      },
      external: {
        true: 'items-baseline',
      },
    },
  }
)

const animation = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
  whileTap: {
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
  variants: {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  },
}

type CTAButtonProps = {
  text: string
  type?: 'primary' | 'secondary'
  external?: boolean
  download?: boolean
  href?: string
  onClick?: () => void
  as?: 'button' | 'link'
}

export const CTAButton = React.forwardRef(
  ({ type = 'primary', external = false, onClick, as, download, ...props }: CTAButtonProps, ref) => {
    const [isAnimationRunning, setIsAnimationRunning] = useState(false)

    const { text, href } = props

    if (as === 'link') {
      return (
        // biome-ignore lint/a11y/useValidAnchor: It is a valid anchor with a valid href
        <motion.a
          ref={ref as Ref<HTMLAnchorElement>}
          {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
          href={href}
          className={cn(CTAButtonStyles({ intent: type, external }), isAnimationRunning && 'animate-none')}
          onClick={() => {
            setIsAnimationRunning(true)
            onClick?.()
          }}
          onAnimationEnd={() => setIsAnimationRunning(false)}
          suppressHydrationWarning
          {...animation}
          {...props}
        >
          {text}
          {external && <ExternalLinkIcon size={24} className="h-6 w-6 min-h-6 min-w-6 ml-2 inline-block" />}
          {download && <DownloadIcon size={24} className="h-6 w-6 min-h-6 min-w-6 ml-2 inline-block" />}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref as Ref<HTMLButtonElement>}
        className={cn(CTAButtonStyles({ intent: type }), isAnimationRunning && 'animate-none')}
        onClick={() => setIsAnimationRunning(true)}
        onAnimationEnd={() => setIsAnimationRunning(false)}
        suppressHydrationWarning
        {...animation}
        {...props}
      >
        {text}
        {external && <ExternalLinkIcon size={20} className="ml-2 inline-block" />}
      </motion.button>
    )
  }
)

CTAButton.displayName = 'CTAButton'
