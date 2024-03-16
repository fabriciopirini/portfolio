'use client'

import Image from 'next/image'

import type { PRODUCTS } from '@/app/services'
import { AddToCart } from '@/components/Product/AddToCart'
import FabCoinIcon from '@/public/assets/fab-coin-icon.png'

export const Galery = ({ items }: { items: (typeof PRODUCTS)[number][] }) => {
  return (
    <div className="mx-auto flex max-w-[1800px] flex-wrap justify-center gap-4 xl:gap-16">
      {items.map((item) => (
        <div key={item.id} className="group size-[500px] overflow-hidden rounded-lg text-secondary">
          <div className="flex aspect-square size-full flex-col justify-between bg-neutral-50 sm:p-10">
            <div>
              <h2 className="font-leagueSpartan text-4xl">{item.name}</h2>
              <div className="relative md:h-80">
                <div className="p-5 transition duration-300 ease-linear group-hover:hidden group-hover:opacity-0">
                  {item.featuredImage.staticImage}
                </div>
                <div className="hidden py-5 opacity-0 transition-opacity duration-300 ease-linear group-hover:block group-hover:opacity-100">
                  <p className="text-lg">{item.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xl">
                <Image src={FabCoinIcon} alt="FabCoin" width={36} height={36} className="size-9" />
                <span>{item.price}</span>
                <span className="whitespace-nowrap">Fab coins</span>
              </span>
              <AddToCart productId={item.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
