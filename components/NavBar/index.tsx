'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { InfinityIcon, MenuIcon } from 'lucide-react'
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
  <nav className="z-10 flex w-full items-center justify-between p-8 text-[22px] font-light max-[375px]:px-4 sm:px-10 lg:py-12 2xl:px-20 [&_*]:z-10">
    <Link href="/" className="flex items-center gap-4">
      <Image
        className="h-8 w-auto md:h-[45px] 2xl:h-16"
        src={Logo}
        alt="Logo"
        width={80}
        height={80}
        priority
        aria-hidden
      />
      {/* <span className="text-[32px] font-medium max-md:hidden">Fabricio</span> */}
    </Link>
    <div className="z-10 hidden items-center sm:flex sm:flex-row">
      <SiteLinks />
    </div>
    <MoreNav />
  </nav>
)

const MoreNav = () => (
  <div className="flex items-center justify-center gap-[6px] lg:gap-4">
    <CoinCounter />
    <MediaLinks />
    <Basket />
    <HamburguerMenu />
  </div>
)

const SiteLinks = () => (
  <ul className="flex w-full select-none flex-row items-center justify-center gap-8 max-lg:hidden lg:gap-16">
    <li>
      <Link href="/#about" className="navLink">
        <span>About</span>
      </Link>
    </li>
    <li>
      <Link href="/#technology" className="navLink">
        <span>Technology</span>
      </Link>
    </li>
    <li>
      <Link href="/#experience" className="navLink">
        <span>Experience</span>
      </Link>
    </li>
    <li className="relative">
      <Link href="/shop" className="navLink">
        <span>Shop</span>
      </Link>
      <div className="absolute -bottom-10 left-1/2 flex items-end gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="35" viewBox="0 0 43 35" fill="none">
          <path
            d="M42 32.7544C39.2701 33.7581 36.3563 34.1628 33.4564 33.9409C30.5565 33.7191 27.7382 32.876 25.1926 31.4689C22.7312 30.0824 20.6333 28.1323 19.0705 25.7782C17.5077 23.4242 16.5245 20.7332 16.2016 17.9258C16.2016 17.9258 18.0877 1.27793 29.1255 7.65934C35.4485 13.7082 26.4626 19.2579 14.8702 17.093C3.27781 14.9281 3 1 3 1"
            strokeWidth={2}
            strokeLinecap="round"
            stroke="#FEC556"
          />
          <path
            d="M1 13C1.2127 12.4644 3.12714 1 3.12714 1L13 5.33854"
            strokeWidth={2}
            strokeLinecap="round"
            stroke="#FEC556"
          />
        </svg>
        <span className="-mb-2 block whitespace-nowrap font-poppins text-lg font-medium leading-none text-accent">
          Click Me!
        </span>
      </div>
    </li>
  </ul>
)

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const posthog = usePostHog()

  const pathname = usePathname()

  const isHome = pathname === '/'

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="ml-5 size-11 cursor-pointer rounded-full border border-white/50 p-2 text-primary focus-visible:h-full max-[375px]:ml-0 md:size-14 md:p-3 lg:hidden lg:size-16 lg:p-4"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <MenuIcon className="pointer-events-none size-full" />
          <span className="sr-only">Open the menu</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        side="bottom"
        sideOffset={12}
        align="end"
        className="origin-[var(--radix-dropdown-menu-content-transform-origin)] animate-scaleIn lg:hidden"
      >
        <Link href={isHome ? '#about' : '/#about'}>
          <DropdownMenuItem className="px-5 py-2">About</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator className="mx-5" />
        <Link href={isHome ? '#technology' : '/#technology'}>
          <DropdownMenuItem className="px-5 py-2">Technology</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator className="mx-5" />
        <Link href={isHome ? '#experience' : '/#experience'}>
          <DropdownMenuItem className="px-5 py-2">Experience</DropdownMenuItem>
        </Link>
        {isHome && (
          <>
            <DropdownMenuSeparator className="mx-5" />
            <Link href="/shop">
              <DropdownMenuItem className="px-5 py-2">Shop</DropdownMenuItem>
            </Link>
          </>
        )}
        <div className="lg:hidden">
          <DropdownMenuSeparator className="mx-5" />
          <a
            target="_blank"
            rel="noopener"
            data-atrr="linkedin-hamburguer"
            href="https://www.linkedin.com/in/fabriciopirini/"
            aria-label="Checkout my LinkedIn profile"
            onClick={() => posthog?.capture('contact_me_linkedin_hamburguer')}
          >
            <DropdownMenuItem className="px-5 py-2">LinkedIn</DropdownMenuItem>
          </a>
          <DropdownMenuSeparator className="mx-5" />
          <a
            target="_blank"
            rel="noopener"
            aria-label="Checkout my Github profile"
            data-atrr="github-hamburguer"
            href="https://github.com/fabriciopirini"
            onClick={() => posthog?.capture('contact_me_github_hamburguer')}
          >
            <DropdownMenuItem className="px-5 py-2">Github</DropdownMenuItem>
          </a>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const CoinCounter = ({ className }: { className?: string }) => {
  const [animate, setAnimate] = useState(false)
  const pathname = usePathname()

  const { coins, addCoins, _hasHydrated: hasStoreHydrated } = useAppStore((state) => state)
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
    <div
      className={cn(
        'relative hidden overflow-hidden rounded-full bg-white/20',
        {
          block: pathname === '/shop',
        },
        className
      )}
      role="status"
      aria-label="Fab coins counter"
      aria-live="polite"
    >
      <div
        className={cn(
          'absolute size-full -translate-x-[200%] rounded-full bg-accent bg-gradient-to-r from-[#BF9137] to-accent transition-colors',
          {
            'animate-coinIncrease': animate,
          }
        )}
      />
      <div className="flex h-11 select-none items-center justify-end gap-2 px-2 py-[6px] text-base text-white md:px-3 md:py-2 lg:h-16 lg:text-xl">
        <Image src={FabCoingIcon} alt="FabCoin" className="pointer-events-none mr-2 size-8 lg:size-11" aria-hidden />
        {coins < MAX_COINS ? (
          <div className="relative">
            <CountUp
              start={Math.max(coins - coinsToBeAdded, 0)}
              end={coins}
              duration={2}
              onEnd={() => {
                setAnimate(false)
              }}
              className={cn('inline-block text-right', {
                'animate-pulse rounded-xl bg-neutral-500 text-neutral-500': !hasStoreHydrated,
              })}
              style={{ fontFeatureSettings: "'tnum'" }}
            />
            <span
              className={cn(
                'absolute right-0 top-5 text-center text-xs opacity-0 mix-blend-lighten lg:top-6 xl:text-base',
                {
                  'animate-appearDownAndFade': animate,
                  hidden: !hasStoreHydrated,
                }
              )}
            >
              +{coinsToBeAdded}
            </span>
          </div>
        ) : (
          <div className="w-[3ch] lg:w-[4ch]">
            <InfinityIcon strokeWidth={1} className="pointer-events-none ml-auto lg:size-9" />
          </div>
        )}
        <span className="whitespace-nowrap">
          <span className="max-sm:hidden">Fab </span>
          coins
        </span>
      </div>
    </div>
  )
}

const MediaLinks = () => {
  const posthog = usePostHog()

  return (
    <>
      <a
        target="_blank"
        rel="noopener"
        data-atrr="linkedin-navbar"
        href="https://www.linkedin.com/in/fabriciopirini/"
        aria-label="Checkout my LinkedIn profile"
        className="hidden size-16 rounded-full border border-white/50 p-4 lg:block"
        onClick={() => posthog?.capture('contact_me_linkedin_navbar')}
      >
        <LinkedInIconFilled className="pointer-events-none size-full" />
        <span className="sr-only">Visit Fabricio&apos;s LinkedIn profile</span>
      </a>
      <a
        target="_blank"
        rel="noopener"
        data-atrr="github-navbar"
        href="https://github.com/fabriciopirini"
        aria-label="Checkout my Github profile"
        className="hidden size-16 rounded-full border border-white/50 p-4 lg:block"
        onClick={() => posthog?.capture('contact_me_github_navbar')}
      >
        <GithubIconFilled className="pointer-events-none size-full" />
        <span className="sr-only">Visit Fabricio&apos;s Github profile</span>
      </a>
    </>
  )
}
