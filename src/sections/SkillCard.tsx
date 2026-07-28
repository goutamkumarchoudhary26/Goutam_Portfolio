import { motion } from 'framer-motion'

import { Card } from '@components/ui/Card'
import type { SkillGroup } from '@models/skills'

export function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = group.icon

  return (
    <Card className="h-full transition-colors duration-200 hover:border-accent/50">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Icon size={20} aria-hidden="true" />
        </span>
        <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <motion.span
            key={skill.name}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-hover px-3 py-1.5 text-xs font-medium text-foreground"
          >
            {skill.name}
            {skill.experienceTag && (
              <span className="font-mono text-[10px] text-accent">{skill.experienceTag}</span>
            )}
          </motion.span>
        ))}
      </div>
    </Card>
  )
}
