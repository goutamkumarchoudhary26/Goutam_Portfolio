import { motion } from 'framer-motion'

import { SectionContainer } from '@components/layout/SectionContainer'
import { RevealOnScroll } from '@components/ui/RevealOnScroll'
import { skillGroups } from '@data/skills'
import { staggerContainer, staggerItem } from '@lib/motion'
import { SkillCard } from '@sections/SkillCard'

export function SkillsSection() {
  return (
    <SectionContainer id="skills">
      <RevealOnScroll>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A full-stack toolkit for AI-powered products.
        </h2>
      </RevealOnScroll>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
        variants={staggerContainer}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.id} variants={staggerItem}>
            <SkillCard group={group} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}
