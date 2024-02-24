import Image from 'next/image'

import { NameBanner } from '@/components/Name'
import ProfilePic from '@/public/assets/portrait-grayscale-2.avif'
import { BackgroundBeams } from '@/components/BackgroundBeams'

export const Hero = () => (
  <section className="flex min-h-screen w-full grow flex-col items-start justify-center bg-primary-hero px-8 pt-16 text-6xl shadow-xl md:flex-row md:px-36 md:pt-0">
    <div className="z-30 mx-auto flex h-full w-auto grow flex-col justify-center gap-8 text-3xl md:mt-32 md:w-full md:pt-10 lg:ml-0 lg:w-auto lg:text-4xl xl:my-auto">
      <NameBanner />
    </div>
    <div className="flex h-full w-full md:w-auto">
      <Image
        className="relative z-20 mx-auto mt-8 h-auto min-h-[300px] max-h-[500px] w-5/6 grow brightness-[0.85] sm:w-4/6 md:absolute md:bottom-0 md:right-0 md:h-2/3 md:w-auto lg:mr-36 lg:mt-0 lg:grow-0 2xl:max-h-[700px]"
        src={ProfilePic}
        alt="Profile Picture"
        width={500}
        height={800}
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
    <BackgroundBeams />
  </section>
)
