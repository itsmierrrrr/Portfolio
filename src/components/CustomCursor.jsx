import { useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import '../styles/CustomCursor.css'

const CURSOR_SIZE = 12

function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  useEffect(() => {
    const update = (event) => {
      x.set(event.clientX - CURSOR_SIZE / 2)
      y.set(event.clientY - CURSOR_SIZE / 2)
    }

    window.addEventListener('pointermove', update, { passive: true })

    return () => window.removeEventListener('pointermove', update)
  }, [x, y])

  return (
    <motion.div
      className="custom-cursor"
      style={{ translateX: x, translateY: y }}
      aria-hidden="true"
    />
  )
}

export default CustomCursor
