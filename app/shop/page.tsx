import { Carousel } from '@/components/Grid/carousel'
import { ThreeItemGrid } from '@/components/Grid/three-items'

export const runtime = 'edge'

export const metadata = {
  description: "Welcome to Fabricio's Shop! We have a wide variety of high-quality services for you to choose from.",
  openGraph: {
    type: 'website',
  },
}

const ShopFrontPage = () => {
  return (
    <div className="flex h-full-with-shop-nav flex-col">
      <ThreeItemGrid />
      <Carousel />
    </div>
  )
}

export default ShopFrontPage
