import { readFile } from 'fs/promises'
import path from 'path'

import { ACTIVE_VARIANT } from '@/lib/site-config'
import { CAREER } from '@/lib/career-data'

const pageMarkdown: Record<string, () => Promise<string>> = {
  '/': async () => {
    const filePath = path.join(process.cwd(), 'public', 'llms.txt')
    return readFile(filePath, 'utf-8')
  },
  '/resume': async () => {
    return [
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
  },
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const pagePath = slug ? `/${slug.join('/')}` : '/'
  const generator = pageMarkdown[pagePath]

  if (!generator) {
    return new Response('Not found', { status: 404 })
  }

  const markdown = await generator()

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown',
      Vary: 'Accept',
      'x-markdown-tokens': String(Math.ceil(markdown.length / 4)),
    },
  })
}
