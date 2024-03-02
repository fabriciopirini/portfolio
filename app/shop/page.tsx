import { cookies } from 'next/headers'

import { PRODUCTS } from '@/app/services'
import { Galery } from '@/components/GaleryImage'
import { SideMe } from '@/components/SideMe'

export const runtime = 'edge'

export const metadata = {
  description: "Welcome to Fabricio's Shop! We have a wide variety of high-quality services for you to choose from.",
  openGraph: {
    type: 'website',
  },
}

const ShopFrontPage = async () => {
  const handleAddToCart = async (productId: string) => {
    'use server'
    console.log('Adding to cart', productId)

    const basket = cookies().get('cart')?.value

    cookies().set(
      'cart',
      basket ? JSON.stringify([...new Set([...JSON.parse(basket), productId])]) : JSON.stringify([productId]),
      {
        path: '/shop',
      }
    )
  }

  return (
    <div className="flex justify-center p-10">
      <Galery items={[...PRODUCTS]} handleAddToCart={handleAddToCart} />
      <SideMe />
    </div>
  )
}

export default ShopFrontPage
