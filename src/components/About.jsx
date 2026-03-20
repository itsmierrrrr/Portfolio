import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { aboutCards, personalInfo } from '../data/portfolioData'
import '../styles/About.css'

function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="About"
        title="Building premium experiences with precision"
        description={personalInfo.intro}
      />

      <div className="about-grid">
        {aboutCards.map((card, index) => (
          <motion.article
            key={card.title}
            className="about-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <Sparkles size={18} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default About
