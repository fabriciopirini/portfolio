'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="ledger-page" role="alert" aria-live="assertive">
      <main className="page">
        <h1>Something went wrong</h1>
        <p className="support">This page failed to load.</p>
        <ul className="contact">
          <li>
            <button type="button" onClick={reset}>
              Try again
            </button>
          </li>
          <li>
            <a href="/">Back to the homepage</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Error
