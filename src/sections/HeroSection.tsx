import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

import { SectionContainer } from '@components/layout/SectionContainer'
import { Badge } from '@components/ui/Badge'
import { GithubIcon, LinkedinIcon } from '@components/ui/BrandIcons'
import { Button, LinkButton } from '@components/ui/Button'
import { RevealOnScroll } from '@components/ui/RevealOnScroll'
import { heroContent } from '@data/hero'
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@data/siteConfig'
import { useActiveSectionScroll } from '@hooks/useActiveSectionScroll'
import { fadeInUp, staggerContainer, staggerItem } from '@lib/motion'
import { HeroVisual } from '@sections/HeroVisual'

export function HeroSection() {
  const { scrollToSection } = useActiveSectionScroll()

  return (
    <SectionContainer
      id="home"
      narrow={false}
      className="flex min-h-[calc(100svh-4rem)] items-center !py-12 sm:!py-16"
    >
      <div className="grid w-full items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-start text-left -mt-5"
        >
          <motion.div
            variants={staggerItem}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {heroContent.availabilityText}
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p variants={staggerItem} className="mt-5 max-w-xl text-lg text-muted">
            {heroContent.supportingText}
          </motion.p>

          <motion.div variants={staggerItem} className="mt-6 flex flex-wrap gap-2">
            {heroContent.badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </motion.div>

          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
            {RESUME_URL && (
              <LinkButton variant="secondary" href={RESUME_URL} target="_blank" rel="noreferrer">
                Download Resume
              </LinkButton>
            )}
          </motion.div>

          <motion.div variants={staggerItem} className="mt-6 flex items-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Send an email"
              className="text-muted transition-colors hover:text-accent"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <RevealOnScroll variants={fadeInUp} className="mt-16">
          <HeroVisual />
        </RevealOnScroll>
      </div>
    </SectionContainer>
  )
}
