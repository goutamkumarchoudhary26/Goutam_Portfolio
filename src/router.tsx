import { Route, Routes } from 'react-router-dom'

import { HomePage } from '@pages/HomePage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { ProjectCaseStudyPage } from '@pages/ProjectCaseStudyPage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
