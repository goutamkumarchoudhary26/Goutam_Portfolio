import { SectionContainer } from '@components/layout/SectionContainer'
import { Button, LinkButton } from '@components/ui/Button'
import { RevealOnScroll } from '@components/ui/RevealOnScroll'
import { RESUME_URL } from '@data/siteConfig'
import { useActiveSectionScroll } from '@hooks/useActiveSectionScroll'

export function ResumeCTASection() {
  const { scrollToSection } = useActiveSectionScroll()

  return (
    <SectionContainer narrow>
      <RevealOnScroll className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
        <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Looking for a Lead Frontend Developer who can bridge UI, full-stack engineering and AI?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {RESUME_URL && (
            <LinkButton variant="primary" href={RESUME_URL} target="_blank" rel="noreferrer">
              Download Resume
            </LinkButton>
          )}
          <Button variant="secondary" onClick={() => scrollToSection('contact')}>
            Contact Me
          </Button>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
