import { Analytics } from '@vercel/analytics/react'
import { League_Spartan } from 'next/font/google'

import { HeroPattern } from '@/components/HeroPattern'
import { NavBar } from '@/components/NavBar'

import '@/app/globals.css'

const inter = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabricio Pirini 👋',
  description: 'Welcome to Fabricio Pirini portifolio website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden ${
          process.env.VERCEL_ENV === 'production' ? '' : 'debug-screens'
        }`}
      >
        {/* <NavBar /> */}
        {children}
        {/* <HeroPattern /> */}
        <Analytics />
      </body>
    </html>
  )
}
