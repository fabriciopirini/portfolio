import Image from 'next/image'

import { NameBanner } from '@/components/Name'
import ProfilePic from '@/public/assets/portrait-grayscale-2.png'

export const Hero = () => (
  <section className="flex w-full grow flex-col items-start justify-center px-4 text-6xl md:flex-row md:px-14">
    <div className="mx-auto flex h-full w-auto grow flex-col justify-center gap-8 text-3xl md:w-full md:pt-10 lg:ml-0 lg:w-auto lg:text-4xl xl:my-auto">
      <NameBanner />
    </div>
    <div className="flex h-full w-full md:w-auto">
      <Image
        className="relative z-[-1] mx-auto mt-8 h-96 w-auto grow brightness-[0.85] sm:h-[500px] md:absolute md:bottom-0 md:right-0 md:h-[600px] lg:mr-36 lg:mt-0 lg:h-[700px] lg:grow-0"
        src={ProfilePic}
        alt="Profile Picture"
        width={500}
        height={800}
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  </section>
)
