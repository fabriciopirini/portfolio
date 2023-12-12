import type { Metadata } from 'next'

import { AboutMe } from '@/components/AboutMe'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { SocialsSidebar } from '@/components/SocialsSidebar'
import Thumbnail from '@/public/assets/thumbnail.png'

export const metadata: Metadata = {
  title: 'Fabricio Pirini - Senior Frontend Engineer & Web Development Expert in Norway',
  description:
    'Meet Fabricio Pirini, a seasoned Senior Frontend Engineer with over 6 years of experience specializing in React, Next.js, and Typescript, currently leading front-end operations at Norsk Gjenvinning in Norway.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fabriciopirini.com/',
    title: 'Fabricio Pirini - Senior Frontend Engineer & Web Development Expert in Norway',
    description:
      'Meet Fabricio Pirini, a seasoned Senior Frontend Engineer with over 6 years of experience specializing in React, Next.js, and Typescript, currently leading front-end operations at Norsk Gjenvinning in Norway.',
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
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* <NavBar /> */}
      <SocialsSidebar />
      <Hero />
      <AboutMe />
      <Skills />
    </main>
  )
}
