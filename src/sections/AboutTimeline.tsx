import { motion } from 'framer-motion'

import { timelineMilestones } from '@data/milestones'
import { staggerContainer, staggerItem } from '@lib/motion'

export function AboutTimeline() {
  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
      variants={staggerContainer}
      className="relative border-l border-border pl-8"
    >
      {timelineMilestones.map((milestone) => (
        <motion.li key={milestone.id} variants={staggerItem} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
          <p className="font-mono text-sm font-semibold text-accent">{milestone.year}</p>
          <h3 className="mt-1 text-base font-semibold text-foreground">{milestone.title}</h3>
          <p className="mt-1 text-sm text-muted">{milestone.description}</p>
        </motion.li>
      ))}
    </motion.ol>
  )
}
