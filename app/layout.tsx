import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter, League_Spartan, Poppins } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import { CSPostHogProvider } from '@/components/Providers'
import { SideMe } from '@/components/SideMe'
import { cn } from '@/lib/utils'
import { AppStoreProvider } from '@/providers/app-store-provider'
import Thumbnail from '@/public/assets/thumbnail.png'

import '@/app/globals.css'

const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-league-spartan' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'], variable: '--font-poppins' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_VERCEL_URL ?? 'https://fabriciopirini.com'),
  title: 'Fabricio Pirini - Senior Web Fullstack Engineer',
  description:
    'Meet Fabricio Pirini, a seasoned Senior Web Fullstack Engineer with over 6 years of experience specializing in the Frontend with React, Next.js, and Typescript.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_VERCEL_URL,
    title: 'Fabricio Pirini - Senior Web Fullstack Engineer',
    description:
      'Meet Fabricio Pirini, a seasoned Senior Web Fullstack Engineer with over 6 years of experience specializing in the Frontend with React, Next.js, and Typescript.',
    siteName: 'Fabricio Pirini',
    images: [
      {
        url: Thumbnail.src,
        width: 1545,
        height: 921,
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={cn(
        leagueSpartan.variable,
        inter.variable,
        poppins.variable,
        'size-full scroll-smooth motion-reduce:scroll-auto'
      )}
      style={{ scrollbarGutter: 'stable' }}
      suppressHydrationWarning
    >
      <CSPostHogProvider>
        <body
          className={cn('relative mx-auto flex min-h-dvh w-full flex-col justify-between pb-4 antialiased lg:pb-8', {
            'debug-screens': process.env.VERCEL_ENV !== 'production',
          })}
        >
          <AppStoreProvider>
            <NavBar />
            <main className="flex grow flex-col">{children}</main>
            <Footer />
            <SideMe />
          </AppStoreProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </CSPostHogProvider>
    </html>
  )
}

export default RootLayout
