import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const accept = request.headers.get('accept') || ''

  if (!accept.includes('text/markdown')) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/api/markdown'
  url.searchParams.set('path', request.nextUrl.pathname)

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/', '/(resume|blog|shop)/:path*'],
}
