import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import '../styles/ThemeToggle.css'

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      whileTap={{ scale: 0.92 }}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <motion.span
        className="theme-toggle__thumb"
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        {isDark ? <Moon size={15} /> : <Sun size={15} />}
      </motion.span>
    </motion.button>
  )
}

export default ThemeToggle
