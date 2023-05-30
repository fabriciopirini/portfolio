import { GithubIcon, GlobeIcon, Laptop2Icon, LinkedinIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CTAButton } from '@/components/CTAButton'
import Logo from '@/public/assets/logo.svg'
import ProfilePic from '@/public/assets/portrait-grayscale-2.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-20">
      <nav className="flex w-full items-center justify-between py-10 text-3xl font-light md:py-16">
        <div className="absolute hidden md:block">
          <Image className="h-10 w-auto 2xl:h-16" src={Logo} alt="Logo" width={64} height={64} />
        </div>
        <div className="hidden w-full items-center sm:flex sm:flex-row">
          <ul className="flex w-full flex-row items-center justify-center gap-8 lg:gap-20">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Portfolio</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex w-full flex-row justify-end sm:hidden">
          <MenuIcon size={36} />
        </div>
      </nav>
      <section className="flex w-full grow flex-col items-start justify-center px-4 text-6xl md:flex-row md:px-14">
        <div className="mx-auto flex h-full w-auto grow flex-col justify-center gap-8 text-3xl md:w-full md:pt-10 lg:ml-0 lg:w-auto lg:text-4xl xl:my-auto">
          <div>
            <p className="flex flex-col gap-3 pb-5 sm:flex-row sm:items-center">
              <span>I&apos;m</span>
              <span className="inline-block text-5xl font-medium text-accent md:text-6xl">Fabricio Pirini</span>
            </p>
            <p className="flex flex-row items-baseline gap-3">
              <Laptop2Icon size={20} className="inline-block" />
              Frontend Engineer
            </p>
            <p className="flex flex-row items-baseline gap-3">
              <GlobeIcon size={20} className="inline-block" />
              Based in Norway
            </p>
          </div>
          <div className="flex flex-col-reverse gap-6 pb-8 sm:flex-row">
            <CTAButton type="secondary" text="Contact me" href="/" />
            <CTAButton external text="Resume" href="https://bit.ly/fabriciopirini-updated-CV" />
          </div>
        </div>
        <div className="flex h-full w-full md:w-auto">
          <Image
            className="relative z-[-1] mx-auto mt-8 h-96 w-auto grow brightness-[0.85] sm:h-[500px] md:absolute md:bottom-0 md:right-0 md:h-[600px] lg:mr-36 lg:mt-0 lg:h-[700px] lg:grow-0"
            src={ProfilePic}
            alt="Profile Picture"
            width={500}
            height={800}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </section>
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
    </main>
  )
}
