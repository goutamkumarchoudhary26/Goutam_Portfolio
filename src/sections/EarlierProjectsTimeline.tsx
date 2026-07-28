import { motion } from 'framer-motion'

import { earlierProjects } from '@data/earlierProjects'
import { staggerContainer, staggerItem } from '@lib/motion'
import { EarlierProjectCard } from '@sections/EarlierProjectCard'

export function EarlierProjectsTimeline() {
  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
      variants={staggerContainer}
      className="relative space-y-6 border-l border-border pl-6 sm:pl-8"
    >
      {earlierProjects.map((project) => (
        <motion.li key={project.id} variants={staggerItem} className="relative">
          <span className="absolute -left-[calc(1.5rem+4px)] top-6 h-2 w-2 rounded-full border-2 border-muted bg-background sm:-left-[calc(2rem+4px)]" />
          <EarlierProjectCard project={project} />
        </motion.li>
      ))}
    </motion.ol>
  )
}
