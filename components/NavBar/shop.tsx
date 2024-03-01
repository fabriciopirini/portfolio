import { ChevronLeftIcon, CoinsIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Basket } from '@/components/Basket'
import { cn } from '@/lib/utils'
import Logo from '@/public/assets/logo.svg'

export const ShopNavbar = () => {
  return (
    <nav className="relative flex h-[var(--nav-height-shop)] items-center justify-between p-4 md:mx-10 lg:px-6">
      <Link href="/" aria-label="Back to main site" className="flex items-center gap-1 text-base" prefetch={false}>
        {/* <ChevronLeftIcon size={14} /> */}
        <span>Back to main site</span>
      </Link>
      <div className="flex">
        <Link
          href="/shop"
          aria-label="Go to the shop home page"
          className="flex w-full items-center justify-center gap-2 md:w-auto"
        >
          {/* <LogoSquare className="border border-accent" /> */}
          <h1 className="flex-none text-lg font-semibold uppercase sm:block md:text-2xl">
            Fab&apos;s <span className="block sm:inline">shop</span>
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-5">
        <div className="flex items-center justify-end gap-2 px-5 py-3 text-xl text-white">
          139
          <CoinsIcon size={20} className="text-accent" />
        </div>
        <Basket />
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
