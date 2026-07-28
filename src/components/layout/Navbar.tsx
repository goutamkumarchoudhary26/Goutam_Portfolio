import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { MobileMenu } from '@components/layout/MobileMenu'
import { Logo } from '@components/ui/Logo'
import { ThemeToggle } from '@components/ui/ThemeToggle'
import { navLinks } from '@data/nav'
import { useActiveSectionScroll } from '@hooks/useActiveSectionScroll'
import { useScrollSpy } from '@hooks/useScrollSpy'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollToSection } = useActiveSectionScroll()
  const activeSectionId = useScrollSpy(navLinks.map((link) => link.sectionId))
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const wasMenuOpen = useRef(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (wasMenuOpen.current && !isMobileMenuOpen) {
      menuToggleRef.current?.focus()
    }
    wasMenuOpen.current = isMobileMenuOpen
  }, [isMobileMenuOpen])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-border bg-background/80 shadow-sm backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            aria-label="Goutam Kumar — go to home"
            className="rounded-xl focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
          >
            <Logo />
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.sectionId}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.sectionId)}
                  aria-current={activeSectionId === link.sectionId ? 'page' : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                    activeSectionId === link.sectionId
                      ? 'text-accent'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={menuToggleRef}
              type="button"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <X size={20} aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <Menu size={20} aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeSectionId={activeSectionId}
        onNavigate={handleNavClick}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
