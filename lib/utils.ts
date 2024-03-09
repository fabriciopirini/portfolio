import { PRODUCTS } from '@/app/services'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import type { ReadonlyURLSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getCartItems = (searchParams: URLSearchParams | ReadonlyURLSearchParams) => {
  const cart = [...new Set(searchParams.get('cart')?.split(','))] ?? []

  return cart.filter((item) => PRODUCTS.find((product) => product.id === item))
}

export const updatedQueryParams = (
  searchParams: URLSearchParams | ReadonlyURLSearchParams,
  updates: Record<string, string | boolean>
) => {
  // Define a list of supported query parameters
  const supportedParams = ['cart', 'showSideBubble']

  // Initialize newParams with existing searchParams
  const newParams = { ...Object.fromEntries(searchParams) }

  // Filter and apply updates for supported parameters
  Object.entries(updates)
    .filter(([key]) => supportedParams.includes(key))
    .forEach(([key, value]) => {
      if (key === 'cart' && typeof value === 'string') {
        // Split the cart string into an array, filter through getCartItems to remove non-existent products
        const validCartItems = getCartItems(new URLSearchParams({ cart: value }))
        newParams[key] = validCartItems.join(',')
      } else if (typeof value === 'boolean') {
        newParams[key] = value.toString()
      } else {
        newParams[key] = value
      }
    })

  // Ensure the cart is always filtered to contain only valid items
  if (newParams.cart) {
    const validCartItems = getCartItems(new URLSearchParams({ cart: newParams.cart }))
    newParams.cart = validCartItems.join(',')
  }

  const queryString = new URLSearchParams(newParams).toString()

  return queryString ? `?${queryString}` : ''
}
