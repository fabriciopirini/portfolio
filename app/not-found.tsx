import Link from 'next/link'

import { NavBar } from '@/components/NavBar'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  throw new Error('Not Found')
  return (
    <div className="mb-3 flex size-full grow flex-col items-center px-4 md:mb-10 md:px-10 2xl:px-20">
      <NavBar />
      <div className="m-auto flex h-full grow flex-col items-center justify-center gap-10 text-center">
        <h2 className="font-leagueSpartan text-xl font-medium lg:text-4xl">Whoops! Empty Shelf!</h2>
        <p className="max-w-lg text-pretty text-lg font-normal lg:text-xl">
          Looks like the page you were trying to visit is out on a coffee break. Let&apos;s navigate back to the
          homepage before it gets lost in the void of cyberspace.
        </p>
        <Link href="/" className="rounded-full">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
