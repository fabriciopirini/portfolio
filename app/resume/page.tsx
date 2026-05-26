import type { Metadata } from 'next'
import { cacheLife } from 'next/cache'
import { ACTIVE_VARIANT } from '@/lib/site-config'
import { COPY } from '@/lib/site-copy'
import { calculateYearsOfExperience } from '@/lib/utils'
import { getCachedYearsOfExperience } from '@/lib/server-utils'
import { ResumeContent } from './variants/ResumeContent'

export const metadata: Metadata = {
  title: 'Resume - Fabricio Pirini',
  description: COPY.meta.description[ACTIVE_VARIANT](calculateYearsOfExperience()),
}

export default async function ResumePage() {
  'use cache'
  cacheLife('days')

  const yearsOfExperience = await getCachedYearsOfExperience()

  return <ResumeContent variant={ACTIVE_VARIANT} yearsOfExperience={yearsOfExperience} />
}
