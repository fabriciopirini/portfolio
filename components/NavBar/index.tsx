'use client'

import { MenuIcon, MousePointerClickIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/assets/logo.svg'

export const NavBar = () => (
  <nav className="z-10 flex w-full items-center justify-between px-4 py-10 text-[22px] font-light md:px-20 md:py-16">
    <Link href="/" className="flex items-center gap-4">
      <Image className="h-[45px] w-auto 2xl:h-16" src={Logo} alt="Logo" width={64} height={64} />
      <span className="hidden text-[32px] font-medium xl:block">Fabricio</span>
    </Link>
    <div className="z-10 hidden w-full items-center sm:flex sm:flex-row">
      <ul className="flex w-full select-none flex-row items-center justify-center gap-8 lg:gap-16">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Technology</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li className="relative">
          <Link href="/shop">Shop</Link>
          <div className="absolute -bottom-12 -right-10 flex -rotate-45 flex-col items-center">
            <MousePointerClickIcon className="size-5 rotate-45 text-accent" />
            <span className="block w-10 text-center text-sm font-medium text-accent">Click me!</span>
          </div>
        </li>
        {/* <li>
          <a href="#">Contact Me</a>
        </li> */}
        {/* <li>
          <Link href="#">Portfolio</Link>
          </li>
        <li>
          <Link href="#">Contact</Link>
        </li> */}
      </ul>
    </div>
    <div className="flex w-full flex-row justify-end sm:hidden">
      <MenuIcon size={36} />
    </div>
  </nav>
)
