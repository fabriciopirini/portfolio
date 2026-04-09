'use client'

import { useEffect } from 'react'

import { COPY } from '@/lib/site-copy'

export const ConsoleEasterEgg = () => {
  useEffect(() => {
    console.log(
      COPY.consoleMessage,
      'background: #ffc457; color: #0a0e1a; font-size: 24px; font-weight: 700; padding: 2px 6px; border-radius: 3px;',
      'color: #f5f5f5; font-size: 14px;',
      'color: #a5aab8; font-size: 13px;',
      'color: #ffc457; font-size: 13px;'
    )
  }, [])

  return null
}
