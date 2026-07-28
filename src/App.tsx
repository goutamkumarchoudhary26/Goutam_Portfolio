import { MotionConfig } from 'framer-motion'
import { BrowserRouter } from 'react-router-dom'

import { Footer } from '@components/layout/Footer'
import { Navbar } from '@components/layout/Navbar'
import { ThemeProvider } from '@context/ThemeContext'
import { AppRouter } from './router'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">
              <AppRouter />
            </main>
            <Footer />
          </div>
        </MotionConfig>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
