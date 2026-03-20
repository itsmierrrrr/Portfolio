import { motion } from 'framer-motion'
import '../styles/AnimatedBackground.css'

function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <motion.div
        className="blob blob-one"
        animate={{ x: [0, 50, -30, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob-two"
        animate={{ x: [0, -40, 26, 0], y: [0, -30, 24, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="grid-mask" />
      <div className="noise" />
    </div>
  )
}

export default AnimatedBackground
