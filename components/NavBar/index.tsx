'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { InfinityIcon, MenuIcon, MousePointerClickIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { usePostHog } from 'posthog-js/react'

import { Basket } from '@/components/Basket'
import { GithubIconFilled, LinkedInIconFilled } from '@/components/SvgLogos'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { calculateCoinsToAdd, cn } from '@/lib/utils'
import { useAppStore } from '@/providers/app-store-provider'
import FabCoingIcon from '@/public/assets/fab-coin-icon.png'
import Logo from '@/public/assets/logo.svg'
import { MAX_COINS } from '@/stores/app-store'

export const NavBar = () => (
  <nav className="z-10 flex w-full items-center justify-between px-4 py-10 text-[22px] font-light md:py-16 [&_*]:z-10">
    <Link href="/" className="flex items-center gap-4">
      <Image className="h-[45px] w-auto 2xl:h-16" src={Logo} alt="Logo" width={64} height={64} />
      {/* <span className="text-[32px] font-medium max-md:hidden">Fabricio</span> */}
    </Link>
    <div className="z-10 hidden items-center sm:flex sm:flex-row">
      <SiteLinks />
    </div>
    <MoreNav />
  </nav>
)

const MoreNav = () => {
  const [animate, setAnimate] = useState(false)

  const { coins, addCoins, _hasHydrated: hasStoreHydrated } = useAppStore((state) => state)

  const posthog = usePostHog()

  const coinsToBeAdded = calculateCoinsToAdd(coins)

  useEffect(() => {
    if (animate || coins >= MAX_COINS) return

    const timer = setTimeout(() => {
      setAnimate(true)
      addCoins(coinsToBeAdded)
    }, 5000)

    return () => clearTimeout(timer)
  }, [animate])

  return (
    <div className="flex items-center justify-center gap-2 md:gap-5">
      <div className="flex items-center justify-end gap-2 rounded-full border border-white/50 p-2 text-sm text-white md:px-3 md:py-2 lg:text-xl">
        <Image src={FabCoingIcon} alt="FabCoin" className="size-5 lg:size-11" />
        {coins < MAX_COINS ? (
          <div className="relative">
            <CountUp
              start={Math.max(coins - coinsToBeAdded, 0)}
              end={coins}
              duration={2}
              onEnd={() => {
                setAnimate(false)
              }}
              className={cn('inline-block w-[5ch] text-right', {
                'animate-pulse rounded bg-neutral-500 text-neutral-500': !hasStoreHydrated,
              })}
            />
            <span
              className={cn('absolute right-0 top-6 text-center text-xs text-accent opacity-0 xl:text-base', {
                'animate-appearDownAndFade': animate,
                hidden: !hasStoreHydrated,
              })}
            >
              +{coinsToBeAdded}
            </span>
          </div>
        ) : (
          <div className="w-[4ch]">
            <InfinityIcon strokeWidth={1} className="ml-auto lg:size-9" />
          </div>
        )}
        <span className="whitespace-nowrap">Fab coins</span>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        data-atrr="linkedin-sidebar"
        href="https://www.linkedin.com/in/fabriciopirini/"
        aria-label="Checkout my LinkedIn profile"
        className="hidden h-full rounded-full border border-white/50 p-4 lg:block"
        onClick={() => posthog?.capture('contact_me_linkedin_sidebar')}
      >
        <LinkedInIconFilled className="size-7" />
        <span className="sr-only">Visit Fabricio&apos;s LinkedIn profile</span>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        data-atrr="github-sidebar"
        href="https://github.com/fabriciopirini"
        aria-label="Checkout my Github profile"
        className="hidden h-full rounded-full border border-white/50 p-4 lg:block"
        onClick={() => posthog?.capture('contact_me_github_sidebar')}
      >
        <GithubIconFilled className="size-7" />
        <span className="sr-only">Visit Fabricio&apos;s Github profile</span>
      </a>
      <Basket />
      <HamburguerMenu />
    </div>
  )
}

const SiteLinks = () => (
  <ul className="flex w-full select-none flex-row items-center justify-center gap-8 max-xl:hidden lg:gap-16">
    <li>
      <Link href="/#about">About</Link>
    </li>
    <li>
      <Link href="/#technology">Technology</Link>
    </li>
    <li>
      <Link href="/#experience">Experience</Link>
    </li>
    <li className="relative">
      <Link href="/shop">Shop</Link>
      <div className="absolute -bottom-12 -right-10 flex -rotate-45 flex-col items-center">
        <MousePointerClickIcon className="size-5 rotate-45 text-accent" />
        <span className="block w-10 text-center text-sm font-medium text-accent">Click me!</span>
      </div>
    </li>
  </ul>
)

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  const isHome = pathname === '/'

  const handleSelect = (e) => {
    e.preventDefault()
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer rounded-full border border-white/50 p-3 text-primary focus-visible:h-full">
          <MenuIcon className="size-6 lg:size-8" />
          <span className="sr-only">Open the menu</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-7 py-5" onCloseAutoFocus={(e) => e.preventDefault()}>
        <DropdownMenuItem onSelect={handleSelect}>
          {isHome ? <a href="#about">About</a> : <Link href="/#about">About</Link>}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleSelect}>
          {isHome ? <a href="#technology">Technology</a> : <Link href="/#technology">Technology</Link>}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleSelect}>
          {isHome ? <a href="#experience">Experience</a> : <Link href="/#experience">Experience</Link>}
        </DropdownMenuItem>
        {isHome && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={handleSelect}>
              <Link href="/shop">Shop</Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
