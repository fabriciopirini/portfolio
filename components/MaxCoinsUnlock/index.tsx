'use client'

import { useEffect, useRef } from 'react'

import { useAppStore } from '@/providers/app-store-provider'
import { MAX_COINS } from '@/stores/app-store'

const triggerConfetti = () => {
  import('canvas-confetti').then((mod) => {
    mod.default({
      particleCount: 30,
      spread: 25,
      startVelocity: 20,
      gravity: 1.2,
      origin: { x: 0.88, y: 0.06 },
      colors: ['#ffc457', '#BF9137'],
      disableForReducedMotion: true,
    })
  })
}

export const MaxCoinsUnlock = () => {
  const { coins, hasReachedMaxCoins, unlockMaxCoins, _hasHydrated } = useAppStore((state) => state)
  const hasFired = useRef(false)

  useEffect(() => {
    if (!_hasHydrated || hasReachedMaxCoins || hasFired.current) return
    if (coins < MAX_COINS) return

    hasFired.current = true
    unlockMaxCoins()
    triggerConfetti()
  }, [coins, _hasHydrated, hasReachedMaxCoins, unlockMaxCoins])

  return null
}
