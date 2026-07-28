import { motion } from 'framer-motion'

import { Card } from '@components/ui/Card'
import type { EarlierProjectEntry } from '@models/earlierProject'
import { staggerContainer, staggerItem } from '@lib/motion'

export function EarlierProjectCard({ project }: { project: EarlierProjectEntry }) {
  const Icon = project.icon

  return (
    <Card className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-hover text-muted">
        <Icon size={20} aria-hidden="true" />
      </span>

      <div className="flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
          <span className="font-mono text-xs text-muted">{project.timeline}</span>
        </div>
        <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
          {project.category}
        </p>
        <p className="mt-3 text-sm text-muted">{project.description}</p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 'some' }}
          variants={staggerContainer}
          className="mt-4 flex flex-wrap gap-2"
        >
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              variants={staggerItem}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Card>
  )
}
