import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

import { IconButton } from '@components/ui/IconButton'
import { useTheme } from '@hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <IconButton
      label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className="relative overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            <Moon size={18} aria-hidden="true" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            <Sun size={18} aria-hidden="true" />
          </motion.span>
        )}
      </AnimatePresence>
    </IconButton>
  )
}
