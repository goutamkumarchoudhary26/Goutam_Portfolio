import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

import { ThemeContext, type Theme } from '@context/theme-context'

const STORAGE_KEY = 'portfolio-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' ? 'light' : 'dark'
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const root = document.documentElement

    if (isFirstRender.current) {
      isFirstRender.current = false
      applyTheme(theme)
      return
    }

    root.classList.add('theme-transition')
    applyTheme(theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
    const timeout = window.setTimeout(() => root.classList.remove('theme-transition'), 350)
    return () => window.clearTimeout(timeout)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
