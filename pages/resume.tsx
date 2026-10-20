import type { PageConfig } from 'next'
import Head from 'next/head'
import type { ProfilePage, WithContext } from 'schema-dts'

import { ContactLinks } from '@/app/contact-links'
import { Paper } from '@/app/resume/paper'
import { RESUME } from '@/lib/career-data'
import { person } from '@/lib/person'
import { ACTIVE_VARIANT } from '@/lib/site-config'
import { COPY } from '@/lib/site-copy'

// Ships no framework JavaScript; tests/e2e/performance-budget.spec.ts fails if the flag stops working.
// pages/_document.tsx inlines app/resume/resume.css on this page only.
export const config: PageConfig = { unstable_runtimeJS: false }

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Resume - Fabricio Pirini</title>
        <meta name="description" content={COPY.meta.description[ACTIVE_VARIANT]} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <div className="ledger-page resume">
        <a className="skip" href="#experience">
          Skip to experience
        </a>
        <div className="page">
          <header className="intro">
            <div className="top">
              <h1>Résumé</h1>
              <nav aria-label="Résumé">
                <a href="/">Home</a>
                <a className="pdf" href="/api/resume">
                  Download PDF
                </a>
              </nav>
            </div>
            <p className="support">Fabricio Tramontano Pirini · {RESUME.subtitle} · Brazil (UTC−3)</p>
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
                  // A later role at the same company shows only its own years and title.
                  <article key={`${id}-${index}`} className={index ? 'proof continued' : 'proof'}>
                    <p className="meta">
                      <span className="years">{years}</span>
                      {!index && <span>{location}</span>}
                    </p>
                    <div className="body">
                      {!index && <h3>{company}</h3>}
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
      <Paper />
    </>
  )
}
