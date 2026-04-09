import type { Metadata } from 'next'
import { cacheLife } from 'next/cache'
import { ACTIVE_VARIANT } from '@/lib/site-config'
import { getCachedYearsOfExperience } from '@/lib/server-utils'
import { ResumeContent } from './variants/ResumeContent'

export const metadata: Metadata = {
  title: 'Resume - Fabricio Pirini',
  description:
    'Professional resume of Fabricio Pirini, Senior Web Fullstack Engineer specializing in React, Next.js, and TypeScript.',
}

export default async function ResumePage() {
  'use cache'
  cacheLife('days')

  const yearsOfExperience = await getCachedYearsOfExperience()

  return <ResumeContent variant={ACTIVE_VARIANT} yearsOfExperience={yearsOfExperience} />
}
