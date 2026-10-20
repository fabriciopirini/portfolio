import type { Metadata } from 'next'
import type { ProfilePage, WithContext } from 'schema-dts'

import { RESUME } from '@/lib/career-data'
import { person } from '@/lib/person'
import { ACTIVE_VARIANT } from '@/lib/site-config'
import { COPY } from '@/lib/site-copy'

import { ContactLinks } from '../contact-links'
import './resume.css'

export const metadata: Metadata = {
  title: 'Resume - Fabricio Pirini',
  description: COPY.meta.description[ACTIVE_VARIANT],
}

const jsonLd: WithContext<ProfilePage> = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: 'https://fabriciopirini.com/resume',
  mainEntity: {
    ...person,
    alumniOf: RESUME.education.map(({ institution }) => ({ '@type': 'CollegeOrUniversity', name: institution })),
  },
}

export default function ResumePage() {
  return (
    <div className="ledger-page resume">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip" href="#experience">
        Skip to experience
      </a>
      <div className="page">
        <a className="back" href="/">
          ← fabriciopirini.com
        </a>
        <header className="intro">
          <h1>Fabricio Tramontano Pirini</h1>
          <p className="headline">{RESUME.subtitle}</p>
          <p className="support">React, React Native, Expo, and Next.js. Brazil (UTC−3), working with US teams.</p>
          <ContactLinks pdf />
        </header>

        <main>
          <section className="about" aria-labelledby="summary-h">
            <h2 id="summary-h">Summary</h2>
            <p>{RESUME.summary}</p>
          </section>

          <section id="experience" aria-labelledby="experience-h" tabIndex={-1}>
            <h2 id="experience-h">Experience</h2>
            {RESUME.jobs.map(({ id, company, location, periods }) =>
              periods.map(({ role, years, bullets }, index) => (
                // A later role at the same company repeats the company only in print, where it may start a page.
                <article key={`${id}-${index}`} className={index ? 'proof continued' : 'proof'}>
                  <p className="meta">
                    <span className="years">{years}</span>
                    <span className="where">{location}</span>
                  </p>
                  <div className="body">
                    <h3>{company}</h3>
                    <p className="role">{role}</p>
                    <ul>
                      {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))
            )}
          </section>

          <section aria-labelledby="skills-h">
            <h2 id="skills-h">Skills</h2>
            <dl className="skills">
              {RESUME.skills.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="education-h">
            <h2 id="education-h">Education</h2>
            <ol className="ledger">
              {RESUME.education.map(({ institution, location, credential, years }) => (
                <li key={institution}>
                  <span className="years">{years}</span>
                  <span className="org">{institution}</span>
                  <span className="line">
                    {credential}. {location}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </main>

        <footer className="outro" aria-labelledby="contact-h">
          <h2 id="contact-h">Get in touch</h2>
          <ContactLinks pdf />
        </footer>
      </div>
    </div>
  )
}
