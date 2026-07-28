import type { ProjectCategory } from '@models/project'

export type ProjectFilter = 'all' | ProjectCategory

const FILTER_LABELS: Record<ProjectFilter, string> = {
  all: 'All',
  frontend: 'Frontend',
  ai: 'AI',
  'full-stack': 'Full Stack',
  'data-visualization': 'Data Visualization',
}

interface ProjectFilterBarProps {
  filters: ProjectFilter[]
  activeFilter: ProjectFilter
  onChange: (filter: ProjectFilter) => void
}

export function ProjectFilterBar({ filters, activeFilter, onChange }: ProjectFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          aria-pressed={activeFilter === filter}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
            activeFilter === filter
              ? 'border-accent bg-accent text-white'
              : 'border-border bg-surface text-muted hover:text-foreground'
          }`}
        >
          {FILTER_LABELS[filter]}
        </button>
      ))}
    </div>
  )
}
