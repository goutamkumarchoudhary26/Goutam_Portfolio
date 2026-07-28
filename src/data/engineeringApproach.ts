import { Lightbulb, Palette, Layers, RefreshCw, type LucideIcon } from 'lucide-react'

export interface ApproachPrinciple {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const approachPrinciples: ApproachPrinciple[] = [
  {
    id: 'understand',
    title: 'Understand the Problem',
    description:
      'Start by understanding the real problem and the people affected by it before writing any code.',
    icon: Lightbulb,
  },
  {
    id: 'design',
    title: 'Design the Experience',
    description: 'Apply UX principles so the interface stays intuitive as functionality grows.',
    icon: Palette,
  },
  {
    id: 'build',
    title: 'Build Scalable Systems',
    description: 'Architect frontend and backend systems that stay maintainable as they scale.',
    icon: Layers,
  },
  {
    id: 'improve',
    title: 'Improve Continuously',
    description: 'Iterate based on real usage and feedback rather than treating delivery as final.',
    icon: RefreshCw,
  },
]

export const workflowSteps = ['Idea', 'UX', 'Architecture', 'Development', 'Testing', 'Deployment']
