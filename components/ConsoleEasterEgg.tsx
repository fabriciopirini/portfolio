'use client'

import { useEffect } from 'react'

export const ConsoleEasterEgg = () => {
  useEffect(() => {
    console.log(
      '\n%cFabricio Pirini%c\n\nYou opened DevTools. I respect that.\n\n%cBuilt with Next.js 16, React 19, Framer Motion, and strong opinions about spacing.\n\n%cWant to build something together? → fabricio@fabriciopirini.com\n\n',
      'background: #ffc457; color: #0a0e1a; font-size: 24px; font-weight: 700; padding: 2px 6px; border-radius: 3px;',
      'color: #f5f5f5; font-size: 14px;',
      'color: #a5aab8; font-size: 13px;',
      'color: #ffc457; font-size: 13px;'
    )
  }, [])

  return null
}
