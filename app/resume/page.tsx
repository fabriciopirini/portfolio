import type { Metadata } from 'next'
import { ACTIVE_VARIANT } from '@/lib/site-config'
import { COPY } from '@/lib/site-copy'
import { ResumeContent } from './variants/ResumeContent'

export const metadata: Metadata = {
  title: 'Resume - Fabricio Pirini',
  description: COPY.meta.description[ACTIVE_VARIANT],
}

export default function ResumePage() {
  return <ResumeContent variant={ACTIVE_VARIANT} />
}
