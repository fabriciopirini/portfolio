import type { Person } from 'schema-dts'

/** The homepage's JSON-LD subject; the résumé's ProfilePage names it as its main entity. */
export const person = {
  '@type': 'Person',
  name: 'Fabricio Tramontano Pirini',
  jobTitle: 'Senior Frontend Engineer',
  gender: 'male',
  url: 'https://fabriciopirini.com/',
  email: 'fabricio@fabriciopirini.com',
  description: 'Senior Frontend Engineer building fintech products for web and mobile.',
  sameAs: ['https://www.linkedin.com/in/fabriciopirini/', 'https://github.com/fabriciopirini'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Brazil',
  },
} satisfies Person
