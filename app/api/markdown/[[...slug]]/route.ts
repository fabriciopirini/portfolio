import { readFile } from 'fs/promises'
import path from 'path'

const pageMarkdown: Record<string, () => Promise<string>> = {
  '/': async () => {
    const filePath = path.join(process.cwd(), 'public', 'llms.txt')
    return readFile(filePath, 'utf-8')
  },
  '/resume': async () => {
    return [
      '# Resume — Fabricio Pirini',
      '',
      '> Senior Web Fullstack Engineer specializing in React, Next.js, and TypeScript.',
      '',
      'For the full interactive resume, visit [fabriciopirini.com/resume](https://fabriciopirini.com/resume).',
      '',
      '## Download',
      '',
      'PDF version: [fabriciopirini.com/api/resume](https://fabriciopirini.com/api/resume)',
    ].join('\n')
  },
  '/shop': async () => {
    return [
      "# Fabricio's Shop",
      '',
      '> Services and offerings from Fabricio Pirini.',
      '',
      'For the full shop experience, visit [fabriciopirini.com/shop](https://fabriciopirini.com/shop).',
      '',
      '## Products',
      '',
      "- **Performance Audit** ($100) — Find what's slow before your users do.",
      '- **Core Web Vitals** ($200) — LCP, CLS, INP fixed properly, not hacked green.',
      '- **Design System Review** ($300) — Are your components consistent, accessible, and actually used?',
      '- **Accessibility Audit** ($400) — WCAG compliance that goes beyond checkbox theater.',
      '- **Full Frontend Overhaul** ($1,000) — A complete rebuild of your frontend with modern tooling.',
      '',
      'Contact: fabricio@fabriciopirini.com',
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
