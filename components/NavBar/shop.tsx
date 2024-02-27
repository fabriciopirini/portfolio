'use client'

import { ChevronLeftIcon, CoinsIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import Logo from '@/public/assets/logo.svg'

export const ShopNavbar = () => {
  return (
    <nav className="relative flex h-[var(--nav-height-shop)] items-center justify-between p-4 lg:px-6">
      <Link href="/" aria-label="Back to main site" className="flex items-center gap-1 text-base" prefetch={false}>
        <ChevronLeftIcon size={14} />
        <span className="hidden md:block">Back to main site</span>
      </Link>
      <div className="flex">
        <Link
          href="/shop"
          aria-label="Go to the shop home page"
          className="flex w-full items-center justify-center gap-2 md:w-auto"
        >
          <LogoSquare className="border border-accent" />
          <div className="hidden flex-none text-lg font-semibold uppercase sm:block">Fab&apos;s shop</div>
        </Link>
      </div>
      <div className="flex items-center justify-end gap-2 rounded-full bg-accent px-5 py-3 text-xl text-primary-background">
        139
        <CoinsIcon size={20} />
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
