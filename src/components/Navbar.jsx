import { useState, useEffect, useRef } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'
import { menuItems } from '../data/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  const navRef = useRef()
  const menuRef = useRef()
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const [hoveredItem, setHoveredItem] = useState(null)

  // Update sliding indicator position
  useEffect(() => {
    const updateIndicator = () => {
      if (!menuRef.current) return

      // Prioritize hovered item, fall back to active section
      const targetHref = hoveredItem || `#${activeSection}`
      const targetLink = menuRef.current.querySelector(`.navbar-link[href="${targetHref}"]`)

      if (targetLink) {
        const indicatorWidth = 24
        setIndicatorStyle({
          left: targetLink.offsetLeft + (targetLink.offsetWidth - indicatorWidth) / 2,
          width: indicatorWidth,
          opacity: 1
        })
      } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
      }
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeSection, hoveredItem])

  useOnClickOutside(navRef, () => setIsOpen(false))

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])



  return (
    <nav ref={navRef} className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="#home" className="navbar-brand">
            <span className="stylish-name">Reshma</span>
          </a>

          {/* Desktop Menu */}
          <div className="navbar-menu" ref={menuRef}>
            {menuItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`navbar-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.text}
              </a>
            ))}
            <div className="navbar-active-indicator" style={indicatorStyle} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
            className="mobile-menu-button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-items">
          {menuItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`navbar-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>    </nav>
  )
}

export default Navbar