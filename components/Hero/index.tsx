import { BackgroundBeams } from '@/components/BackgroundBeams'
import { HeroLegoImage } from '@/components/HeroLegoImage'
import { NameBanner } from '@/components/Name'
import { NavBar } from '@/components/NavBar'

export const Hero = () => (
  <section className="relative max-w-[2000px] min-[2000px]:mx-auto">
    <NavBar />
    <div className="z-10 flex flex-col px-7 md:px-16 lg:flex-row xl:px-32 [&_*]:z-10">
      <div className="z-30 mx-auto size-full justify-center gap-8 text-3xl lg:mb-44 lg:w-1/2">
        <NameBanner />
      </div>
      <div className="relative z-10 m-auto mb-0 size-full max-w-xl pt-14 lg:pt-0 xl:max-w-3xl">
        <HeroLegoImage />
      </div>
    </div>
    <BackgroundBeams className="flex md:hidden" isMobile />
    <BackgroundBeams className="hidden md:flex" />
  </section>
)
