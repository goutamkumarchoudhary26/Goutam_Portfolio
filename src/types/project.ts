export type ProjectCategory = 'frontend' | 'ai' | 'full-stack' | 'data-visualization'

export interface ProjectChallenge {
  challenge: string
  resolution: string
}

export interface ProjectEntry {
  slug: string
  title: string
  category: string
  categories: ProjectCategory[]
  tagline: string
  technologies: string[]
  role: string
  timeline: string
  impact: string
  problem: string
  solution: string
  architectureNotes: string
  challenges: ProjectChallenge[]
  outcome: string
}
