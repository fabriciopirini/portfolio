'use server'

import { cacheLife } from 'next/cache'
import { calculateYearsOfExperience } from './utils'

export async function getCachedYearsOfExperience() {
  'use cache'
  cacheLife('days')

  return calculateYearsOfExperience()
}

