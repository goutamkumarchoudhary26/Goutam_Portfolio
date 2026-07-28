import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@components/ui/Badge'
import { Card } from '@components/ui/Card'
import type { ProjectEntry } from '@models/project'

const MAX_VISIBLE_TECHNOLOGIES = 4

export function ProjectCard({ project }: { project: ProjectEntry }) {
  const visibleTechnologies = project.technologies.slice(0, MAX_VISIBLE_TECHNOLOGIES)
  const remainingCount = project.technologies.length - visibleTechnologies.length

  return (
    <Link to={`/projects/${project.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:shadow-lg">
        <p className="font-mono text-xs font-semibold uppercase tracking-wide text-accent">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {visibleTechnologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {remainingCount > 0 && <Badge>+{remainingCount} more</Badge>}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
          <span>{project.timeline}</span>
          <span className="inline-flex items-center gap-1 font-medium text-accent">
            View Case Study
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Card>
    </Link>
  )
}
