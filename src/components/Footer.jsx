import { ChevronUp, Download } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolioData'
import SocialIcon from './SocialIcon'
import '../styles/Footer.css'

function Footer({ onBackToTop }) {
  return (
    <footer className="footer">
      <p>{new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>

      <div className="footer-socials">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            aria-label={link.label}
          >
            <SocialIcon name={link.icon} size={16} />
          </a>
        ))}
        <a href={personalInfo.resume} download aria-label="Download resume">
          <Download size={16} />
        </a>
        <button type="button" onClick={onBackToTop} aria-label="Back to top">
          <ChevronUp size={16} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
