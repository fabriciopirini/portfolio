'use client'

import { CheckIcon } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { CartIconFilled } from '@/components/SvgLogos'
import { cn, getCartItems, updatedQueryParams } from '@/lib/utils'

const CART_BUTTON_BASE_STYLE = 'flex size-12 items-center justify-center rounded-md bg-primary drop-shadow-md'

const isProductInCart = (cart: string[], productId: string) => cart.includes(productId)

export const AddToCart = ({ productId }: { productId: string }) => {
  const searchParams = useSearchParams()
  const cart = getCartItems(searchParams)

  if (isProductInCart(cart, productId)) {
    return (
      <div className={cn(CART_BUTTON_BASE_STYLE, 'relative rounded-full border bg-green-500 p-3 text-primary')}>
        <CartIconFilled />
        <div className="absolute bottom-2 right-2 z-10 flex size-[15px] items-center justify-center rounded-full bg-green-600">
          <CheckIcon className="size-3" />
        </div>
        <span className="sr-only">In cart</span>
      </div>
    )
  }

  const queryParams = updatedQueryParams(searchParams, {
    cart: [...cart, productId].join(','),
    ...(searchParams.get('showSideBubble') ? { showSideBubble: searchParams.get('showSideBubble') as string } : {}),
  })

  return (
    <Link
      href={`/shop${queryParams}`}
      className={cn(
        CART_BUTTON_BASE_STYLE,
        'rounded-full border bg-accent p-3 duration-300 ease-in-out hover:scale-105'
      )}
      scroll={false}
    >
      <CartIconFilled fill="#373943" />
      <span className="sr-only">Add to cart</span>
    </Link>
  )
}
