'use client'

import { useEffect } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="mb-3 flex size-full grow flex-col items-center px-4 md:mb-10 md:px-10 2xl:px-20">
      <div className="m-auto flex h-full grow flex-col items-center justify-center gap-10 text-center">
        <h2 className="font-leagueSpartan text-xl font-medium lg:text-4xl">Glitch in the Matrix</h2>
        <p className="max-w-lg text-pretty text-lg font-normal lg:text-xl">
          Our website&apos;s conveyor belt seems to have hit a snag. While we reboot the system, why not try refreshing,
          or head back to the safety of the homepage?
        </p>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <Link href="/" className="rounded-full">
          <Button variant="outline" className="text-primary">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Error
