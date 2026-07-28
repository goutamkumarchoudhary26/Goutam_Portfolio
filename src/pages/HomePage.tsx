import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useDocumentMeta } from '@hooks/useDocumentMeta'
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion'
import { AboutSection } from '@sections/AboutSection'
import { ArchitectureVisualSection } from '@sections/ArchitectureVisualSection'
import { ContactSection } from '@sections/ContactSection'
import { EarlierProjectsSection } from '@sections/EarlierProjectsSection'
import { EngineeringApproachSection } from '@sections/EngineeringApproachSection'
import { ExperienceSection } from '@sections/ExperienceSection'
import { HeroSection } from '@sections/HeroSection'
import { ProjectsSection } from '@sections/ProjectsSection'
import { ResumeCTASection } from '@sections/ResumeCTASection'
import { SkillsSection } from '@sections/SkillsSection'

interface ScrollState {
  scrollTo?: string
}

const HOME_TITLE = 'Goutam Kumar — Lead UI React Developer'
const HOME_DESCRIPTION =
  'Lead UI React Developer with 11+ years of experience building high-performance web applications, intuitive user experiences, and AI-powered products with React, TypeScript, Python, FastAPI, LLMs and RAG.'

export function HomePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const prefersReducedMotion = usePrefersReducedMotion()

  useDocumentMeta({ title: HOME_TITLE, description: HOME_DESCRIPTION })

  useEffect(() => {
    const state = location.state as ScrollState | null
    const targetId = state?.scrollTo
    if (!targetId) return

    const frame = requestAnimationFrame(() => {
      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
      navigate('.', { replace: true, state: {} })
    })

    return () => cancelAnimationFrame(frame)
  }, [location.state, navigate, prefersReducedMotion])

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EarlierProjectsSection />
      <SkillsSection />
      <EngineeringApproachSection />
      <ArchitectureVisualSection />
      <ResumeCTASection />
      <ContactSection />
    </>
  )
}
