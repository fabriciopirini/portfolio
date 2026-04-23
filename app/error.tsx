'use client'

import { useEffect } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { COPY } from '@/lib/site-copy'

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="mb-3 flex size-full grow flex-col items-center px-4 md:mb-10 md:px-10 2xl:px-20" role="alert" aria-live="assertive">
      <div className="m-auto flex h-full grow flex-col items-center justify-center gap-10 text-center">
        <h2 className="font-leagueSpartan text-xl font-medium lg:text-4xl">{COPY.errors.error.heading}</h2>
        <p className="max-w-lg text-lg font-normal lg:text-xl">{COPY.errors.error.body}</p>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          {COPY.errors.error.retry}
        </Button>
        <Link href="/" transitionTypes={['navigate-back']} className="rounded-full">
          <Button variant="outline" className="text-primary">
            {COPY.errors.error.home}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Error
