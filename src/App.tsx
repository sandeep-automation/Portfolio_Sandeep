import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
import WhyWork from './components/WhyWork'
import Achievements from './components/Achievements'
import Community from './components/Community'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { useLenis } from './hooks/useLenis'
import { useScrollAnimations } from './hooks/useScrollAnimations'

function App() {
  const [loading, setLoading] = useState(true)
  const ready = !loading

  useLenis(ready)
  useScrollAnimations(ready)

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {ready && (
        <>
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Services />
            <WhyWork />
            <Achievements />
            <Community />
            <Contact />
            <FinalCTA />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
