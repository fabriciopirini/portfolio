import { useEffect, useState } from 'react'

import { calculateYearsOfExperience, numberToWords } from '@/lib/utils'

// Intentional: calculateYearsOfExperience() calls new Date(), which Next.js forbids
// during static prerendering of Client Components. Deferring to an effect ensures
// the value is always computed on the client after hydration.
export const useYearsOfExperience = () => {
  const [years, setYears] = useState<number | null>(null)

  // react-doctor-disable-next-line react-hooks-js/set-state-in-effect
  useEffect(() => {
    setYears(calculateYearsOfExperience())
  }, [])

  return {
    years,
    yearsText: years !== null ? numberToWords(years) : null,
  }
}
