export interface ExperienceEntry {
  id: string
  company: string
  role: string
  location?: string
  startDate: string
  endDate: string | 'Present'
  summary: string
  highlights: string[]
  technologies: string[]
}

export interface TimelineMilestone {
  id: string
  year: string
  title: string
  description: string
}
