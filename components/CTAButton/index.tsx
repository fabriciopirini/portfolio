'use client'

import { useState, type Ref } from 'react'
import { cva } from 'class-variance-authority'
import { AnimatePresence, type HTMLMotionProps, m } from 'framer-motion'
import { CheckCircle2Icon, CloudDownloadIcon } from 'lucide-react'
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
    scale: 0.96,
    transition: {
      duration: 0.2,
    },
  },
  variants: {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  },
} satisfies HTMLMotionProps<'a'>

type CTAButtonProps = {
  id?: string
  text: string
  type?: 'primary' | 'secondary'
  external?: boolean
  href?: string
  as?: 'button' | 'link'
  showDownloadFeedback?: boolean
  ref?: Ref<HTMLAnchorElement | HTMLButtonElement>
}

const iconTransition = { duration: 0.15 }
const iconVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
}

export const CTAButton = ({
  type = 'primary',
  external = false,
  as,
  showDownloadFeedback = false,
  ref,
  ...props
}: CTAButtonProps) => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const posthog = usePostHog()

  const { id, text, href, ...domProps } = props

  if (as === 'link') {
    return (
      <m.a
        ref={ref as Ref<HTMLAnchorElement>}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        href={href}
        className={cn(CTAButtonStyles({ intent: type, external }), isAnimationRunning && 'animate-none')}
        onClick={() => {
          setIsAnimationRunning(true)
          posthog?.capture(id ?? 'cta_button_click')
          if (showDownloadFeedback) {
            setDownloaded(true)
            setTimeout(() => setDownloaded(false), 2500)
          }
        }}
        onAnimationEnd={() => setIsAnimationRunning(false)}
        id={id}
        {...animation}
        {...domProps}
      >
        <AnimatePresence mode="wait" initial={false}>
          {downloaded ? (
            <m.span key="check" className="inline-flex" transition={iconTransition} {...iconVariants}>
              <CheckCircle2Icon className="pointer-events-none inline-block size-5 md:size-7" />
            </m.span>
          ) : (
            <m.span key="download" className="inline-flex" transition={iconTransition} {...iconVariants}>
              <CloudDownloadIcon className="pointer-events-none inline-block size-5 md:size-7" />
            </m.span>
          )}
        </AnimatePresence>
        {showDownloadFeedback && downloaded ? 'Saved!' : text}
      </m.a>
    )
  }

  return (
    <m.button
      ref={ref as Ref<HTMLButtonElement>}
      className={cn(CTAButtonStyles({ intent: type }), isAnimationRunning && 'animate-none')}
      onClick={() => {
        setIsAnimationRunning(true)
        posthog?.capture(id ?? 'cta_button_click')
      }}
      onAnimationEnd={() => setIsAnimationRunning(false)}
      id={id}
      {...animation}
      {...domProps}
    >
      <MailIconFilled className="pointer-events-none size-7 fill-black" />
      {/* <MailIcon size={28} className="inline-block size-7 min-h-7 min-w-7 fill-black stroke-accent" /> */}
      {text}
    </m.button>
  )
}

CTAButton.displayName = 'CTAButton'
