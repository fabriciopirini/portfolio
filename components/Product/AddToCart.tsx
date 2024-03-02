'use client'

import { CheckIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const cartParamNoDuplicates = (cart: string | null, productId: string) => {
  if (!cart) return productId

  const cartArray = cart.split(',')
  const newCartArray = [...new Set([...cartArray, productId])]

  return newCartArray.join(',')
}

const isProductInCart = (cart: string, productId: string) => cart.split(',').includes(productId)

export const AddToCart = ({ productId }: { productId: string }) => {
  const searchParams = useSearchParams()
  const cart = searchParams.get('cart')

  if (cart && isProductInCart(cart, productId)) {
    return (
      <div className="relative flex size-12 items-center justify-center rounded-md bg-green-500 text-primary">
        <ShoppingCartIcon className="size-6" />
        <div className="absolute bottom-2 right-2 z-10 size-3 rounded-full bg-green-500">
          <CheckIcon className="size-3" />
        </div>
        <span className="sr-only">In cart</span>
      </div>
    )
  }

  const queryParams = new URLSearchParams({
    cart: cartParamNoDuplicates(cart, productId),
    ...(searchParams.get('interactionEnded')
      ? { interactionEnded: searchParams.get('interactionEnded') as string }
      : {}),
  })

  return (
    <Link
      href={`/shop?${new URLSearchParams(queryParams)}`}
      className="flex size-12 items-center justify-center rounded-md bg-primary"
      scroll={false}
    >
      <ShoppingCartIcon className="size-6 text-primary" />
      <span className="sr-only">Add to cart</span>
    </Link>
  )
}
