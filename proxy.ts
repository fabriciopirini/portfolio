import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const acceptHeader = request.headers.get('accept') ?? ''
  const wantsMarkdown = acceptHeader.includes('text/markdown')
  const pathname = request.nextUrl.pathname

  console.log('[proxy] pathname:', pathname, 'wantsMarkdown:', wantsMarkdown, 'accept:', acceptHeader)

  if (wantsMarkdown) {
    const url = request.nextUrl.clone()
    url.pathname = `/api/serve-md${url.pathname}`
    console.log('[proxy] rewriting to:', url.pathname)
    return NextResponse.rewrite(url)
  }

  console.log('[proxy] not rewriting, calling NextResponse.next()')
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
}
