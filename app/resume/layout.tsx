import type { Metadata } from 'next'
import { Roboto, Source_Sans_3 } from 'next/font/google'

import { ACTIVE_VARIANT } from '@/lib/site-config'
import { CAREER } from '@/lib/career-data'

import '@/app/globals.css'
import './resume.module.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-roboto',
  display: 'swap',
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fabricio Pirini - Resume',
  description: `Resume of Fabricio Tramontano Pirini - ${CAREER.subtitle[ACTIVE_VARIANT]}`,
}

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --font-roboto: ${roboto.style.fontFamily};
          --font-source-sans-3: ${sourceSans3.style.fontFamily};
          --color-accent: #0395de;
        }
        body {
          display: flex;
          flex-direction: column;
          min-height: 100dvh;
          padding-bottom: 1rem;
          background-color: #cbd1d7 !important;
        }
        @media (min-width: 1024px) {
          body {
            padding-bottom: 2rem;
          }
        }
        nav, footer {
          display: none !important;
        }
        @page {
          size: A4;
          margin: 2cm;
        }
        `,
          // @media print {
          //   [data-section="job"] {
          //     break-inside: avoid;
          //   }
          // }
        }}
      />
      {children}
    </>
  )
}
