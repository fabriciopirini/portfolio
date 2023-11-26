import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/assets/logo.svg'

export const NavBar = () => (
  <nav className="absolute flex w-full items-center justify-between px-4 py-10 text-3xl font-light md:px-20 md:py-16">
    <div className="absolute hidden md:block">
      <Link href="/">
        <Image className="h-10 w-auto 2xl:h-16" src={Logo} alt="Logo" width={64} height={64} />
      </Link>
    </div>
    <div className="hidden w-full items-center sm:flex sm:flex-row">
      <ul className="flex w-full select-none flex-row items-center justify-center gap-8 lg:gap-20">
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        {/* <li>
          <Link href="#">Portfolio</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li> */}
      </ul>
    </div>
    <div className="flex w-full flex-row justify-end sm:hidden">{/* <MenuIcon size={36} /> */}</div>
  </nav>
)
