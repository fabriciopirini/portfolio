'use client'

import { useCallback } from 'react'
import { ShoppingCartIcon } from 'lucide-react'

export const AddToCart = ({
  productId,
  handleAddToCart,
}: {
  productId: string
  handleAddToCart: (productId: string) => Promise<void>
}) => {
  const addToCart = useCallback(async () => await handleAddToCart(productId), [productId, handleAddToCart])

  return (
    <button
      className="flex size-12 items-center justify-center rounded-md bg-primary text-primary-background"
      onClick={addToCart}
    >
      <ShoppingCartIcon className="size-6 text-primary" />
      <span className="sr-only">Add to cart</span>
    </button>
  )
}
