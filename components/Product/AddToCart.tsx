'use client'

import { CheckIcon } from 'lucide-react'

import { CartIconFilled } from '@/components/SvgLogos'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/providers/app-store-provider'

const CART_BUTTON_BASE_STYLE = 'rounded-full p-3'

export const AddToCart = ({ productId }: { productId: string }) => {
  const { cartItems, addProduct } = useAppStore((state) => state)

  const isProductInCart = cartItems.includes(productId)

  if (isProductInCart) {
    return (
      <button
        className={cn(
          CART_BUTTON_BASE_STYLE,
          'relative flex cursor-default items-center justify-center bg-green-500 text-primary'
        )}
      >
        <CartIconFilled className="size-5 lg:size-7" />
        <div className="absolute bottom-2 right-2 z-10 flex size-[15px] items-center justify-center rounded-full bg-green-600">
          <CheckIcon className="size-3" />
        </div>
        <span className="sr-only">In cart</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => addProduct(productId)}
      className={cn(
        CART_BUTTON_BASE_STYLE,
        'bg-accent drop-shadow-md transition-transform duration-200 ease-in-out hover:scale-105'
      )}
    >
      <CartIconFilled fill="#373943" className="size-5 lg:size-7" />
      <span className="sr-only">Add to cart</span>
    </button>
  )
}
