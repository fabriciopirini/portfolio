import { CircleDollarSignIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Basket } from '@/components/Basket'
import { cn } from '@/lib/utils'
import Logo from '@/public/assets/logo.svg'

export const ShopNavbar = () => {
  return (
    <nav className="relative flex h-[var(--nav-height-shop)] items-center justify-between p-4 md:mx-10 lg:px-6">
      <Link
        href="/"
        aria-label="Back to main site"
        className="flex items-center gap-1 text-base font-semibold"
        prefetch={false}
      >
        {/* <ChevronLeftIcon size={14} /> */}
        <span>Back to main site</span>
      </Link>
      <div className="flex">
        {/* <LogoSquare className="border border-accent" /> */}
        <h1 className="flex-none border-b-2 border-accent text-lg font-semibold uppercase sm:block md:text-2xl">
          Fab&apos;s <span className="block sm:inline">shop</span>
        </h1>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-5">
        <div className="flex items-center justify-end gap-2 px-5 py-3 text-xl text-white">
          139
          <CircleDollarSignIcon size={24} className="stroke-[#373943] text-accent" fill="currentColor" />
          {/* <SwissFrancIcon size={24} className="text-accent" /> */}
          {/* <span className="text-2xl font-medium italic text-accent">F</span> */}
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
