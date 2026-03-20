import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { navLinks } from '../data/portfolioData'
import '../styles/Navbar.css'

function Navbar({ activeSection, onLinkClick, isOpen, onMenuToggle, theme, onThemeToggle }) {
  return (
    <header className="navbar-wrap">
      <motion.nav
        className="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href="#home" className="brand" onClick={(event) => onLinkClick(event, 'home')}>
          MS
        </a>

        <div className="nav-desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={activeSection === link.id ? 'nav-link active' : 'nav-link'}
              onClick={(event) => onLinkClick(event, link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={onMenuToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <motion.div
              key={isOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -120 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 120 }}
              transition={{ duration: 0.35 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                type="button"
                className={activeSection === link.id ? 'mobile-nav-link active' : 'mobile-nav-link'}
                onClick={(event) => onLinkClick(event, link.id)}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
