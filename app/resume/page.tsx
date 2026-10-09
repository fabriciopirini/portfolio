import type { Metadata } from 'next'
import { cacheLife } from 'next/cache'
import { ACTIVE_VARIANT } from '@/lib/site-config'
import { COPY } from '@/lib/site-copy'
import { ResumeContent } from './variants/ResumeContent'

export const metadata: Metadata = {
  title: 'Resume - Fabricio Pirini',
  description: COPY.meta.description[ACTIVE_VARIANT],
}

export default async function ResumePage() {
  'use cache'
  cacheLife('days')

  return <ResumeContent variant={ACTIVE_VARIANT} />
}
