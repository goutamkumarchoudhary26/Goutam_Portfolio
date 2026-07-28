import { motion } from 'framer-motion'
import { Database, Server, Sparkles, User, type LucideIcon } from 'lucide-react'

import { SectionContainer } from '@components/layout/SectionContainer'
import { RevealOnScroll } from '@components/ui/RevealOnScroll'

interface ArchitectureNode {
  id: string
  label: string
  detail: string
  icon: LucideIcon
}

const NODES: ArchitectureNode[] = [
  { id: 'user', label: 'User', detail: 'Interacts with the product', icon: User },
  {
    id: 'frontend',
    label: 'React + TypeScript Frontend',
    detail: 'UI, state management, data visualization',
    icon: Server,
  },
  {
    id: 'backend',
    label: 'FastAPI Backend',
    detail: 'Business logic, orchestration, REST APIs',
    icon: Server,
  },
  {
    id: 'data',
    label: 'PostgreSQL / APIs / Vector Database',
    detail: 'Structured data, embeddings and retrieval',
    icon: Database,
  },
  {
    id: 'ai',
    label: 'LLM / AI Services',
    detail: 'Generation, reasoning and RAG responses',
    icon: Sparkles,
  },
]

export function ArchitectureVisualSection() {
  return (
    <SectionContainer id="architecture" narrow>
      <RevealOnScroll>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Architecture
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How the pieces fit together.
        </h2>
      </RevealOnScroll>

      <div className="mt-10 flex flex-col items-center">
        {NODES.map((node, index) => {
          const Icon = node.icon
          return (
            <div key={node.id} className="flex w-full max-w-md flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex w-full items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{node.label}</p>
                  <p className="text-xs text-muted">{node.detail}</p>
                </div>
              </motion.div>

              {index < NODES.length - 1 && (
                <div className="relative h-10 w-px overflow-hidden bg-border">
                  <motion.span
                    className="absolute left-0 h-3 w-px bg-accent"
                    animate={{ top: ['-20%', '120%'] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: index * 0.2,
                    }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </SectionContainer>
  )
}
