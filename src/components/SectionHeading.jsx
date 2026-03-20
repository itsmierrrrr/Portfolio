import { motion } from 'framer-motion'
import '../styles/SectionHeading.css'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  )
}

export default SectionHeading
