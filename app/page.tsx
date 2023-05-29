import ProfilePic from '@/public/assets/portrait-grayscale-2.png'
import Logo from '@/public/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-20">
      <nav className="flex w-full items-center justify-between py-16 text-3xl font-light">
        <div className="absolute hidden md:block">
          <Image className="h-12 w-auto 2xl:h-16" src={Logo} alt="Logo" width={75} height={75} />
        </div>
        <div className="flex w-full flex-row items-center">
          <ul className="flex w-full flex-row items-center justify-center gap-8 lg:gap-20">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Portifolio</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className="flex w-full flex-grow flex-col items-start justify-center px-4 text-6xl md:px-14">
        <div className="mx-auto flex h-full w-auto flex-grow flex-col justify-center gap-8 text-4xl  md:w-full lg:ml-0 lg:w-auto">
          <div>
            <p>
              I&apos;m{' '}
              <span className="inline-block text-5xl font-medium text-accent md:pl-3 md:text-7xl">Fabricio Pirini</span>
            </p>
            <p>Frontend Engineer</p>
            <p>Based in Norway</p>
          </div>
          <div>
            <button className="rounded-xl border-4 border-accent bg-inherit px-6 py-2 text-2xl text-accent transition duration-500 hover:scale-105 hover:bg-accent hover:text-primary-background motion-reduce:scale-100 motion-reduce:duration-0">
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex h-full w-full">
          <Image
            className="relative bottom-0 right-0 z-[-1] mx-auto mt-8 h-96 w-auto sm:h-[500px] md:h-[600px] lg:absolute lg:mr-36 lg:mt-0 lg:h-[700px] xl:h-[800px]"
            src={ProfilePic}
            alt="Profile Picture"
            width={500}
            height={800}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </section>
    </main>
  )
}
