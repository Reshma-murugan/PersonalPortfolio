import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const [titleIndex, setTitleIndex] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const titles = [
    'Aspiring Software Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-shapes">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
      </div>

      <div ref={ref} className={`hero-content ${mounted ? 'fade-in' : ''}`}>
        <h1 className="hero-title">
          <span className="hero-title-main" aria-label="Hi, I'm Reshma">
            {"Hi, I'm Reshma".split("").map((char, index) => (
              <span key={index} className="reveal-char" aria-hidden="true" style={{ '--index': index }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span key={titleIndex} className="hero-title-dynamic animate-fadeIn" style={{ animationDelay: '300ms' }}>
            {titles[titleIndex]}
          </span>
        </h1>

        <p className="hero-description animate-fadeIn" style={{ animationDelay: '600ms' }}>
          Passionate about crafting seamless and reliable software solutions.
        </p>

        <div className="hero-buttons animate-fadeIn" style={{ animationDelay: '900ms' }}>
          <a href="#projects" className="button button-primary">
            View My Work
            <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="/Reshma_CV.pdf" download className="button button-secondary">
            Download CV
            <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

        <div className="hero-info">
          <div className="info-grid">
            <div className="info-item">
              <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Computer Science & Engineering (2021-2025)</span>
            </div>
            <div className="info-item">
              <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>CGPA: 8.19</span>
            </div>
             <div className="info-item">
              <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Available for Work</span>
            </div>
            
           
            
          </div>
        </div>

        <div className="scroll-indicator">
          <svg className="scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero