'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { CircleDollarSignIcon, InfinityIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Basket } from '@/components/Basket'
import { cn } from '@/lib/utils'
import Logo from '@/public/assets/logo.svg'

export const ShopNavbar = () => {
  const [animate, setAnimate] = useState(false)
  const [coins, setCoins] = useState(0)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (animate) return

    const timer = setTimeout(() => {
      setAnimate(true)
      setCoins((prev) => prev + 100)
    }, 5000)

    return () => clearTimeout(timer)
  }, [animate])

  return (
    <nav className="container relative flex h-[var(--nav-height-shop)] w-full items-center justify-between p-4 lg:px-6">
      <Link
        href="/"
        aria-label="Back to main site"
        className="flex items-center gap-1 text-base font-semibold"
        prefetch={false}
      >
        {/* <ChevronLeftIcon size={14} /> */}
        <span className="max-md:max-w-24">Back to main site</span>
      </Link>
      <div className="flex">
        {/* <LogoSquare className="border border-accent" /> */}
        <h1 className="flex-none border-b-2 border-accent text-lg font-semibold uppercase sm:block md:text-2xl">
          <span className="hidden sm:block">
            Fab&apos;s <span className="block sm:inline">shop</span>
          </span>
          <span className="sr-only">Fab&apos;s Shop</span>
        </h1>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-5">
        <div className="flex items-center justify-end gap-2 p-2 text-xl text-white md:px-5 md:py-3">
          {coins < 9999 ? (
            <div className="relative">
              <CountUp
                start={Math.max(coins - 100, 0)}
                end={coins}
                duration={2}
                onEnd={() => {
                  console.log('Ended count up')
                  setAnimate(false)
                }}
                className="inline-block w-[4ch] text-right"
              />
              <span
                className={cn('absolute right-0 top-6 text-center text-sm text-accent opacity-0', {
                  'animate-appearDownAndFade': animate,
                })}
              >
                +100
              </span>
            </div>
          ) : (
            <div className="w-[4ch]">
              <InfinityIcon size={28} strokeWidth={1.5} className="ml-auto size-7" />
            </div>
          )}
          <CircleDollarSignIcon size={24} className="stroke-[#373943] text-accent" fill="currentColor" />
          {/* <SwissFrancIcon size={24} className="text-accent" /> */}
          {/* <span className="text-2xl font-medium italic text-accent">F</span> */}
        </div>
        <Basket searchParams={searchParams} />
      </div>
    </nav>
  )
}

export const LogoSquare = ({ size, className }: { size?: 'sm' | undefined; className?: string }) => {
  return (
    <div
      className={cn(
        'flex flex-none items-center justify-center border border-neutral-700 bg-black',
        {
          'size-[40px] rounded-xl': !size,
          'size-[30px] rounded-lg': size === 'sm',
        },
        className
      )}
    >
      <Image
        className={cn({
          'size-[16px]': !size,
          'size-[10px]': size === 'sm',
        })}
        src={Logo}
        alt="Logo"
        width={64}
        height={64}
      />
    </div>
  )
}
