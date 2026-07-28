import { ArrowLeft } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'

import { SectionContainer } from '@components/layout/SectionContainer'
import { Badge } from '@components/ui/Badge'
import { projects } from '@data/projects'
import { useActiveSectionScroll } from '@hooks/useActiveSectionScroll'
import { useDocumentMeta } from '@hooks/useDocumentMeta'

const CASE_STUDY_SECTIONS = [
  { key: 'problem', label: 'Problem' },
  { key: 'solution', label: 'Solution' },
  { key: 'architectureNotes', label: 'Architecture' },
  { key: 'outcome', label: 'Outcome' },
] as const

export function ProjectCaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((entry) => entry.slug === slug)
  const { scrollToSection } = useActiveSectionScroll()

  useDocumentMeta({
    title: project ? `${project.title} — Goutam Kumar` : 'Project not found',
    description: project?.tagline ?? '',
  })

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <SectionContainer narrow className="pt-28">
      <button
        type="button"
        onClick={() => scrollToSection('projects')}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to projects
      </button>

      <p className="mt-8 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
        {project.category}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{project.tagline}</p>

      <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-4 text-sm sm:grid-cols-4">
        <div>
          <dt className="text-muted">Role</dt>
          <dd className="mt-1 font-medium text-foreground">{project.role}</dd>
        </div>
        <div>
          <dt className="text-muted">Timeline</dt>
          <dd className="mt-1 font-medium text-foreground">{project.timeline}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-muted">Key Impact</dt>
          <dd className="mt-1 font-medium text-foreground">{project.impact}</dd>
        </div>
      </dl>

      <div className="mt-10 space-y-8">
        {CASE_STUDY_SECTIONS.map(({ key, label }) => (
          <div key={key}>
            <h2 className="text-lg font-semibold text-foreground">{label}</h2>
            <p className="mt-2 text-base leading-relaxed text-muted">{project[key]}</p>
          </div>
        ))}

        <div>
          <h2 className="text-lg font-semibold text-foreground">Challenges</h2>
          <ul className="mt-3 space-y-3">
            {project.challenges.map((item) => (
              <li key={item.challenge} className="text-sm">
                <p className="font-medium text-foreground">{item.challenge}</p>
                <p className="mt-1 text-muted">{item.resolution}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-foreground">Technologies</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
