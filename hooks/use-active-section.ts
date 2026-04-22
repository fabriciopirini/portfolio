import { useEffect, useState } from 'react'

const SECTION_IDS = ['about', 'technology', 'experience', 'projects']

export const useActiveSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (!el) continue

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect()
      }
    }
  }, [])

  return activeId
}
