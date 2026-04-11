import { Download, Github, Globe, Linkedin, Mail } from 'lucide-react'
import Script from 'next/script'
import { cn } from '@/lib/utils'
import { CAREER } from '@/lib/career-data'
import type { SiteVariant } from '@/lib/site-config'
import styles from '../resume.module.css'

interface ResumeContentProps {
  variant: SiteVariant
  yearsOfExperience: number
}

export function ResumeContent({ variant, yearsOfExperience }: ResumeContentProps) {
  const skills = CAREER.skills[variant]
  const subtitle = CAREER.subtitle[variant]
  const summary = CAREER.summary[variant](yearsOfExperience)
  const jobOrder = CAREER.jobOrder[variant]
  const jobs = [...CAREER.jobs].sort((a, b) => jobOrder.indexOf(a.id) - jobOrder.indexOf(b.id))

  return (
    <div
      className={cn(
        styles.resumeContainer,
        'relative m-4 flex max-w-full flex-col gap-4 text-pretty border-2 border-white bg-gray-100 px-4 pb-10 pt-14 font-source-sans-3 text-base text-gray-700 md:mx-auto md:max-w-[210mm] md:p-16 print:m-0 print:bg-white print:p-0 print:text-black'
      )}
    >
      {/* Download PDF */}
      <a
        href="/api/resume"
        target="_blank"
        rel="noopener"
        className="absolute right-3 top-3 flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 print:hidden"
      >
        <Download className="size-3.5" />
        Download PDF
      </a>

      {/* Header */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-roboto text-3xl font-bold leading-none text-gray-900 md:text-[40px]">
          Fabricio Tramontano Pirini
        </h1>
        <p
          className={`text-sm font-semibold tracking-wide ${styles.smallCaps}`}
          style={{ color: 'var(--color-accent)' }}
        >
          {subtitle}
        </p>
        <p className="text-sm font-medium italic text-gray-400">Brazil (UTC -3)</p>
        <div className="mt-3 flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-0 text-xs text-gray-700">
          <a
            href="mailto:fabricio@fabriciopirini.com"
            className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 active:text-blue-600"
          >
            <Mail className="size-3.5" />
            fabricio@fabriciopirini.com
          </a>
          <a
            href="https://fabriciopirini.com"
            target="_blank"
            rel="noopener"
            aria-label="Checkout my website"
            className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 active:text-blue-600"
          >
            <Globe className="size-3.5" />
            fabriciopirini.com
          </a>
          <a
            href="https://linkedin.com/in/fabriciopirini"
            target="_blank"
            rel="noopener"
            aria-label="Checkout my LinkedIn profile"
            className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 active:text-blue-600"
          >
            <Linkedin className="size-3.5" />
            fabriciopirini
          </a>
          <a
            href="https://github.com/fabriciopirini"
            target="_blank"
            rel="noopener"
            aria-label="Checkout my Github profile"
            className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 active:text-blue-600"
          >
            <Github className="size-3.5" />
            fabriciopirini
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="text-base leading-relaxed text-gray-700 print:text-sm">
        <p>{summary}</p>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="mb-3 font-roboto text-xl font-black text-gray-900">
          <span style={{ color: 'var(--color-accent)' }}>Tec</span>hnical Skills
        </h2>
        <div className="space-y-1 text-base text-gray-700 print:text-sm">
          {skills.map((row) => (
            <p key={row.label}>
              <span className="font-bold">{row.label}:</span> {row.value}
            </p>
          ))}
        </div>
      </div>

      {/* Professional Experience */}
      <section className="mt-8 print:mt-0 [&_li::marker]:text-[0.7em]">
        <h2 className="mb-3 font-roboto text-xl font-black text-gray-900">
          <span style={{ color: 'var(--color-accent)' }}>Prof</span>essional Experience
        </h2>
        <div className="divide-y-[0.5px] divide-gray-300 print:divide-y-0">
          {jobs.map((company) => {
            const isMultiRole = company.periods.length > 1

            return (
              <div
                key={company.id}
                className={cn('flex flex-col gap-2 py-4 first:pt-0 last:pb-0', {
                  'divide-y-[0.5px] divide-gray-200 print:divide-y-0': isMultiRole,
                })}
              >
                {company.periods.map((period, periodIndex) => {
                  const bullets =
                    period.bullets[variant] ?? period.bullets['default'] ?? []
                  const showCompanyHeader = !isMultiRole || periodIndex === 0

                  return (
                    <div
                      key={`${company.id}-${periodIndex}`}
                      data-section="job"
                      className={cn('flex flex-col gap-2', {
                        'pt-2 first:pt-0': isMultiRole,
                      })}
                    >
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex flex-col text-gray-700">
                          {showCompanyHeader && (
                            <h3 className="font-black text-gray-900">{company.company}</h3>
                          )}
                          <p className={`text-sm font-medium ${styles.smallCaps}`}>{period.role}</p>
                        </div>
                        <div className="flex flex-col text-sm sm:text-right">
                          {showCompanyHeader && (
                            <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                              {company.location}
                            </p>
                          )}
                          <p className="text-gray-600">
                            {period.start} - {period.end}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-base text-gray-700 print:text-sm">
                        {bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </section>

      {/* Education */}
      <div className="mt-8 print:mt-0">
        <h2 className="mb-3 font-roboto text-xl font-black text-gray-900">
          <span style={{ color: 'var(--color-accent)' }}>Edu</span>cation
        </h2>
        <div className="divide-y-[0.5px] divide-gray-300 text-base text-gray-700 print:divide-y-0 print:text-sm">
          <div className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-bold text-gray-900">Universidade Federal de Itajuba - UNIFEI</h3>
              <p className={`text-sm font-medium ${styles.smallCaps}`}>
                Bachelor of Science in Computer Engineering
              </p>
            </div>
            <div className="flex flex-col text-sm sm:text-right">
              <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                Itabira, Brazil
              </p>
              <p className="text-gray-600">2011 - 2018</p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-bold text-gray-900">University of Toronto</h3>
              <p className={`text-sm font-medium ${styles.smallCaps}`}>
                Exchange Student, Electrical and Computer Engineering
              </p>
            </div>
            <div className="flex flex-col text-sm sm:text-right">
              <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                Toronto, Canada
              </p>
              <p className="text-gray-600">2013 - 2014</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Footer */}
      <footer className={`hidden print:block ${styles.printFooter}`}>
        <span id="footer-date"></span>
        <span>Fabricio Tramontano Pirini • Resume</span>
        <span></span>
      </footer>
      <Script
        id="set-footer-date"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            const date = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const footerDate = document.getElementById('footer-date');
            if (footerDate) {
              footerDate.textContent = date.toLocaleDateString('en-US', options);
            }
          `,
        }}
      />
    </div>
  )
}
