import type { LucideIcon } from 'lucide-react'

export interface EarlierProjectEntry {
  id: string
  title: string
  timeline: string
  category: string
  description: string
  technologies: string[]
  icon: LucideIcon
}

export interface CareerMilestone {
  year: string
  label: string
}
