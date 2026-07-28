import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { navLinks } from '@data/nav'

interface MobileMenuProps {
  isOpen: boolean
  activeSectionId: string | null
  onNavigate: (sectionId: string) => void
  onClose: () => void
}

export function MobileMenu({ isOpen, activeSectionId, onNavigate, onClose }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    firstLinkRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col gap-1 border-l border-border bg-background p-6 pt-20 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => (
              <button
                key={link.sectionId}
                ref={index === 0 ? firstLinkRef : undefined}
                type="button"
                onClick={() => onNavigate(link.sectionId)}
                aria-current={activeSectionId === link.sectionId ? 'page' : undefined}
                className={`rounded-xl px-4 py-3 text-left text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                  activeSectionId === link.sectionId
                    ? 'bg-accent-soft text-accent'
                    : 'text-foreground hover:bg-surface-hover'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
