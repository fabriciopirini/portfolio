import { Galery } from '@/components/GaleryImage'

export const runtime = 'edge'

export const metadata = {
  description: "Welcome to Fabricio's Shop! We have a wide variety of high-quality services for you to choose from.",
  openGraph: {
    type: 'website',
  },
}

const ShopFrontPage = () => {
  const flexDimension = () => {
    const variation = 250

    return Math.floor(Math.random() * variation * 2) - variation
  }

  // const photos = PRODUCTS.map((product) => product.featuredImage.staticImage)
  const photos = Array.from({ length: 20 }, (_, i) => `https://picsum.photos/900/${700 + flexDimension()}?random=${i}`)

  return (
    <div className="flex justify-center p-10">
      <Galery photos={photos} />
    </div>
  )
}

export default ShopFrontPage
