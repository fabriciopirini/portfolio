import { createLucideIcon, Globe, Mail } from 'lucide-react'

import { RESUME } from '@/lib/career-data'

// lucide-react 1.x dropped brand icons; these are its former LinkedIn and GitHub glyphs.
const Linkedin = createLucideIcon('linkedin', [
  ['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z', key: 'a' }],
  ['rect', { width: '4', height: '12', x: '2', y: '9', key: 'b' }],
  ['circle', { cx: '4', cy: '4', r: '2', key: 'c' }],
])
const Github = createLucideIcon('github', [
  [
    'path',
    {
      d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
      key: 'a',
    },
  ],
  ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: 'b' }],
])

const links = [
  { href: 'mailto:fabricio@fabriciopirini.com', Icon: Mail, label: 'fabricio@fabriciopirini.com' },
  { href: 'https://fabriciopirini.com', Icon: Globe, label: 'fabriciopirini.com' },
  { href: 'https://linkedin.com/in/fabriciopirini', Icon: Linkedin, label: 'fabriciopirini' },
  { href: 'https://github.com/fabriciopirini', Icon: Github, label: 'fabriciopirini' },
]

/** The printed résumé, which the PDF workflow captures; screens never show it. */
export const Paper = () => (
  <div className="paper">
    <header>
      <h1>Fabricio Tramontano Pirini</h1>
      <p className="subtitle caps">{RESUME.subtitle}</p>
      <p className="zone">Brazil (UTC -3)</p>
      <p className="links">
        {links.map(({ href, Icon, label }) => (
          <a key={href} href={href}>
            <Icon />
            {label}
          </a>
        ))}
      </p>
    </header>

    <p className="summary">{RESUME.summary}</p>

    <section>
      <h2>
        <span>Tec</span>hnical Skills
      </h2>
      <div className="skills">
        {RESUME.skills.map(({ label, value }) => (
          <p key={label}>
            <b>{label}:</b> {value}
          </p>
        ))}
      </div>
    </section>

    <section>
      <h2>
        <span>Prof</span>essional Experience
      </h2>
      {RESUME.jobs.map(({ id, company, location, periods }) => (
        <div key={id} className="company">
          {periods.map(({ role, start, end, bullets }) => (
            <div key={role} className="entry">
              <div className="heading">
                <div>
                  <h3>{company}</h3>
                  <p className="caps">{role}</p>
                </div>
                <div className="when">
                  <p className="where">{location}</p>
                  <p>
                    {start} - {end}
                  </p>
                </div>
              </div>
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>

    <section className="education">
      <h2>
        <span>Edu</span>cation
      </h2>
      {RESUME.education.map(({ institution, location, credential, start, end }) => (
        <div key={institution} className="entry heading">
          <div>
            <h3>{institution}</h3>
            <p className="caps">{credential}</p>
          </div>
          <div className="when">
            <p className="where">{location}</p>
            <p>
              {start} - {end}
            </p>
          </div>
        </div>
      ))}
    </section>
  </div>
)
