import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowRight, MessageCircle, Download } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolioData'
import SocialIcon from './SocialIcon'
import '../styles/Hero.css'

function Hero() {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 160, damping: 18 })
  const smoothY = useSpring(y, { stiffness: 160, damping: 18 })

  const rotateX = useTransform(smoothY, [-45, 45], [8, -8])
  const rotateY = useTransform(smoothX, [-45, 45], [-8, 8])

  const glowX = useTransform(smoothX, [-45, 45], [20, 80])
  const glowY = useTransform(smoothY, [-45, 45], [20, 80])
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, var(--accent-strong), transparent 42%)`

  const handleMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const relativeX = event.clientX - rect.left - rect.width / 2
    const relativeY = event.clientY - rect.top - rect.height / 2

    x.set((relativeX / rect.width) * 90)
    y.set((relativeY / rect.height) * 90)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section id="home" className="section hero-section">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Portfolio</span>
          <h1>
            {personalInfo.name}
            <span>{personalInfo.role}</span>
          </h1>
          <p>{personalInfo.tagline}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary hero-view-projects">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me <MessageCircle size={16} />
            </a>
            <a href={personalInfo.resume} className="btn btn-secondary" download>
              Download Resume <Download size={16} />
            </a>
          </div>

          <div className="hero-socials">
            {socialLinks.map((link) => {
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                  <SocialIcon name={link.icon} size={17} />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          ref={cardRef}
          className="hero-visual"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <motion.div className="hero-glow" style={{ background: glow }} />
          <img src={personalInfo.avatar} alt="Profile" loading="lazy" />
          <div className="hero-visual-copy">
            <strong>Hey, I'm Mihir, in creative mode.</strong>
            <span>Building projects, sharpening skills, and turning ideas into reality.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
