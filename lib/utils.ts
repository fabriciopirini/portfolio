import { MAX_COINS } from '@/stores/app-store'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
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

export const calculateYearsOfExperience = (startDate: string | Date = '2017-09-01'): number => {
  const date1 = typeof startDate === 'string' ? new Date(startDate) : startDate
  const date2 = new Date()

  const diffTime = Math.abs(date2.valueOf() - date1.valueOf())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365))
}

const NUMBER_WORDS: Record<number, string> = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
}

export const numberToWords = (n: number): string => NUMBER_WORDS[n] ?? String(n)
