import { ArrowRight } from 'lucide-react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

import { careerMilestones, careerStages } from '@data/careerEvolution'

export function CareerEvolutionTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  })

  return (
    <div className="mt-16">
      <p className="mx-auto max-w-md text-center text-sm text-muted">
        From building web applications to building intelligent AI-powered systems.
      </p>

      <div ref={containerRef} className="relative mx-auto mt-10 max-w-sm pl-8">
        <div className="absolute left-0 top-0 h-full w-px bg-border" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 top-0 h-full w-px origin-top bg-accent"
        />

        <ol className="space-y-8">
          {careerMilestones.map((milestone) => (
            <motion.li
              key={milestone.year}
              className="relative"
              initial={{ opacity: 0.35 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <span className="absolute -left-[calc(2rem+3px)] top-1 h-2 w-2 rounded-full bg-accent" />
              <p className="font-mono text-xs font-semibold text-accent">{milestone.year}</p>
              <p className="text-sm text-foreground">{milestone.label}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
        {careerStages.map((stage, index) => (
          <div key={stage} className="flex items-center gap-2">
            <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
              {stage}
            </span>
            {index < careerStages.length - 1 && (
              <ArrowRight size={14} className="text-muted" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
