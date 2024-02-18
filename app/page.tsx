'use client'

import { AboutMe } from '@/components/AboutMe'
import { GoogleGeminiEffect } from '@/components/GoogleGeminiEffect'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { SocialsSidebar } from '@/components/SocialsSidebar'
import { WorkExperience } from '@/components/WorkExperience'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()

  const pathLengths = [
    useTransform(scrollYProgress, [0, 1], [0.1, 1]),
    useTransform(scrollYProgress, [0, 1], [0.075, 1]),
    useTransform(scrollYProgress, [0, 1], [0.05, 1]),
    useTransform(scrollYProgress, [0, 1], [0.025, 1]),
    useTransform(scrollYProgress, [0, 1], [0, 1]),
  ]

  return (
    <main ref={ref} className="flex min-h-screen flex-col items-center mb-3 md:mb-10">
      {/* <NavBar /> */}
      <SocialsSidebar />
      <Hero />
      <div className="md:px-10">
        <AboutMe />
        <Skills />
        <WorkExperience />
      </div>
      {/* <div className="fixed w-screen h-screen inset-0 rotate-90 lg:rotate-0 lg:container lg:w-full lg:h-full overflow-hidden">
        <GoogleGeminiEffect pathLengths={pathLengths} />
      </div> */}
    </main>
  )
}
