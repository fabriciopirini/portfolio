'use client'

import Image from 'next/image'

import { PRODUCTS } from '@/app/services'
import { AddToCart } from '@/components/Product/AddToCart'
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel'
import FabCoinIcon from '@/public/assets/fab-coin-icon.png'

export const Galery = () => {
  return (
    <div className="mx-auto flex max-w-[1800px] flex-wrap justify-center gap-6 pb-20 xl:gap-16">
      {PRODUCTS.map((item) => (
        <div key={item.id} className="group size-[345px] overflow-hidden rounded text-secondary lg:size-[450px]">
          <div className="flex aspect-square size-full flex-col justify-between bg-neutral-50 p-6 lg:p-10">
            <div>
              <h2 className="font-leagueSpartan text-3xl lg:text-4xl">{item.name}</h2>
              <CardContentDesktop item={item} />
              <CardContentMobile item={item} />
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 lg:text-xl">
                <Image src={FabCoinIcon} alt="FabCoin" width={36} height={36} className="size-7 lg:size-9" />
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

const CardContentDesktop = ({ item }: { item: (typeof PRODUCTS)[number] }) => (
  <div className="max-lg:hidden lg:h-72">
    <div className="size-full p-5 transition duration-300 ease-linear group-hover:hidden group-hover:opacity-0">
      {item.featuredImage.staticImage}
    </div>
    <div className="hidden size-full py-2 opacity-0 transition-opacity duration-300 ease-linear group-hover:block group-hover:opacity-100 lg:py-5">
      <p className="text-lg">{item.description}</p>
    </div>
  </div>
)

const CardContentMobile = ({ item }: { item: (typeof PRODUCTS)[number] }) => (
  <Carousel className="flex w-full flex-col gap-3 lg:hidden">
    <CarouselContent className="h-44 text-left">
      <CarouselItem>
        <div className="size-full select-none p-5">{item.featuredImage.staticImage}</div>
      </CarouselItem>
      <CarouselItem>
        <div className="size-full py-2">
          <p className="select-none text-lg">{item.description}</p>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselDots isDarkMode={false} />
  </Carousel>
)
