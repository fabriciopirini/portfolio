'use client'

import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  throw new Error('NEXT_PUBLIC_POSTHOG_KEY is not defined')
}

export const CSPostHogProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PostHogProvider client={posthog}>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </PostHogProvider>
  )
}
