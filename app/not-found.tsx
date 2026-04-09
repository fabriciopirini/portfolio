import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { COPY } from '@/lib/site-copy'

const NotFoundPage = () => {
  return (
    <div className="mb-3 flex size-full grow flex-col items-center px-4 md:mb-10 md:px-10 2xl:px-20">
      <div className="m-auto flex h-full grow flex-col items-center justify-center gap-10 text-center">
        <h2 className="font-leagueSpartan text-xl font-medium lg:text-4xl">{COPY.errors.notFound.heading}</h2>
        <p className="max-w-lg text-lg font-normal lg:text-xl">{COPY.errors.notFound.body}</p>
        <Link href="/" transitionTypes={['navigate-back']} className="rounded-full">
          <Button>{COPY.errors.notFound.cta}</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
