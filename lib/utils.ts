import { PRODUCTS } from '@/app/services'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import type { ReadonlyURLSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

export const getCartItems = (searchParams: ReadonlyURLSearchParams) => {
  const cart = [...new Set(searchParams.get('cart')?.split(','))] ?? []

  return cart.filter((item) => PRODUCTS.find((product) => product.id === item))
}

export const removeCartItemFromQuery = (searchParams: ReadonlyURLSearchParams, productId: string) => {
  const cart = getCartItems(searchParams)

  const newCart = cart.filter((item) => item !== productId)

  return new URLSearchParams({ ...Object.fromEntries(searchParams), cart: newCart.join(',') })
}
