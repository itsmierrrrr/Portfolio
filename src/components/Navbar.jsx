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
        <div className="nav-desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={activeSection === link.id ? 'nav-link active' : 'nav-link'}
              onClick={(event) => onLinkClick(event, link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="active-nav-pill"
                  className="nav-link-pill"
                  transition={{ type: 'spring', stiffness: 450, damping: 34 }}
                />
              )}
              <span className="nav-link-label">{link.label}</span>
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
                aria-current={activeSection === link.id ? 'page' : undefined}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="nav-link-pill"
                    transition={{ type: 'spring', stiffness: 450, damping: 34 }}
                  />
                )}
                <span className="nav-link-label">{link.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
