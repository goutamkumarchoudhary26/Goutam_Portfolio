import { Badge } from '@components/ui/Badge'
import { Card } from '@components/ui/Card'
import type { ExperienceEntry } from '@models/experience'

function formatDate(value: string) {
  if (value === 'Present') return 'Present'
  const [year, month] = value.split('-')
  const date = new Date(Number(year), Number(month) - 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <Card className="w-full">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{entry.role}</h3>
          <p className="text-sm font-medium text-accent">{entry.company}</p>
        </div>
        <p className="font-mono text-xs text-muted">
          {formatDate(entry.startDate)} — {formatDate(entry.endDate)}
        </p>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-muted">
        {entry.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {highlight}
          </li>
        ))}
      </ul>

      {entry.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      )}
    </Card>
  )
}
