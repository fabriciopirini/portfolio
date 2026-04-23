import { readFile } from 'fs/promises'
import path from 'path'

const pages: Record<string, string> = {
  '/': 'llms.txt',
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const pagePath = url.searchParams.get('path') || '/'
  const fileName = pages[pagePath]

  if (!fileName) {
    return new Response('Not found', { status: 404 })
  }

  const filePath = path.join(process.cwd(), 'public', fileName)
  const markdown = await readFile(filePath, 'utf-8')

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown',
      'x-markdown-tokens': String(Math.ceil(markdown.length / 4)),
    },
  })
}
