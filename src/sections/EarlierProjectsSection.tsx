import { SectionContainer } from '@components/layout/SectionContainer'
import { RevealOnScroll } from '@components/ui/RevealOnScroll'
import { CareerEvolutionTimeline } from '@sections/CareerEvolutionTimeline'
import { EarlierProjectsTimeline } from '@sections/EarlierProjectsTimeline'

export function EarlierProjectsSection() {
  return (
    <SectionContainer id="earlier-work" narrow>
      <RevealOnScroll>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-muted">
          Career Journey
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Earlier Engineering Work
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Before focusing on AI-powered products, I built cross-platform applications and
          business systems across banking, travel, and enterprise domains.
        </p>
      </RevealOnScroll>

      <div className="mt-10">
        <EarlierProjectsTimeline />
      </div>

      <CareerEvolutionTimeline />
    </SectionContainer>
  )
}
