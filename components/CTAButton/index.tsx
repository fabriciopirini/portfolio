'use client'

import type { Ref } from 'react'
import React, { useState } from 'react'
import { cva } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { CloudDownloadIcon } from 'lucide-react'
import { usePostHog } from 'posthog-js/react'

import { MailIconFilled } from '@/components/SvgLogos'
import { cn } from '@/lib/utils'

export const CTAButtonStyles = cva(
  'rounded-full bg-inherit gap-2 whitespace-nowrap text-[15px] leading-none md:text-2xl xl:text-[28px] py-3 sm:py-4 text-center flex items-center px-5 sm:px-7 justify-center text-primary cursor-pointer select-none',
  {
    variants: {
      intent: {
        primary: 'bg-accent text-primary-background',
        secondary: 'border-2 border-white/30 text-primary',
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
  id?: string
  text: string
  type?: 'primary' | 'secondary'
  external?: boolean
  href?: string
  as?: 'button' | 'link'
}

export const CTAButton = React.forwardRef(
  ({ type = 'primary', external = false, as, ...props }: CTAButtonProps, ref) => {
    const [isAnimationRunning, setIsAnimationRunning] = useState(false)

    const posthog = usePostHog()

    const { text, href } = props

    if (as === 'link') {
      return (
        <motion.a
          ref={ref as Ref<HTMLAnchorElement>}
          {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
          href={href}
          className={cn(CTAButtonStyles({ intent: type, external }), isAnimationRunning && 'animate-none')}
          onClick={() => {
            setIsAnimationRunning(true)
            posthog?.capture(props.id ?? 'cta_button_click')
          }}
          onAnimationEnd={() => setIsAnimationRunning(false)}
          suppressHydrationWarning
          {...animation}
          {...props}
        >
          <CloudDownloadIcon className="pointer-events-none inline-block size-5 md:size-7" />
          {text}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref as Ref<HTMLButtonElement>}
        className={cn(CTAButtonStyles({ intent: type }), isAnimationRunning && 'animate-none')}
        onClick={() => {
          setIsAnimationRunning(true)
          posthog?.capture(props.id ?? 'cta_button_click')
        }}
        onAnimationEnd={() => setIsAnimationRunning(false)}
        suppressHydrationWarning
        {...animation}
        {...props}
      >
        <MailIconFilled className="pointer-events-none size-7 fill-black " />
        {/* <MailIcon size={28} className="inline-block size-7 min-h-7 min-w-7 fill-black stroke-accent" /> */}
        {text}
      </motion.button>
    )
  }
)

CTAButton.displayName = 'CTAButton'
