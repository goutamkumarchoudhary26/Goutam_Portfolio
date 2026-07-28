import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { SectionContainer } from '@components/layout/SectionContainer'
import { Card } from '@components/ui/Card'
import { RevealOnScroll } from '@components/ui/RevealOnScroll'
import { approachPrinciples, workflowSteps } from '@data/engineeringApproach'
import { staggerContainer, staggerItem } from '@lib/motion'

export function EngineeringApproachSection() {
  return (
    <SectionContainer id="engineering-approach">
      <RevealOnScroll>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Approach
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How I Approach Engineering
        </h2>
      </RevealOnScroll>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
        variants={staggerContainer}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {approachPrinciples.map((principle) => {
          const Icon = principle.icon
          return (
            <motion.div key={principle.id} variants={staggerItem}>
              <Card className="h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-2 text-sm text-muted">{principle.description}</p>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      <RevealOnScroll className="mt-14">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-surface p-6">
          {workflowSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-border bg-surface-hover px-4 py-2 text-sm font-medium text-foreground">
                {step}
              </span>
              {index < workflowSteps.length - 1 && (
                <ArrowRight size={16} className="text-accent" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
