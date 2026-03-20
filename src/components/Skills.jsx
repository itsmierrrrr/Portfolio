import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolioData'
import '../styles/Skills.css'

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Skills"
        title="Technology stack tuned for speed and scalability"
        description="A balanced toolkit across frontend craft, backend architecture, and product tooling."
      />

      <div className="skills-groups">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            key={group.category}
            className="skills-group"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: groupIndex * 0.1 }}
          >
            <h3>{group.category}</h3>

            {group.items.map((skill, index) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-track">
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: index * 0.07 + groupIndex * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Skills
