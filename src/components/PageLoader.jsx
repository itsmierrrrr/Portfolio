import { motion, AnimatePresence } from 'framer-motion'
import '../styles/PageLoader.css'

function PageLoader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="loader-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
          <span>Loading portfolio</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
