import { League_Spartan } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import '@/app/globals.css'

const inter = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabricio Pirini 👋',
  description: 'Welcome to Fabricio Pirini portifolio website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
