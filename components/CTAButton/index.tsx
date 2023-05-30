'use client'

import { useState } from 'react'
import { cva } from 'class-variance-authority'
import { ExternalLinkIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const CTAButtonStyles = cva(
  'rounded-xl border-4 border-accent bg-inherit py-3 sm:py-4 text-center px-6 sm:px-10 text-primary transition duration-500  motion-safe:hover:scale-105 cursor-pointer',
  {
    variants: {
      intent: {
        primary: 'bg-accent text-primary-background',
        secondary: 'text-accent hover:bg-accent hover:text-primary-background',
      },
      external: {
        true: 'flex items-baseline justify-center',
      },
    },
  }
)

type CTAButtonProps = {
  type?: 'primary' | 'secondary'
  text: string
  external?: boolean
  href?: string
}

export const CTAButton = ({ type = 'primary', text, external = false, href }: CTAButtonProps) => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false)

  return (
    <a
      className={cn(CTAButtonStyles({ intent: type }), isAnimationRunning && 'animate-none')}
      onClick={() => setIsAnimationRunning(true)}
      onAnimationEnd={() => setIsAnimationRunning(false)}
      {...(external && { target: '_blank', rel: 'noopener noreferrer', href })}
    >
      {text}
      {external && <ExternalLinkIcon size={20} className="ml-2 inline-block" />}
    </a>
  )
}
