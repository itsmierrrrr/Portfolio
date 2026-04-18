import { useMemo } from 'react'
import { motion } from 'framer-motion'
import '../styles/AnimatedBackground.css'

function AnimatedBackground() {
  const rainDrops = useMemo(() => {
    const randomBetween = (min, max) => Math.random() * (max - min) + min

    return Array.from({ length: 72 }, (_, index) => {
      const fallDuration = randomBetween(2.4, 5.0)

      return {
        id: `drop-${index}`,
        style: {
          '--drop-left': `${randomBetween(0, 100).toFixed(2)}%`,
          '--drop-drift': `${randomBetween(3, 8).toFixed(2)}vw`,
          '--drop-length': `${randomBetween(8, 18).toFixed(2)}vh`,
          '--drop-thickness': `${randomBetween(1, 1.8).toFixed(2)}px`,
          '--drop-opacity': randomBetween(0.12, 0.34).toFixed(2),
          '--fall-duration': `${fallDuration.toFixed(2)}s`,
          '--fall-delay': `${(-randomBetween(0, fallDuration)).toFixed(2)}s`,
        },
      }
    })
  }, [])

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
      <div className="rain-field">
        {rainDrops.map((drop) => (
          <div key={drop.id} className="rain-drop" style={drop.style} />
        ))}
      </div>
      <div className="grid-mask" />
      <div className="noise" />
    </div>
  )
}

export default AnimatedBackground
