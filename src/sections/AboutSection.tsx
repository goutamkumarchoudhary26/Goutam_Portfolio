import { SectionContainer } from '@components/layout/SectionContainer'
import { RevealOnScroll } from '@components/ui/RevealOnScroll'
import { aboutContent } from '@data/about'
import { slideInLeft, slideInRight } from '@lib/motion'
import { AboutTimeline } from '@sections/AboutTimeline'

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll variants={slideInLeft}>
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Engineering impact, not just interfaces.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll variants={slideInRight}>
          <AboutTimeline />
        </RevealOnScroll>
      </div>
    </SectionContainer>
  )
}
