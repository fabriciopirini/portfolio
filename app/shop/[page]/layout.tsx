import { Suspense } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <div className="w-full">
        <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </Suspense>
  )
}

export default Layout
