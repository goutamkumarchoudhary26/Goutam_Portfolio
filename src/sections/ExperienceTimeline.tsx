import { motion } from 'framer-motion'

import { experienceEntries } from '@data/experience'
import { staggerContainer, staggerItem } from '@lib/motion'
import { ExperienceCard } from '@sections/ExperienceCard'

export function ExperienceTimeline() {
  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
      variants={staggerContainer}
      className="relative space-y-10 border-l border-border pl-8"
    >
      {experienceEntries.map((entry) => (
        <motion.li key={entry.id} variants={staggerItem} className="relative">
          <span className="absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
          <ExperienceCard entry={entry} />
        </motion.li>
      ))}
    </motion.ol>
  )
}
