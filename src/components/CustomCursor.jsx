import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import '../styles/CustomCursor.css'

function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.2 })

  useEffect(() => {
    const update = (event) => {
      x.set(event.clientX - 10)
      y.set(event.clientY - 10)
    }

    window.addEventListener('pointermove', update)

    return () => window.removeEventListener('pointermove', update)
  }, [x, y])

  return (
    <motion.div
      className="custom-cursor"
      style={{ translateX: springX, translateY: springY }}
      aria-hidden="true"
    />
  )
}

export default CustomCursor
