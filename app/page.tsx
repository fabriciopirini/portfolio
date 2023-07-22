import { AboutMe } from '@/components/AboutMe'
import { Hero } from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { Skills } from '@/components/Skills'
import { SocialsSidebar } from '@/components/SocialsSidebar'

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
