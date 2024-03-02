'use client'

import { useCallback } from 'react'
import { Masonry } from 'react-plock'

import { PRODUCTS } from '@/app/services'
import { AddToCart } from '@/components/Product/AddToCart'
import { Label } from '@/components/Product/label'

const imagesHeight = PRODUCTS.map((product) => {
  const variation = 150
  const base = 700

  const height = base + Math.floor(Math.random() * variation * 2) - variation

  return { productId: product.id, height }
})

export const Galery = ({
  items,
  handleAddToCart,
}: {
  items: (typeof PRODUCTS)[number][]
  handleAddToCart: (productId: string) => Promise<void>
}) => {
  console.log('Galery render')

  console.log(imagesHeight)

  return (
    <Masonry
      items={items}
      config={{
        columns: [1, 2, 3],
        gap: [24, 24, 24],
        media: [1024, 1536, 2048],
      }}
      render={(item: (typeof PRODUCTS)[number]) => (
        <div key={item.id} className="group relative overflow-hidden rounded-md">
          <div
            className="hidden w-full bg-neutral-400 sm:block sm:p-20"
            style={{ height: imagesHeight.find((image) => image.productId === item.id)?.height }}
          >
            {item.featuredImage.staticImage}
          </div>
          <div className="block h-[400px] w-full bg-neutral-400 p-5 sm:hidden">{item.featuredImage.staticImage}</div>
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-black/5 via-10% to-black/50 transition-opacity duration-300 ease-linear group-hover:opacity-100 hover-hover:opacity-0 hover-none:opacity-100 sm:h-1/3">
            <div className="absolute bottom-0 left-0 flex flex-col gap-4 p-5 pb-24 md:pb-16">
              {/* <h3 className="hidden text-xl font-semibold text-white md:block">{item.name}</h3> */}
              <p className="flex items-center justify-center text-lg font-semibold text-primary">{item.description}</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 flex w-full items-end justify-between pb-4 pl-4 pr-2 pt-2">
            {/* <h3 className="block text-lg font-semibold text-white md:hidden">{item.name}</h3> */}
            <Label title={item.name} amount={item.price} />
            <AddToCart productId={item.id} handleAddToCart={handleAddToCart} />
          </div>
        </div>
      )}
    />
  )
}
