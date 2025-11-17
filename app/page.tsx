import { cacheLife } from 'next/cache'
import type { Metadata } from 'next'
import type { Person, WithContext } from 'schema-dts'

import { AboutMe } from '@/components/AboutMe'
import { Hero } from '@/components/Hero'
import { Technology } from '@/components/Technology'
import { WorkExperience } from '@/components/WorkExperience'

const jsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fabricio Tramontano Pirini',
  jobTitle: 'Software Engineer',
  gender: 'male',
  url: 'https://fabriciopirini.com/',
  image: 'https://github.com/fabriciopirini.png',
  email: 'fabricio@fabriciopirini.com',
  sameAs: ['https://www.linkedin.com/in/fabriciopirini/'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Brazil',
  },
}

export const metadata: Metadata = {
  description:
    'Fabricio Tramontano Pirini builds fast systems and platform infrastructure. React, Next.js, automation. Based in Brazil, working with startups and scale-ups.',
  alternates: { canonical: 'https://fabriciopirini.com/' },
}

export default async function Home() {
  'use cache'
  cacheLife('days')

  return (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="mb-3 flex flex-col items-center px-3 md:mb-10 md:px-10 2xl:px-20">
      <Hero />
      <AboutMe />
      <Technology />
      <WorkExperience />
    </div>
  </>
)
