import { motion } from 'framer-motion'
import {
  Braces,
  Database,
  FileCode2,
  Network,
  Paintbrush,
  Sparkles,
  Table,
  Terminal,
  Zap,
} from 'lucide-react'

const CODE_LINES = [
  { text: 'const insights = await ragPipeline.query(', color: 'text-accent-secondary' },
  { text: '  "summarize customer feedback"', color: 'text-muted' },
  { text: ')', color: 'text-accent-secondary' },
  { text: '', color: '' },
  { text: 'return <Dashboard data={insights} />', color: 'text-foreground' },
]

const FLOATING_BADGES = [
  { id: 'react', label: 'React', icon: Braces, className: '-top-8 left-1 sm:left-4' },
  {
    id: 'tailwind',
    label: 'Tailwind',
    icon: Paintbrush,
    className: '-top-1 left-[22%] sm:left-[20%]',
  },
  {
    id: 'js-ts',
    label: 'JS / TS',
    icon: FileCode2,
    className: '-top-9 left-1/2 -translate-x-1/2',
  },
  { id: 'python', label: 'Python', icon: Terminal, className: '-top-1 right-[22%] sm:right-[20%]' },
  { id: 'ai', label: 'AI / LLM', icon: Sparkles, className: '-top-8 right-1 sm:right-4' },
  { id: 'fastapi', label: 'FastAPI', icon: Zap, className: 'bottom-2 left-[15%] sm:left-[12%]' },
  { id: 'api', label: 'REST API', icon: Network, className: 'bottom-10 -left-6 sm:-left-10' },
  { id: 'sql', label: 'SQL', icon: Table, className: 'bottom-2 right-[15%] sm:right-[12%]' },
  { id: 'db', label: 'Vector DB', icon: Database, className: '-bottom-6 right-6 sm:right-12' },
]

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-accent-soft via-transparent to-transparent blur-2xl" />

      <div className="absolute inset-x-6 top-1/2 -z-10 h-40 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-accent-soft),transparent_70%)]" />

      <div className="flex h-full items-center justify-center">
        <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-sm">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-xs text-muted">rag-service.ts</span>
          </div>
          <div className="space-y-1.5 p-5 font-mono text-xs sm:text-sm">
            {CODE_LINES.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.4 }}
                className={`whitespace-pre ${line.color || 'text-foreground'}`}
              >
                {line.text || ' '}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {FLOATING_BADGES.map(({ id, label, icon: Icon, className }, index) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 0.4 + index * 0.1, duration: 0.4 },
            scale: { delay: 0.4 + index * 0.1, duration: 0.4 },
            y: { delay: 1, duration: 3 + index * 0.4, repeat: Infinity, ease: 'easeInOut' },
          }}
          className={`absolute flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground shadow-md ${className}`}
        >
          <Icon size={14} className="text-accent" aria-hidden="true" />
          {label}
        </motion.div>
      ))}
    </div>
  )
}
