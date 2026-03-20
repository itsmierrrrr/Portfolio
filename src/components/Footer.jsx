import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import '../styles/Footer.css'

function Footer({ onBackToTop }) {
  return (
    <footer className="footer">
      <p>{new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>

      <div className="footer-socials">
        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={16} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={16} />
        </a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
          <Mail size={16} />
        </a>
        <button type="button" onClick={onBackToTop} aria-label="Back to top">
          <ChevronUp size={16} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
