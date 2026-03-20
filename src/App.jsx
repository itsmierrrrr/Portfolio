import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import PageLoader from './components/PageLoader'
import { navLinks } from './data/portfolioData'
import { useActiveSection } from './hooks/useActiveSection'
import './styles/App.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const sectionIds = useMemo(() => navLinks.map((link) => link.id), [])
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (preferredDark ? 'dark' : 'light')

    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 950)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const scrollToSection = (event, sectionId) => {
    event.preventDefault()
    setIsMenuOpen(false)

    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <PageLoader isVisible={isLoading} />
      </AnimatePresence>

      <ScrollProgress />
      <CustomCursor />
      <AnimatedBackground />

      <Navbar
        activeSection={activeSection}
        onLinkClick={scrollToSection}
        isOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((open) => !open)}
        theme={theme}
        onThemeToggle={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer onBackToTop={(event) => scrollToSection(event, 'home')} />
    </div>
  )
}

export default App
