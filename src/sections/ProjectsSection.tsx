import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'

import { SectionContainer } from '@components/layout/SectionContainer'
import { RevealOnScroll } from '@components/ui/RevealOnScroll'
import { projects } from '@data/projects'
import { staggerContainer, staggerItem } from '@lib/motion'
import { ProjectCard } from '@sections/ProjectCard'
import { ProjectFilterBar, type ProjectFilter } from '@sections/ProjectFilterBar'

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')

  const filters = useMemo<ProjectFilter[]>(() => {
    const categories = Array.from(new Set(projects.flatMap((project) => project.categories)))
    return ['all', ...categories]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <SectionContainer id="projects">
      <RevealOnScroll>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Products built with engineering and AI.
        </h2>
      </RevealOnScroll>

      <div className="mt-8">
        <ProjectFilterBar filters={filters} activeFilter={activeFilter} onChange={setActiveFilter} />
      </div>

      <motion.div
        layout
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              variants={staggerItem}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionContainer>
  )
}
