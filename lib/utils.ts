import { PRODUCTS } from '@/app/services'
import { MAX_COINS } from '@/stores/app-store'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import type { ReadonlyURLSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const calculateCoinsToAdd = (currentBalance: number): number => {
  const maxBalance = MAX_COINS
  const maxIncrement = 100

  // Ensure the current balance is within the allowed range
  if (currentBalance < 0 || currentBalance >= maxBalance) {
    return 0
  }

  // Calculate the percentage of the balance relative to the maxBalance
  const percentageOfMax = currentBalance / maxBalance

  // Determine the decrement factor based on the balance's closeness to the max
  // This factor scales the maximum increment down as the balance increases
  let decrementFactor = (1 - percentageOfMax) * maxIncrement

  // Make the decrement factor "human-friendly" by ensuring it's divisible by 5
  decrementFactor = Math.ceil(decrementFactor / 5) * 5

  // The actual increment is the smaller of the decrement factor or the space left to maxBalance
  let actualIncrement = Math.min(decrementFactor, maxBalance - currentBalance)

  // Ensure the increment is at least 5 if there's space, to avoid adding 0 coins
  if (actualIncrement < 5 && maxBalance - currentBalance >= 5) {
    actualIncrement = 5
  }

  return actualIncrement
}
