import type { LucideIcon } from 'lucide-react'

export interface Skill {
  name: string
  experienceTag?: string
}

export interface SkillGroup {
  id: string
  title: string
  icon: LucideIcon
  skills: Skill[]
}
