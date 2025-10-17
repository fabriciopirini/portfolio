'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  throw new Error('NEXT_PUBLIC_POSTHOG_KEY is not defined')
}

export const CSPostHogProvider = ({ children }: { children: React.ReactNode }) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
