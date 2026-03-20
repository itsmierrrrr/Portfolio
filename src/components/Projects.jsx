import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projectCategories, projects } from '../data/portfolioData'
import '../styles/Projects.css'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work built for ambitious teams"
        description="Curated examples of web products, motion systems, and conversion-focused digital experiences."
      />

      <div className="project-filters">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? 'filter-btn active' : 'filter-btn'}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -8, rotateX: -2, rotateY: 2 }}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-body">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-stack">
                {project.stack.map((tech) => (
                  <small key={tech}>{tech}</small>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github size={16} /> Code
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
