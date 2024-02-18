import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { usePostHog } from 'posthog-js/react'

export const SocialsSidebar = () => {
  const posthog = usePostHog()

  return (
    <div className="fixed bottom-0 right-0 z-50 flex h-full flex-col justify-end gap-6 px-2 py-6 md:justify-center md:px-4">
      <div className="mx-auto h-16 w-[2px] border-l-4 border-accent" />
      {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
      <a
        target="_blank"
        rel="noreferrer"
        data-atrr="linkedin-sidebar"
        href="https://www.linkedin.com/in/fabriciopirini/"
        aria-label="Checkout my LinkedIn profile"
        className="rounded-full bg-primary p-3 text-primary transition-colors duration-500 hover:bg-linkedIn hover:text-primary"
        onClick={() => posthog?.capture('contact_me_linkedin_sidebar')}
      >
        <LinkedinIcon size={40} />
        <span className="sr-only">Visit Fabricio's LinkedIn profile</span>
      </a>
      {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
      <a
        target="_blank"
        rel="noreferrer"
        data-atrr="github-sidebar"
        href="https://github.com/fabriciopirini"
        aria-label="Checkout my Github profile"
        className="rounded-full bg-primary p-3 text-primary transition-colors duration-500 hover:bg-white hover:text-primary-background"
        onClick={() => posthog?.capture('contact_me_github_sidebar')}
      >
        <GithubIcon size={40} />
        <span className="sr-only">Visit Fabricio's Github profile</span>
      </a>
      <div className="mx-auto hidden h-16 w-[2px] border-l-4 border-accent md:block" />
    </div>
  )
}
