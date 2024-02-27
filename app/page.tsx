'use client'

import { AboutMe } from '@/components/AboutMe'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { SocialsSidebar } from '@/components/SocialsSidebar'
import { WorkExperience } from '@/components/WorkExperience'

const Home = () => {
  return (
    <main className="mb-3 flex min-h-screen flex-col items-center md:mb-10">
      {/* <NavBar /> */}
      <SocialsSidebar />
      <Hero />
      <div className="md:px-10">
        <AboutMe />
        <Skills />
        <WorkExperience />
      </div>
    </main>
  )
}

export default Home
