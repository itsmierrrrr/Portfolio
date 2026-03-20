import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { timelineItems } from '../data/portfolioData'
import '../styles/Timeline.css'

function Timeline() {
  return (
    <section id="timeline" className="section">
      <SectionHeading
        eyebrow="Journey"
        title="A timeline of growth and execution"
        description="From foundational learning to leading product experiences at scale."
      />

      <div className="timeline-wrap">
        {timelineItems.map((item, index) => (
          <motion.article
            key={`${item.year}-${item.title}`}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <span className="timeline-year">{item.year}</span>
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Timeline
