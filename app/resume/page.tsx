import type { Metadata } from 'next'
import { cacheLife } from 'next/cache'
import { Download, Github, Globe, Linkedin, Mail } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Resume - Fabricio Pirini',
  description:
    'Professional resume of Fabricio Pirini, Senior Web Fullstack Engineer specializing in React, Next.js, and TypeScript.',
}

import styles from './resume.module.css'
import { cn } from '@/lib/utils'
import { getCachedYearsOfExperience } from '@/lib/server-utils'

export default async function ResumePage() {
  'use cache'
  cacheLife('days')

  const yearsOfExperience = await getCachedYearsOfExperience()
  return (
    <div
      className={cn(
        styles.resumeContainer,
        'relative m-4 flex max-w-full flex-col gap-4 text-pretty border-2 border-white bg-gray-100 px-4 pb-10 pt-14 font-source-sans-3 text-base text-gray-700 md:mx-auto md:max-w-[210mm] md:p-16 print:bg-white print:text-black'
      )}
    >
      {/* Download PDF — screen only, anchored to card corner */}
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
          Senior Software Engineer
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
        <p>
          Senior Software Engineer with {yearsOfExperience}+ years in React and TypeScript, working across web and
          mobile. Currently at a leading US crypto exchange, owning the design system and shipping to 4 platforms,
          including a React Native support portal built from scratch across 3 mobile apps. I tend to build foundational
          things: testing infrastructure, theming pipelines, shared packages. Previously led frontend teams at
          e-commerce and grocery delivery scale-ups in Norway.
        </p>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="mb-3 font-roboto text-xl font-black text-gray-900">
          <span style={{ color: 'var(--color-accent)' }}>Tec</span>hnical Skills
        </h2>
        <div className="space-y-1 text-base text-gray-700 print:text-sm">
          <p>
            <span className="font-bold">Languages & Runtimes:</span> TypeScript, JavaScript (ES2024+), HTML5, CSS3,
            Node.js
          </p>
          <p>
            <span className="font-bold">Frameworks & UI:</span> React, Next.js, Redux Toolkit, Tailwind CSS, Radix UI
          </p>
          <p>
            <span className="font-bold">Testing & Quality:</span> Playwright, Vitest, Jest, React Testing Library,
            Storybook
          </p>
          <p>
            <span className="font-bold">Tooling & DevOps:</span> Docker, CI/CD (GitHub Actions), GraphQL, Figma, Power
            BI
          </p>
        </div>
      </div>

      {/* Professional Experience */}
      <section className="mt-8 print:mt-0 [&_li::marker]:text-[0.7em]">
        <h2 className="mb-3 font-roboto text-xl font-black text-gray-900">
          <span style={{ color: 'var(--color-accent)' }}>Prof</span>essional Experience
        </h2>
        <div className="divide-y-[0.5px] divide-gray-300">
          {/* Job 1 */}
          <div data-section="job" className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col text-gray-700">
                <h3 className="font-black text-gray-900">Leading Cryptocurrency Exchange Platform - US Client</h3>
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Contractor - Frontend Engineer</p>
              </div>
              <div className="flex flex-col text-sm sm:text-right">
                <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                  Brazil (Remote)
                </p>
                <p className="text-gray-600">Nov. 2024 - Present</p>
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-base text-gray-700 print:text-sm">
              <li>
                Cut visual regression test runtime from 12 min to under a minute by building the Playwright VRT
                infrastructure from scratch. Coverage tripled across the component library.
              </li>
              <li>
                Built the Figma-to-code design token pipeline that powers theming across 3 brand lines (6 light/dark
                variants). Teams went from days of manual work per brand to automated updates.
              </li>
              <li>
                Shipped an in-app support portal to 3 React Native apps from scratch. Built tier-aware contact options,
                VIP manager card, and live support queue visibility. Coordinated phased rollout across consumer, pay,
                and pro mobile applications.
              </li>
              <li>
                Built 15+ dynamic financial data table components (deposit fees, withdrawal fees, margin pairs, position
                limits) with search, deep-linking, copy, and i18n. Fixed 25+ accessibility issues platform-wide:
                keyboard navigation, focus management, and ARIA attributes.
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div data-section="job" className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col text-gray-700">
                <h3 className="font-black text-gray-900">E-commerce Platform</h3>
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Lead Software Engineer & Tech Lead</p>
              </div>
              <div className="flex flex-col text-sm sm:text-right">
                <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                  Norway (Remote)
                </p>
                <p className="text-gray-600">Sep. 2023 - Sep. 2024</p>
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-base text-gray-700 print:text-sm">
              <li>
                Managed 5 engineers across 2 time zones. Built the sprint cadence, code review process, and CI/CD setup
                from scratch.
              </li>
              <li>
                Rebuilt legacy storefronts and built new ones from scratch, shipping 5 in total with React, TypeScript,
                and Next.js. Worked with Design, Product, and Business stakeholders at every level, from CEO to junior
                engineer.
              </li>
              <li>
                Built a shared component library used by 3 product teams, cutting feature cycle time by roughly 25%.
              </li>
            </ul>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col text-gray-700">
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Lead Frontend Engineer</p>
              </div>
              <div className="flex flex-col text-sm sm:text-right">
                <p className="text-gray-600">Sep. 2022 - Aug. 2023</p>
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-base text-gray-700 print:text-sm">
              <li>
                Integrated 5 storefronts with Sanity CMS and the internal design system, giving the content team full
                control over brand-aligned pages without engineering involvement.
              </li>
              <li>
                Got Core Web Vitals into the green on key checkout routes through code splitting, lazy loading, and edge
                caching. LCP under 2s.
              </li>
              <li>
                Led WCAG 2.0 AA compliance across e-commerce storefronts and brand landing pages for a portfolio of 70+
                European companies.
              </li>
              <li>Mentored 3 junior engineers. Two were promoted within 18 months.</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div data-section="job" className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col">
                <h3 className="font-black text-gray-900">Online Grocery Delivery Startup</h3>
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Software Engineer</p>
              </div>
              <div className="flex flex-col text-sm sm:text-right">
                <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                  Norway
                </p>
                <p className="text-gray-600">Aug. 2020 - Aug. 2022</p>
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-base text-gray-700 print:text-sm">
              <li>
                Built the A/B experimentation program from scratch and kept it running at 2-4 experiments a month.
              </li>
              <li>
                Removed hard-coded configs that were blocking international expansion. Finland and Germany went live
                without engineering changes.
              </li>
              <li>
                Ran Technical Debt workshops every two months to keep the backlog from compounding. The team kept
                shipping at pace through a 2x headcount growth.
              </li>
              <li>Recognized as Culture Champion by company leadership.</li>
            </ul>
          </div>

          {/* Job 4 */}
          <div data-section="job" className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col text-gray-700">
                <h3 className="font-black text-gray-900">Sportradar</h3>
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Full Stack Engineer</p>
              </div>
              <div className="flex flex-col text-sm sm:text-right">
                <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                  Norway
                </p>
                <p className="text-gray-600">Sept. 2018 - Aug. 2020</p>
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-base text-gray-700 print:text-sm">
              <li>
                Refactored web crawlers and scrapers into 5 independent microservices, cutting runtime by 120x and
                resource usage by 10x.
              </li>
              <li>
                Migrated CI/CD from Jenkins to GitLab, reducing deploy failures by 85% through Docker containerization
                and pipeline redesign.
              </li>
            </ul>
          </div>

          {/* Job 5 */}
          <div data-section="job" className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col text-gray-700">
                <h3 className="font-black text-gray-900">Samsung R&D Center</h3>
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Software Engineering Intern</p>
              </div>
              <div className="flex flex-col text-sm sm:text-right">
                <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                  Campinas, Brazil
                </p>
                <p className="text-gray-600">Jan. 2017 - Jan. 2018</p>
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-base text-gray-700 print:text-sm">
              <li>
                Built a WCAG 2.0 AA Web Accessibility portal and automated internal reporting dashboards with Power BI.
              </li>
              <li>
                Contributed to IoT prototype R&amp;D and gave talks on Web Accessibility at 2 industry conferences.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <div className="mt-8 print:mt-0">
        <h2 className="mb-3 font-roboto text-xl font-black text-gray-900">
          <span style={{ color: 'var(--color-accent)' }}>Edu</span>cation
        </h2>
        <div className="divide-y-[0.5px] divide-gray-300 text-base text-gray-700 print:text-sm">
          <div className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-bold text-gray-900">Universidade Federal de Itajuba - UNIFEI</h3>
              <p className={`text-sm font-medium ${styles.smallCaps}`}>Bachelor of Science in Computer Engineering</p>
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
