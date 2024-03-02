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
  return (
    <div className="flex justify-center p-10">
      <Galery items={[...PRODUCTS]} />
      <SideMe />
    </div>
  )
}

export default ShopFrontPage
