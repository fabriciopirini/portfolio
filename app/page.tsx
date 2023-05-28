import ProfilePic from '@/public/assets/portrait-grayscale-2.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-24">
      <nav className="flex w-full items-center justify-between py-16 text-2xl font-light md:text-4xl">
        <div className="absolute">Icon</div>
        <div className="flex w-full flex-row items-center">
          <ul className="flex w-full flex-row items-center justify-center gap-7 md:gap-20">
            <li>About</li>
            <li>Portifolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <section className="flex w-full flex-grow flex-col items-start justify-center px-14 text-6xl">
        <div className="flex h-full flex-col text-4xl">
          <p>
            I&apos;m <span className="inline-block text-7xl text-accent md:pl-3">Fabricio Pirini</span>
          </p>
          <p>Frontend Engineer</p>
          <p>Based in Norway</p>
        </div>
        <div className="flex">
          <Image
            className="relative bottom-0 right-0 z-[-1] mr-auto mt-8 md:absolute md:mr-36 md:mt-0"
            src={ProfilePic}
            alt="Profile Picture"
            width={500}
            height={800}
          />
        </div>
      </section>
    </main>
  )
}
