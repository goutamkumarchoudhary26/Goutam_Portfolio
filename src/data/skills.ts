import { Boxes, Code2, Database, Server, Sparkles, Wrench } from 'lucide-react'

import type { SkillGroup } from '@models/skills'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React.js', experienceTag: '11+ yrs' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    skills: [{ name: 'Python' }, { name: 'FastAPI' }, { name: 'REST APIs' }],
  },
  {
    id: 'ai',
    title: 'AI',
    icon: Sparkles,
    skills: [
      { name: 'LLM' },
      { name: 'RAG' },
      { name: 'NLP' },
      { name: 'Generative AI' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    skills: [{ name: 'PostgreSQL' }, { name: 'SQL' }],
  },
  {
    id: 'state-management',
    title: 'State Management',
    icon: Boxes,
    skills: [{ name: 'Redux' }, { name: 'Context API' }],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    skills: [{ name: 'Git' }, { name: 'Docker' }, { name: 'Figma' }, { name: 'Jira' }],
  },
]
