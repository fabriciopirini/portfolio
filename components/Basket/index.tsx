'use client'

import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { type ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { useWindowSize } from 'usehooks-ts'

import { PRODUCTS } from '@/app/services'
import { CheckoutButton } from '@/components/CheckoutButton'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { cn, getCartItems, updatedQueryParams } from '@/lib/utils'

export const Basket = ({ searchParams }: { searchParams: ReadonlyURLSearchParams }) => {
  const screen = useWindowSize()

  const isMobile = screen?.width < 768

  const cart = getCartItems(searchParams)

  return (
    <Drawer direction={isMobile ? 'bottom' : 'right'} shouldScaleBackground={false}>
      <DrawerTrigger className="relative flex size-14 items-center justify-center rounded-md border-2 border-white/50 text-primary">
        <ShoppingCartIcon className="size-6" />
        <span className="absolute bottom-1 right-1 z-10 text-sm leading-none">{cart.length}</span>
        <span className="sr-only">Open cart</span>
      </DrawerTrigger>
      <DrawerContent
        className={cn({
          'inset-x-0 bottom-0 h-auto w-full rounded-t-3xl': isMobile,
          'inset-y-0 right-0 ml-5 max-w-[500px] md:h-full md:w-auto': !isMobile,
        })}
        data-vaul-no-drag={!isMobile}
      >
        <div className="mx-auto flex h-auto w-96 flex-col gap-4 p-8 md:h-full md:w-auto md:max-w-md">
          <DrawerHeader className="flex w-full flex-col items-center gap-3 p-0">
            <DrawerTitle>Your Basket</DrawerTitle>
            <DrawerDescription>Checkout with your items</DrawerDescription>
          </DrawerHeader>
          <div className="flex min-h-32 flex-col max-sm:shrink sm:grow">
            {cart.length > 0 ? (
              <ul className="flex flex-col gap-4 divide-y">
                {cart.map((item, i) => (
                  <ProductCartItem key={i} position={i} productId={item} />
                ))}
              </ul>
            ) : (
              <div className="flex grow flex-col items-center justify-center">
                <span>Your basket is empty</span>
                <span>Let&apos;s load it up</span>
              </div>
            )}
          </div>
          <DrawerFooter>
            <CheckoutButton disabled={cart.length === 0} />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const ProductCartItem = ({ productId, position }: { productId: string; position: number }) => {
  const searchParams = useSearchParams()
  const item = PRODUCTS.find((product) => product.id === productId)

  if (!item) return null

  return (
    <li className="flex items-center gap-4 py-4">
      <span>{position + 1}</span>
      <div className="grow">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p className="text-sm">F$ {item.price}</p>
      </div>
      <Link
        href={`/shop${updatedQueryParams(searchParams, { cart: searchParams.get('cart')?.replace(productId, '') ?? '' })}`}
        className="text-xs font-medium"
      >
        Remove
      </Link>
    </li>
  )
}
