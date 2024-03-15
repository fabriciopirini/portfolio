'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { InfinityIcon, MenuIcon, MousePointerClickIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { usePostHog } from 'posthog-js/react'

import { Basket } from '@/components/Basket'
import { GithubIconFilled, LinkedInIconFilled } from '@/components/SvgLogos'
import { cn } from '@/lib/utils'
import FabCoingIcon from '@/public/assets/fab-coin-icon.png'
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
      </ul>
      <MoreNav />
    </div>
    <div className="flex w-full flex-row justify-end sm:hidden">
      <MenuIcon size={36} />
    </div>
  </nav>
)

const MoreNav = () => {
  const [animate, setAnimate] = useState(false)
  const [coins, setCoins] = useState(0)

  const isClientSide = typeof window !== 'undefined'

  const [isLoading, setIsLoading] = useState(isClientSide)

  const searchParams = useSearchParams()

  const posthog = usePostHog()

  useEffect(() => {
    if (animate) return

    const timer = setTimeout(() => {
      setAnimate(true)
      setCoins((prev) => {
        const newCoins = prev + 100
        try {
          localStorage.setItem('coins', String(newCoins))
        } catch (error) {}
        return newCoins
      })
    }, 5000)

    return () => clearTimeout(timer)
  }, [animate])

  useEffect(() => {
    if (!isClientSide) return

    const item = localStorage.getItem('coins')

    if (item) {
      try {
        setCoins(parseInt(item))
      } finally {
        setIsLoading(false)
      }
    }
  }, [])

  return (
    <div className="flex items-center justify-center gap-2 md:gap-5">
      <div className="flex items-center justify-end gap-2 rounded-full border border-white/50 p-2 text-xl text-white md:px-3 md:py-2">
        <div className="size-10">
          <Image src={FabCoingIcon} alt="FabCoin" width={46} height={46} className="size-full" />
        </div>
        {coins < 99999 ? (
          <div className="relative">
            <CountUp
              start={Math.max(coins - 100, 0)}
              end={coins}
              duration={2}
              onEnd={() => {
                setAnimate(false)
              }}
              className={cn('inline-block w-[6ch] text-right', {
                'animate-pulse rounded-md bg-neutral-500 text-neutral-500': isLoading,
              })}
            />
            <span
              className={cn('absolute right-0 top-6 text-center text-sm text-accent opacity-0 xl:text-base', {
                'animate-appearDownAndFade': animate,
                hidden: isLoading,
              })}
            >
              +100
            </span>
          </div>
        ) : (
          <div className="w-[6ch]">
            <InfinityIcon size={28} strokeWidth={1.5} className="ml-auto size-7" />
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
        className="h-full rounded-full border border-white/50 p-4"
        onClick={() => posthog?.capture('contact_me_linkedin_sidebar')}
      >
        <LinkedInIconFilled />
        <span className="sr-only">Visit Fabricio&apos;s LinkedIn profile</span>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        data-atrr="github-sidebar"
        href="https://github.com/fabriciopirini"
        aria-label="Checkout my Github profile"
        className="h-full rounded-full border border-white/50 p-4"
        onClick={() => posthog?.capture('contact_me_github_sidebar')}
      >
        <GithubIconFilled />
        <span className="sr-only">Visit Fabricio&apos;s Github profile</span>
      </a>
      <Basket searchParams={searchParams} />
    </div>
  )
}
