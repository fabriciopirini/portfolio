import { Github, Globe, Linkedin, Mail } from 'lucide-react'
import Script from 'next/script'

import styles from './resume.module.css'

export default function ResumePage() {
  return (
    <div
      className={`${styles.resumeContainer} font-source-sans-3 mx-auto my-4 flex w-[210mm] max-w-[210mm] flex-col gap-6 text-pretty bg-gray-100 p-16 text-base text-gray-700 print:bg-white print:text-black print:shadow-none`}
      style={{
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-roboto text-center text-[40px] font-bold leading-none text-gray-900">
          Fabricio Tramontano Pirini
        </h1>
        <p
          className={`text-sm font-semibold tracking-wide ${styles.smallCaps}`}
          style={{ color: 'var(--color-accent)' }}
        >
          Senior Software Engineer
        </p>
        <p className="text-sm font-medium italic text-gray-400">Brazil (UTC -3)</p>
        <div className="mt-3 flex flex-row flex-wrap items-center justify-center gap-2 text-[11px] text-gray-700">
          <a
            href="mailto:fabricio@fabriciopirini.com"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <Mail className="size-3" />
            fabricio@fabriciopirini.com
          </a>
          <span>|</span>
          <a href="https://fabriciopirini.com" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <Globe className="size-3" />
            fabriciopirini.com
          </a>
          <span>|</span>
          <a
            href="https://linkedin.com/in/fabriciopirini"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <Linkedin className="size-3" />
            fabriciopirini
          </a>
          <span>|</span>
          <a
            href="https://github.com/fabriciopirini"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <Github className="size-3" />
            fabriciopirini
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="text-sm leading-relaxed text-gray-700">
        <p>
          Senior Software Engineer with 9+ years of experience specializing in React, TypeScript, and modern web
          technologies. Proven track record in developing scalable web applications, optimizing user interfaces, and
          leading engineering teams in startup environments. Passionate about creating intuitive and delightful user
          experiences, with a keen eye for UI/UX and expertise in responsive design and data visualization.
        </p>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="font-roboto mb-2 text-xl font-extrabold text-gray-900">
          <span style={{ color: 'var(--color-accent)' }}>Tec</span>hnical Skills
        </h2>
        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-bold">Core Technologies:</span> React, TypeScript, Next.js, JavaScript, Redux,
            HTML/CSS, Tailwind CSS, Node.js
          </p>
          <p>
            <span className="font-bold">Tools & DevOps:</span> Jest, Vitest, React Testing Library, Playwright, GraphQL,
            Storybook, Figma, Docker, CI/CD
          </p>
        </div>
      </div>

      {/* Professional Experience */}
      <section className="[&_li::marker]:text-[0.7em]">
        <h2 className="font-roboto mb-3 text-xl font-extrabold text-gray-900">
          <span style={{ color: 'var(--color-accent)' }}>Prof</span>essional Experience
        </h2>
        <div className="space-y-4">
          {/* Job 1 */}
          <div data-section="job" className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex flex-col text-gray-700">
                <h3 className="font-black text-gray-900">Leading Cryptocurrency Exchange Platform - US Client</h3>
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Contractor - Frontend Engineer</p>
              </div>
              <div className="flex flex-col text-right text-sm">
                <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                  Brazil (Remote)
                </p>
                <p className="text-gray-600">Nov. 2024 - Present</p>
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>
                Rolled out Playwright-based visual regression testing, reduced test execution from 12 min to &lt;1 min,
                tripled coverage
              </li>
              <li>
                Made 11 core components themeable; automated Figma token generation for faster brand customization
              </li>
              <li>
                Enhanced accessibility: added keyboard/ARIA support to Slider, DropdownButton, DropdownInput components
              </li>
              <li>Optimized CI/CD: split Docker images, accelerated Storybook builds for faster developer feedback</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div data-section="job" className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex flex-col text-gray-700">
                <h3 className="font-black text-gray-900">E-commerce Platform</h3>
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Lead Software Engineer & Tech Lead</p>
              </div>
              <div className="flex flex-col text-right text-sm">
                <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                  Norway (Remote)
                </p>
                <p className="text-gray-600">Sep. 2023 - Sep. 2024</p>
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Led 5 engineers remotely; shaped architecture, implemented Agile + DevOps practices</li>
              <li>Designed and built intuitive e-commerce interfaces with React, TypeScript, Next.js</li>
              <li>Built developer tools and libraries to streamline workflows and enhance team productivity</li>
            </ul>
            <div className="flex items-start justify-between">
              <div className="flex flex-col text-gray-700">
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Lead Frontend Engineer</p>
              </div>
              <div className="flex flex-col text-right text-sm">
                <p className="text-gray-600">Sep. 2022 - Aug. 2023</p>
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Led frontend development: React, TypeScript, Next.js, improved code quality and app reliability</li>
              <li>Architected high-performance, responsive interfaces with seamless backend integration</li>
              <li>Achieved WCAG 2.0 Level AA compliance across assigned projects for accessible user experiences</li>
              <li>Mentored team members in modern technologies and engineering best practices</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div data-section="job" className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <h3 className="font-black text-gray-900">Online Grocery Delivery Startup</h3>
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Senior Software Engineer</p>
              </div>
              <div className="flex flex-col text-right text-sm">
                <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                  Norway
                </p>
                <p className="text-gray-600">Aug. 2020 - Aug. 2022</p>
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>
                Built experimentation culture around &quot;fast-fail, learn effectively&quot; to drive retention and
                product improvements
              </li>
              <li>
                Removed hard-coded configurations to unlock codebase flexibility, enabled expansion into new markets
              </li>
              <li>Facilitated bi-monthly Technical Debt workshops to maintain code health and developer experience</li>
              <li>Recognized as Culture Champion for embodying company values and building team engagement</li>
            </ul>
          </div>

          {/* Job 4 */}
          <div data-section="job" className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex flex-col text-gray-700">
                <h3 className="font-black text-gray-900">Samsung R&D Center</h3>
                <p className={`text-sm font-medium ${styles.smallCaps}`}>Software Engineering Intern</p>
              </div>
              <div className="flex flex-col text-right text-sm">
                <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                  Campinas, Brazil
                </p>
                <p className="text-gray-600">Jan. 2017 - Jan. 2018</p>
              </div>
            </div>
            <p className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700">
              Built Web Accessibility portal (WCAG 2.0 Level AA) and automated reporting dashboards with Power BI
              Contributed to IoT projects and spoke on Web Accessibility and UX at industry conferences
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <div>
        <h2 className="font-roboto mb-3 text-xl font-black text-gray-900">
          <span style={{ color: 'var(--color-accent)' }}>Edu</span>cation
        </h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-gray-900">Universidade Federal de Itajuba - UNIFEI</h3>
              <p className={`text-sm font-medium ${styles.smallCaps}`}>Bachelor of Science in Computer Engineering</p>
            </div>
            <div className="flex flex-col text-right text-sm">
              <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                Itabira, Brazil
              </p>
              <p className="text-gray-600">2011 - 2018</p>
            </div>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-gray-900">University of Toronto</h3>
              <p className={`text-sm font-medium ${styles.smallCaps}`}>
                Exchange Student, Electrical and Computer Engineering
              </p>
            </div>
            <div className="flex flex-col text-right text-sm">
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
