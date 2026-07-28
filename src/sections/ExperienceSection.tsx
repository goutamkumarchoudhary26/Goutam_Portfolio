import { SectionContainer } from '@components/layout/SectionContainer'
import { RevealOnScroll } from '@components/ui/RevealOnScroll'
import { ExperienceTimeline } from '@sections/ExperienceTimeline'

export function ExperienceSection() {
  return (
    <SectionContainer id="experience" narrow>
      <RevealOnScroll>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          11+ years of building and leading.
        </h2>
      </RevealOnScroll>

      <div className="mt-12">
        <ExperienceTimeline />
      </div>
    </SectionContainer>
  )
}
