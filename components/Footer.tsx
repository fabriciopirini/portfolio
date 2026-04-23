'use client'

import Image from 'next/image'
import { usePostHog } from 'posthog-js/react'

import { mailTo } from '@/components/InteractionButton'
import { GithubIconFilled, LinkedInIconFilled, MailIconFilled } from '@/components/SvgLogos'
import { COPY } from '@/lib/site-copy'
import { ACTIVE_VARIANT } from '@/lib/site-config'
import Logo from '@/public/assets/logo.svg'

export const Footer = () => {
  const posthog = usePostHog()

  return (
    <footer className="m-4 mb-0 flex flex-col items-center justify-between gap-16 bg-white/10 p-7 text-center lg:m-8 lg:mb-0 lg:gap-16 lg:px-24 lg:pb-8 lg:pt-32">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-0 lg:divide-x lg:divide-white/20">
        <p className="max-w-[15ch] font-leagueSpartan text-3xl font-medium lg:basis-1/2 lg:pr-20 lg:text-[80px] lg:leading-none">
          {COPY.footer.tagline[ACTIVE_VARIANT]}
        </p>
        <div className="flex flex-col items-center justify-center gap-6 lg:basis-1/2 lg:gap-5 lg:pl-20">
          <p className="max-w-[35ch] lg:text-2xl">
            {COPY.footer.description[ACTIVE_VARIANT]}
          </p>
          <div className="flex justify-center gap-3 lg:gap-4">
            <a
              target="_blank"
              rel="noopener"
              data-atrr="email-footer"
              href={mailTo}
              aria-label="Send email to Fabricio"
              className="group size-11 rounded-full p-2 ring-2 ring-white/50 transition-[transform,box-shadow,background-color] duration-200 ease-out hover:scale-[1.03] hover:bg-white/5 hover:ring-white/80 active:scale-95 lg:size-16 lg:p-4"
              onClick={() => posthog?.capture('contact_me_email_footer')}
            >
              <MailIconFilled className="pointer-events-none size-full transition-transform duration-200 ease-out group-hover:scale-[1.1]" />
              <span className="sr-only">Send email to Fabricio</span>
            </a>
            <a
              target="_blank"
              rel="noopener"
              data-atrr="linkedin-footer"
              href="https://www.linkedin.com/in/fabriciopirini/"
              aria-label="Checkout my LinkedIn profile"
              className="group size-11 rounded-full p-2 ring-2 ring-white/50 transition-[transform,box-shadow,background-color] duration-200 ease-out hover:scale-[1.03] hover:bg-white/5 hover:ring-white/80 active:scale-95 lg:size-16 lg:p-4"
              onClick={() => posthog?.capture('contact_me_linkedin_footer')}
            >
              <LinkedInIconFilled className="pointer-events-none size-full transition-transform duration-200 ease-out group-hover:scale-[1.1]" />
              <span className="sr-only">Visit Fabricio&apos;s LinkedIn profile</span>
            </a>
            <a
              target="_blank"
              rel="noopener"
              data-atrr="github-footer"
              href="https://github.com/fabriciopirini"
              aria-label="Checkout my Github profile"
              className="group size-11 rounded-full p-2 ring-2 ring-white/50 transition-[transform,box-shadow,background-color] duration-200 ease-out hover:scale-[1.03] hover:bg-white/5 hover:ring-white/80 active:scale-95 lg:size-16 lg:p-4"
              onClick={() => posthog?.capture('contact_me_github_footer')}
            >
              <GithubIconFilled className="pointer-events-none size-full transition-transform duration-200 ease-out group-hover:scale-[1.1]" />
              <span className="sr-only">Visit Fabricio&apos;s Github profile</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 lg:gap-3">
        <Image className="size-5 lg:size-7" src={Logo} alt="Logo" width={28} height={28} />
      </div>
    </footer>
  )
}
