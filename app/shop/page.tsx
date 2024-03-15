import Image from 'next/image'

import { PRODUCTS } from '@/app/services'
import { Galery } from '@/components/GaleryImage'
import { NavBar } from '@/components/NavBar'
import { SideMe } from '@/components/SideMe'
import ProfilePic from '@/public/assets/lego_me.png'

export const runtime = 'edge'

export const metadata = {
  description: "Welcome to Fabricio's Shop! We have a wide variety of high-quality services for you to choose from.",
  openGraph: {
    type: 'website',
  },
}

const ShopFrontPage = async () => {
  return (
    <div className="mb-3 flex flex-col items-center md:mb-10 md:px-10 2xl:px-20">
      <NavBar />
      <ShopHero />
      <Galery items={[...PRODUCTS]} />
      <SideMe />
    </div>
  )
}

export default ShopFrontPage

const ShopHero = () => (
  <section className="relative max-w-[2000px] min-[2000px]:mx-auto">
    <div className="z-10 flex flex-col px-7 md:px-16 lg:flex-row lg:px-32">
      <div className="z-30 mx-auto flex size-full flex-col items-center justify-center gap-8 text-3xl lg:mb-28 lg:w-2/3">
        <div className="size-24 overflow-hidden rounded-full bg-accent ring-4 ring-accent/30 ring-offset-8 ring-offset-primary">
          <Image
            className="mt-7 size-full scale-[1.60]"
            src={ProfilePic}
            alt="Profile Picture"
            width={200}
            height={125}
            priority
          />
        </div>
        <h1 className="text-center font-leagueSpartan text-5xl font-medium md:text-7xl">Fab&apos;s Shop</h1>
        <p className="text-center text-2xl md:text-[28px]">
          We have a wide variety of high-quality services for you to choose from.
        </p>
      </div>
    </div>
  </section>
)
