import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion'

/**
 * Returns scrollToSection(id), usable from any route: scrolls directly when
 * already on "/", otherwise navigates home first and lets HomePage's own
 * effect (reading location.state.scrollTo) finish the scroll after paint.
 */
export function useActiveSectionScroll() {
  const location = useLocation()
  const navigate = useNavigate()
  const prefersReducedMotion = usePrefersReducedMotion()

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } })
        return
      }

      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    },
    [location.pathname, navigate, prefersReducedMotion],
  )

  return { scrollToSection }
}
