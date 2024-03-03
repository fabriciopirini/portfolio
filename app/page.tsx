'use client'

import type { Person, WithContext } from 'schema-dts'

import { AboutMe } from '@/components/AboutMe'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { SocialsSidebar } from '@/components/SocialsSidebar'
import { WorkExperience } from '@/components/WorkExperience'

const jsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fabricio Tramontano Pirini',
  jobTitle: 'Lead Software Engineer',
  gender: 'male',
  url: 'https://fabriciopirini.com/',
  image: 'https://github.com/fabriciopirini.png',
  email: 'me@fabriciopirini.com',
  sameAs: ['https://www.linkedin.com/in/fabriciopirini/'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Norway',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Norsk Gjenvinning',
  },
}

const Home = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="mb-3 flex min-h-screen flex-col items-center md:mb-10">
      {/* <NavBar /> */}
      <SocialsSidebar />
      <Hero />
      <div className="md:px-10">
        <AboutMe />
        <Skills />
        <WorkExperience />
      </div>
    </div>
  </>
)

export default Home
