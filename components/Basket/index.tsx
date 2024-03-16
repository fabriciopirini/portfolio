'use client'

import { Trash2Icon } from 'lucide-react'
import { useWindowSize } from 'usehooks-ts'

import { PRODUCTS } from '@/app/services'
import { CheckoutButton } from '@/components/CheckoutButton'
import { CartIconFilled } from '@/components/SvgLogos'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/providers/app-store-provider'

export const Basket = () => {
  const cart = useAppStore((state) => state.cartItems)
  const screen = useWindowSize()

  const isMobile = screen?.width < 768

  return (
    <Drawer direction={isMobile ? 'bottom' : 'right'} shouldScaleBackground={false}>
      <DrawerTrigger className="relative flex items-center justify-center rounded-full border border-white/50 p-4 text-primary">
        <CartIconFilled />
        <div className="absolute right-0 top-0 z-10 aspect-square size-6 rounded-full bg-accent p-1 text-sm leading-none text-secondary">
          <span>{cart.length}</span>
          <span className="sr-only">Open cart</span>
        </div>
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
          <div className="flex min-h-32 flex-col max-sm:shrink sm:grow md:min-w-80">
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
  const removeProduct = useAppStore((state) => state.removeProduct)
  const item = PRODUCTS.find((product) => product.id === productId)

  if (!item) return null

  return (
    <li className="flex items-center gap-6 py-4">
      <span>{position + 1}</span>
      <div className="grow">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p className="text-sm">F$ {item.price}</p>
      </div>
      <button onClick={() => removeProduct(productId)} className="text-xs font-medium">
        <Trash2Icon className="size-5" />
        <span className="sr-only">Remove from cart</span>
      </button>
    </li>
  )
}
