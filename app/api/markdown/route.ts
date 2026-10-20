import { readFileSync } from 'fs'
import path from 'path'

import { markdownResponse } from './markdown-response'

export function GET() {
  return markdownResponse(readFileSync(path.join(process.cwd(), 'public', 'llms.txt'), 'utf-8'))
}
