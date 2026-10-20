import { readFileSync } from 'fs'
import { join } from 'path'

import { Head, Html, Main, NextScript, type DocumentProps } from 'next/document'

import { COPY } from '@/lib/site-copy'
import { ACTIVE_VARIANT } from '@/lib/site-config'
import Thumbnail from '@/public/assets/thumbnail.jpg'

// Read once at build, when the pages prerender. The App Router's 404 imports the same ledger.css.
const ledger = readFileSync(join(process.cwd(), 'app/ledger.css'), 'utf8')
const resume = readFileSync(join(process.cwd(), 'app/resume/resume.css'), 'utf8')

// The link preview both pages share; X reads og:* where no twitter:* tag overrides it.
const openGraph = {
  'og:title': COPY.meta.title[ACTIVE_VARIANT],
  'og:description': COPY.meta.description[ACTIVE_VARIANT],
  'og:url': process.env.NEXT_PUBLIC_VERCEL_URL,
  'og:site_name': 'Fabricio Pirini',
  'og:locale': 'en_US',
  'og:image': new URL(Thumbnail.src, process.env.NEXT_PUBLIC_VERCEL_URL ?? 'https://fabriciopirini.com').href,
  'og:image:width': '1200',
  'og:image:height': '630',
  'og:image:alt': 'Thumbnail of Fabricio Pirini website',
  'og:type': 'website',
}

// Chromium prerenders the other page once its link is hovered for 10ms (desktop) or on screen for 50ms (mobile).
const speculationRules = JSON.stringify({
  prerender: [{ where: { href_matches: ['/', '/resume'] }, eagerness: 'eager' }],
})

// Vercel's scripts wait until a prerendered page is shown, so a prerender nobody opens never counts as a pageview.
const vercelScripts = `function load() {
  for (const src of ['/_vercel/insights/script.js', '/_vercel/speed-insights/script.js'])
    document.body.append(Object.assign(document.createElement('script'), { src }))
}
document.prerendering ? document.addEventListener('prerenderingchange', load, { once: true }) : load()`

/** `/` and `/resume`: inline CSS, no framework JavaScript (each page sets `unstable_runtimeJS: false`), Vercel's two scripts. */
export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: ledger }} />
        {__NEXT_DATA__.page === '/resume' && <style dangerouslySetInnerHTML={{ __html: resume }} />}
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        {Object.entries(openGraph).map(
          ([property, content]) => content && <meta key={property} property={property} content={content} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script type="speculationrules" dangerouslySetInnerHTML={{ __html: speculationRules }} />
        <script dangerouslySetInnerHTML={{ __html: vercelScripts }} />
      </body>
    </Html>
  )
}
