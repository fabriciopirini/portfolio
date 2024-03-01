import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'

import { ShopNavbar } from '@/components/NavBar/shop'
import { CSPostHogProvider } from '@/components/Providers'
import Thumbnail from '@/public/assets/thumbnail.png'

import '@/app/globals.css'

const inter = League_Spartan({ subsets: ['latin'] })

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
        width: 400,
        height: 800,
        alt: 'Profile Picture',
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
    <CSPostHogProvider>
      <ShopNavbar />
      <main>{children}</main>
      <Analytics />
      <SpeedInsights />
    </CSPostHogProvider>
  )
}

export default RootLayout
