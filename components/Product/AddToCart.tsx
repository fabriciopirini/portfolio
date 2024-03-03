'use client'

import { CheckIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { cn, getCartItems } from '@/lib/utils'

const CART_BUTTON_BASE_STYLE = 'flex size-12 items-center justify-center rounded-md bg-primary drop-shadow-md'

const isProductInCart = (cart: string[], productId: string) => cart.includes(productId)

export const AddToCart = ({ productId }: { productId: string }) => {
  const searchParams = useSearchParams()
  const cart = getCartItems(searchParams)

  if (isProductInCart(cart, productId)) {
    return (
      <div className={cn(CART_BUTTON_BASE_STYLE, 'relative bg-green-500 text-primary')}>
        <ShoppingCartIcon className="size-6" />
        <div className="absolute bottom-2 right-2 z-10 size-3 rounded-full bg-green-500">
          <CheckIcon className="size-3" />
        </div>
        <span className="sr-only">In cart</span>
      </div>
    )
  }

  const queryParams = new URLSearchParams({
    cart: [...cart, productId].join(','),
    ...(searchParams.get('interactionEnded')
      ? { interactionEnded: searchParams.get('interactionEnded') as string }
      : {}),
  })

  return (
    <Link
      href={`/shop?${new URLSearchParams(queryParams)}`}
      className={cn(CART_BUTTON_BASE_STYLE, 'duration-300 ease-in-out hover:scale-105')}
      scroll={false}
    >
      <ShoppingCartIcon className="size-6 text-primary" />
      <span className="sr-only">Add to cart</span>
    </Link>
  )
}
