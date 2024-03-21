'use client'

import { CheckIcon } from 'lucide-react'

import { PRODUCTS } from '@/app/services'
import { CartIconFilled } from '@/components/SvgLogos'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/providers/app-store-provider'

const CART_BUTTON_BASE_STYLE =
  'rounded-full p-3 drop-shadow-md transition-transform duration-200 ease-in-out hover:scale-105'

export const AddToCart = ({ productId }: { productId: string }) => {
  const { cartItems, addProduct, removeProduct, coins } = useAppStore((state) => state)

  const isProductInCart = cartItems.includes(productId)
  const product = PRODUCTS.find((item) => item.id === productId)

  if (!product) {
    return null
  }

  if (isProductInCart) {
    return (
      <button
        onClick={() => removeProduct(productId)}
        className={cn(CART_BUTTON_BASE_STYLE, 'relative flex items-center justify-center bg-green-500 text-primary')}
      >
        <CartIconFilled className="pointer-events-none size-5 lg:size-7" />
        <div className="absolute bottom-2 right-2 z-10 flex size-[15px] items-center justify-center rounded-full bg-green-600">
          <CheckIcon className="pointer-events-none size-3" />
        </div>
        <span className="sr-only">In cart</span>
      </button>
    )
  }

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => addProduct(productId)}
            aria-disabled={product.price > coins}
            disabled={product.price > coins}
            className={cn(
              CART_BUTTON_BASE_STYLE,
              'bg-accent disabled:bg-neutral-300 disabled:text-neutral-500 disabled:hover:scale-100'
            )}
          >
            <CartIconFilled fill="#373943" className="pointer-events-none size-5 lg:size-7" />
            <span className="sr-only">Add to cart</span>
          </button>
        </TooltipTrigger>
        <TooltipContent className="rounded" hidden={product.price <= coins}>
          <p>Not enough coins</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
