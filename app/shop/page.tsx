import Image from 'next/image'

import { Galery } from '@/components/GaleryImage'
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
    <div className="mb-3 flex flex-col items-center px-4 md:mb-10 md:px-10 2xl:px-20">
      <ShopHero />
      <Galery />
    </div>
  )
}

export default ShopFrontPage

const ShopHero = () => (
  <section className="relative mb-10 max-w-[2000px] lg:mb-28 min-[2000px]:mx-auto">
    <div className="z-10 flex flex-col px-7 md:px-16 lg:flex-row lg:px-32">
      <div className="z-30 mx-auto flex size-full flex-col items-center justify-center gap-8 lg:w-2/3">
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
        <h1 className="text-center font-leagueSpartan text-4xl font-medium lg:text-7xl">Fab&apos;s Shop</h1>
        <p className="text-center lg:text-3xl">
          We have a wide variety of high-quality services for you to choose from.
        </p>
      </div>
    </div>
  </section>
)
