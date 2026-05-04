import { useEffect, useMemo, useRef, useState } from 'react'
import {
  AnimatePresence,
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

function Hero({ onNameClick }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const typewriterPhrases = useMemo(
    () => [personalInfo.role, 'turning caffeine into code'],
    []
  )
  const heroCopyLines = useMemo(
    () => [
      'Weekend patch notes: fixed burnout, improved mood.',
      'Debugging life, one semicolon at a time.',
      'Currently teaching pixels new tricks.',
      'Building side quests after lectures.',
      'Deploying tiny pieces of the future.',
      'Farming XP in React and late nights.',
    ],
    []
  )
  const [typedRole, setTypedRole] = useState('')
  const [activePhraseIndex, setActivePhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [heroCopyIndex, setHeroCopyIndex] = useState(0)

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

  useEffect(() => {
    const currentPhrase = typewriterPhrases[activePhraseIndex]
    const isSecondaryPhrase = activePhraseIndex === 1
    const typingSpeed = isDeleting
      ? (isSecondaryPhrase ? 44 : 58)
      : (isSecondaryPhrase ? 72 : 95)
    const pauseAfterTyping = isSecondaryPhrase ? 520 : 1200
    const pauseAfterDeleting = 320
    let timeoutId

    if (!isDeleting && typedRole === currentPhrase) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true)
      }, pauseAfterTyping)
    } else if (isDeleting && typedRole === '') {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false)
        setActivePhraseIndex((previousIndex) => (previousIndex + 1) % typewriterPhrases.length)
      }, pauseAfterDeleting)
    } else {
      timeoutId = window.setTimeout(() => {
        const nextText = isDeleting
          ? currentPhrase.slice(0, typedRole.length - 1)
          : currentPhrase.slice(0, typedRole.length + 1)

        setTypedRole(nextText)
      }, typingSpeed)
    }

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [activePhraseIndex, isDeleting, typedRole, typewriterPhrases])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroCopyIndex((currentIndex) => (currentIndex + 1) % heroCopyLines.length)
    }, 3000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [heroCopyLines.length])

  return (
    <section id="home" className="section hero-section">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow"></span>
          <h1>
            <button
              type="button"
              className="hero-name-trigger"
              onClick={onNameClick}
              aria-label="Mihir Sawant"
            >
              <span className="hero-name">
                <span className="swap swap-mi">
                  <span className="lat">Mi</span>
                  <span className="dev">मि</span>
                </span>
                <span className="lat-rest">hi</span>
                <span className="swap swap-r">
                  <span className="lat">r</span>
                  <span className="dev">र</span>
                </span>
                <span className="space"> </span>
                <span className="swap swap-sa">
                  <span className="lat">Sa</span>
                  <span className="dev">सा</span>
                </span>
                <span className="swap swap-w">
                  <span className="lat">w</span>
                  <span className="dev">व</span>
                </span>
                <span className="lat-rest">an</span>
                <span className="swap swap-t">
                  <span className="lat">t</span>
                  <span className="dev">त</span>
                </span>
              </span>
            </button>
            <span className="hero-role-typewriter">{typedRole}</span>
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

          <span className="hero-live-status">
            <span className="hero-live-dot" aria-hidden="true" />
            Busy with endsem exams
          </span>
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
            <div className="hero-visual-meta">
              <strong>Hey, I'm Mihir, in creative mode.</strong>
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={heroCopyIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {heroCopyLines[heroCopyIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
