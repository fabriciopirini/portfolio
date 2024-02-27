import { Carousel } from '@/components/Grid/carousel'
import { ThreeItemGrid } from '@/components/Grid/three-items'

export const runtime = 'edge'

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website',
  },
}

const ShopFrontPage = () => {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
    </>
  )
}

export default ShopFrontPage
