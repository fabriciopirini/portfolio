import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/assets/logo.svg'

export const NavBar = () => (
  <nav className="flex w-full items-center justify-between py-10 text-3xl font-light md:py-16">
    <div className="absolute hidden md:block">
      <Image className="h-10 w-auto 2xl:h-16" src={Logo} alt="Logo" width={64} height={64} />
    </div>
    <div className="hidden w-full items-center sm:flex sm:flex-row">
      {/* <ul className="flex w-full select-none flex-row items-center justify-center gap-8 lg:gap-20">
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Portfolio</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul> */}
    </div>
    <div className="flex w-full flex-row justify-end sm:hidden">{/* <MenuIcon size={36} /> */}</div>
  </nav>
)
