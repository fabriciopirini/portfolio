import { readFile } from 'fs/promises'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'llms.txt')
  const markdown = await readFile(filePath, 'utf-8')

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown',
      Vary: 'Accept',
      'x-markdown-tokens': String(Math.ceil(markdown.length / 4)),
    },
  })
}
