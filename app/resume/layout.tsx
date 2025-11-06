import type { Metadata } from 'next'
import { Roboto, Source_Sans_3 } from 'next/font/google'

import './resume.module.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-source-sans-3',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fabricio Pirini - Resume',
  description: 'Resume of Fabricio Tramontano Pirini - Senior Software Engineer',
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
          background-color: #f3f4f6 !important;
        }
        nav, footer {
          display: none !important;
        }
        @page {
          size: A4;
          margin: 2cm;
        }
        @media print {
          [data-section="job"] {
            break-inside: avoid;
          }
        }
      `,
        }}
      />
      {children}
    </>
  )
}
