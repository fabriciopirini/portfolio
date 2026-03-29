'use client'

import { useAppStore } from '@/providers/app-store-provider'

export const ShopHeroSubtitle = () => {
  const hasReachedMaxCoins = useAppStore((state) => state.hasReachedMaxCoins)

  return (
    <p className="text-center lg:text-3xl">
      {hasReachedMaxCoins
        ? "All those coins, and now you know what to spend them on: someone who makes it right the first time. World-class work isn't cheap. It just pays for itself."
        : 'We have a wide variety of high-quality services for you to choose from.'}
    </p>
  )
}
