import { ACTIVE_VARIANT } from '@/lib/site-config'
import { CAREER } from '@/lib/career-data'

import { markdownResponse } from '../markdown-response'

export function GET() {
  return markdownResponse(
    [
      '# Resume — Fabricio Pirini',
      '',
      `> ${CAREER.subtitle[ACTIVE_VARIANT]} specializing in React, Next.js, and TypeScript.`,
      '',
      'For the full interactive resume, visit [fabriciopirini.com/resume](https://fabriciopirini.com/resume).',
      '',
      '## Download',
      '',
      'PDF version: [fabriciopirini.com/api/resume](https://fabriciopirini.com/api/resume)',
    ].join('\n')
  )
}
