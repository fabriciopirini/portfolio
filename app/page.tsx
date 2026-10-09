import { cacheLife } from 'next/cache'
import type { Metadata } from 'next'
import type { Person, WithContext } from 'schema-dts'

import './quiet-ledger.css'

const jsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
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
}

export const metadata: Metadata = {
  description: 'Senior Frontend Engineer building fintech products for web and mobile. Building since 2017.',
  alternates: { canonical: 'https://fabriciopirini.com/' },
}

const chatLine = "Building something in fintech? I'm happy to chat."

const ContactLinks = () => (
  <>
    <p className="invite">{chatLine}</p>
    <ul className="contact" aria-label="Contact">
      <li className="email">
        <a href="mailto:fabricio@fabriciopirini.com">fabricio@fabriciopirini.com</a>
      </li>
      <li>
        <a href="/resume">Résumé</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/fabriciopirini/">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/fabriciopirini">GitHub</a>
      </li>
    </ul>
  </>
)

export default async function Home() {
  'use cache'
  cacheLife('days')

  return (
    <div className="ledger-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip" href="#work">
        Skip to selected work
      </a>
      <div className="page">
        <header className="intro">
          <h1>Fabricio Pirini</h1>
          <p className="headline">Senior Frontend Engineer building fintech products for web and mobile.</p>
          <p className="support">React, React Native, Expo, and Next.js. Brazil (UTC−3), working with US teams.</p>
          <ContactLinks />
          <p className="now">
            <span className="label">
              Now · <time dateTime="2026-10">October 2026</time>
            </span>
            Building a pre-launch US consumer fintech&apos;s Expo and React Native app for iOS, Android, and web, plus
            its Next.js admin, from the first commit.
          </p>
        </header>

        <main>
          <section id="work" className="work" aria-labelledby="work-h" tabIndex={-1}>
            <h2 id="work-h">Selected work</h2>

            <article className="proof" aria-labelledby="p1">
              <p className="meta">
                <span className="org">Pre-launch US consumer fintech</span> <span className="years">2026–now</span>
              </p>
              <div className="body">
                <h3 id="p1">One codebase for iOS, Android, and web, from the first commit</h3>
                <dl>
                  <dt>What I did</dt>
                  <dd>
                    Set up the TypeScript monorepo with one Expo and React Native app for iOS, Android, and web, plus a
                    Next.js admin. Built the theme tokens, with a CI check that fails when the design spec drifts from
                    the theme.
                  </dd>
                  <dt>Result</dt>
                  <dd>
                    Every pull request is gated on{' '}
                    <strong>lint, type checks, unit tests, and Playwright end-to-end runs</strong> at desktop and mobile
                    viewports.
                  </dd>
                </dl>
                <ul className="tags" aria-label="Tools">
                  <li>Expo</li>
                  <li>React Native</li>
                  <li>Next.js</li>
                  <li>Playwright</li>
                </ul>
              </div>
            </article>

            <article className="proof" aria-labelledby="p2">
              <p className="meta">
                <span className="org">Kraken</span> <span className="years">2024–2026</span>
              </p>
              <div className="body">
                <h3 id="p2">In-app support portal across three React Native apps</h3>
                <dl>
                  <dt>What I did</dt>
                  <dd>
                    Built it from scratch with tier-aware contact options, VIP escalation, and live queue visibility.
                    Owned it end to end: frontend, backend integration, and rollout.
                  </dd>
                  <dt>Result</dt>
                  <dd>
                    Shipped in <strong>Kraken, Kraken Pro, and Krak</strong>.
                  </dd>
                </dl>
                <ul className="tags" aria-label="Tools">
                  <li>React Native</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </article>

            <article className="proof" aria-labelledby="p3">
              <p className="meta">
                <span className="org">Kraken</span> <span className="years">2024–2026</span>
              </p>
              <div className="body">
                <h3 id="p3">Financial data tables, visual regression tests, and accessibility fixes</h3>
                <dl>
                  <dt>What I did</dt>
                  <dd>
                    Built <strong>15+ financial data tables</strong> and the Playwright visual regression infrastructure
                    from scratch. Fixed <strong>25+ accessibility issues</strong>: keyboard navigation, focus
                    management, and ARIA attributes.
                  </dd>
                  <dt>Result</dt>
                  <dd>
                    Visual tests dropped from <strong>12 minutes to under a minute</strong>, and{' '}
                    <strong>coverage tripled</strong> across the component library.
                  </dd>
                </dl>
                <ul className="tags" aria-label="Tools">
                  <li>Financial tables</li>
                  <li>Playwright</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            </article>
          </section>

          <section id="experience" className="experience" aria-labelledby="exp-h">
            <h2 id="exp-h">
              Experience <span className="since">Building since 2017</span>
            </h2>
            <ol className="ledger">
              <li>
                <span className="years">2026–now</span>
                <span className="org">Pre-launch US consumer fintech</span>
                <span className="line">Expo, React Native, and Next.js from the first commit.</span>
              </li>
              <li>
                <span className="years">2024–2026</span>
                <span className="org">Kraken</span>
                <span className="line">Owned the design system and shipped to 4 platforms.</span>
              </li>
              <li>
                <span className="years">2022–2024</span>
                <span className="org">Norsk Gjenvinning</span>
                <span className="line">
                  Tech lead for 5 engineers. Built 5 Next.js storefronts and led WCAG 2.0 AA compliance across 70+
                  European companies.
                </span>
              </li>
              <li>
                <span className="years">2020–2022</span>
                <span className="org">Oda</span>
                <span className="line">
                  Built the A/B experimentation program from scratch and ran 2 to 4 experiments a month.
                </span>
              </li>
              <li>
                <span className="years">2018–2020</span>
                <span className="org">Sportradar</span>
                <span className="line">
                  Rebuilt the crawler platform as 5 microservices, cutting runtime by 120x and resource usage by 10x.
                </span>
              </li>
              <li>
                <span className="years">2017–2018</span>
                <span className="org">Samsung R&D Center</span>
                <span className="line">Intern. Built a WCAG 2.0 AA web accessibility portal.</span>
              </li>
            </ol>
          </section>

          <section id="about" className="about" aria-labelledby="about-h">
            <h2 id="about-h">About</h2>
            <p>
              I moved to Norway straight after graduating for my first full-time engineering job, stayed six years, and
              now work from Brazil.
            </p>
          </section>
        </main>

        <footer className="outro" aria-labelledby="contact-h">
          <h2 id="contact-h">Get in touch</h2>
          <ContactLinks />
        </footer>
      </div>
    </div>
  )
}
