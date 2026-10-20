import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

import { COPY } from '@/lib/site-copy'
import { ACTIVE_VARIANT } from '@/lib/site-config'
import Thumbnail from '@/public/assets/thumbnail.jpg'

import '@/app/ledger.css'

export function generateMetadata(): Metadata {
  const title = COPY.meta.title[ACTIVE_VARIANT]
  const description = COPY.meta.description[ACTIVE_VARIANT]

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_VERCEL_URL ?? 'https://fabriciopirini.com'),
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: process.env.NEXT_PUBLIC_VERCEL_URL,
      title,
      description,
      siteName: 'Fabricio Pirini',
      images: [
        {
          url: Thumbnail.src,
          width: 1200,
          height: 630,
          alt: 'Thumbnail of Fabricio Pirini website',
        },
      ],
    },
    icons: [
      {
        href: '/favicon.ico',
        sizes: '32x32',
        type: 'image/png',
        url: '/favicon.ico',
      },
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
