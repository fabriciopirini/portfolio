import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CTAButton } from '@/components/CTAButton'
import Logo from '@/public/assets/logo.svg'
import ProfilePic from '@/public/assets/portrait-grayscale-2.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-20">
      <nav className="flex w-full items-center justify-between py-16 text-3xl font-light">
        <div className="absolute hidden md:block">
          <Image className="h-10 w-auto 2xl:h-16" src={Logo} alt="Logo" width={64} height={64} />
        </div>
        <div className="flex w-full flex-row items-center">
          <ul className="flex w-full flex-row items-center justify-center gap-8 lg:gap-20">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Portifolio</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className="flex w-full grow flex-col items-start justify-center px-4 text-6xl md:flex-row md:px-14">
        <div className="mx-auto flex h-full w-auto grow flex-col justify-center gap-8 text-4xl md:w-full md:pt-10 lg:ml-0 lg:w-auto xl:my-auto">
          <div>
            <p>
              I&apos;m{' '}
              <span className="inline-block text-5xl font-medium text-accent md:pl-3 md:text-7xl">Fabricio Pirini</span>
            </p>
            <p>Frontend Engineer</p>
            <p>Based in Norway</p>
          </div>
          <div className="flex flex-row gap-6 pb-8">
            <CTAButton type="secondary" text="Contact me" />
            <CTAButton external text="Resume" href="https://bit.ly/fabriciopirini-updated-CV" />
          </div>
        </div>
        <div className="flex h-full w-full md:w-auto">
          <Image
            className="relative z-[-1] mx-auto mt-8 h-96 w-auto grow sm:h-[500px] md:absolute md:bottom-0 md:right-0 md:h-[600px] lg:mr-36 lg:mt-0 lg:h-[700px] lg:grow-0"
            src={ProfilePic}
            alt="Profile Picture"
            width={500}
            height={800}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </section>
      <div className="fixed bottom-0 right-0 flex h-full flex-col justify-end gap-6 px-2 py-6 md:justify-center md:px-4">
        <div className="mx-auto h-36 w-[2px] border-l-4 border-accent" />
        <a href="https://www.linkedin.com/in/fabriciopirini/" target="_blank" className="rounded-full bg-primary p-3">
          <LinkedinIcon size={40} />
        </a>
        <a href="https://github.com/fabriciopirini" target="_blank" className="rounded-full bg-primary p-3">
          <GithubIcon size={40} />
        </a>
      </div>
    </main>
  )
}
