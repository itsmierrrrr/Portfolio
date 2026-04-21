import { motion } from 'framer-motion'
import {
  Atom,
  Boxes,
  Database,
  Figma,
  Flame,
  Github,
  Layers,
  PenTool,
  Wrench,
} from 'lucide-react'
import {
  SiCplusplus,
  SiCss,
  SiExpress,
  SiFramer,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiTypescript,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolioData'
import '../styles/Skills.css'

const skillIcons = {
  React: Atom,
  'Next.js': Layers,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  'CSS / Motion': SiCss,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Python: SiPython,
  Java: FaJava,
  'C++': SiCplusplus,
  MongoDB: Database,
  Figma,
  Framer: SiFramer,
  'GitHub Actions': Github,
  'Adobe XD': PenTool,
  Vite: Flame,
  Docker: Boxes,
}

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
                  <span className="skill-name-with-icon">
                    {(() => {
                      const SkillIcon = skillIcons[skill.name] || Wrench

                      return <SkillIcon size={14} aria-hidden="true" />
                    })()}
                    <span>{skill.name}</span>
                  </span>
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
