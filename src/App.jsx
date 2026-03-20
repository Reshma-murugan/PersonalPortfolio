import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check user's preferred color scheme and update on change
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => setDarkMode(e.matches)

    setDarkMode(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }

    // Add smooth transition for theme changes
    html.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    // Smooth scroll is handled by CSS scroll-behavior: smooth
  }, [darkMode])

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="page-content">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default App
