import { GithubIcon, LinkedinIcon } from 'lucide-react'

export const SocialsSidebar = () => (
  <div className="fixed bottom-0 right-0 flex h-full flex-col justify-end gap-6 px-2 py-6 md:justify-center md:px-4">
    <div className="mx-auto h-16 w-[2px] border-l-4 border-accent" />
    <a
      href="https://www.linkedin.com/in/fabriciopirini/"
      target="_blank"
      className="rounded-full bg-primary p-3 text-primary transition-colors duration-500 hover:bg-linkedIn hover:text-primary"
      aria-label="Checkout my LinkedIn profile"
    >
      <LinkedinIcon size={40} />
    </a>
    <a
      href="https://github.com/fabriciopirini"
      target="_blank"
      className="rounded-full bg-primary p-3 text-primary transition-colors duration-500 hover:bg-white hover:text-primary-background"
      aria-label="Checkout my Github profile"
    >
      <GithubIcon size={40} />
    </a>
    <div className="mx-auto hidden h-16 w-[2px] border-l-4 border-accent md:block" />
  </div>
)
