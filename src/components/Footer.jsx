import { ChevronUp, Download } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolioData'
import SocialIcon from './SocialIcon'
import '../styles/Footer.css'

function FooterEggIcon() {
  const eggShape = 'M12 2.8C10.1 2.8 8.4 4.1 7.2 6.3C6.1 8.3 5.5 10.9 5.5 13.1C5.5 17.1 8.7 21.2 12 21.2C15.3 21.2 18.5 17.1 18.5 13.1C18.5 10.9 17.9 8.3 16.8 6.3C15.6 4.1 13.9 2.8 12 2.8Z'

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="footer-egg-clip">
          <path d={eggShape} />
        </clipPath>
      </defs>
      <path d={eggShape} fill="none" stroke="currentColor" strokeWidth="1.3" />
      <g clipPath="url(#footer-egg-clip)" fill="currentColor" opacity="0.82">
        <path d="M9.2 8.7l.35.75.75.35-.75.35-.35.75-.35-.75-.75-.35.75-.35z" />
        <path d="M13.5 10.9l.28.6.6.28-.6.28-.28.6-.28-.6-.6-.28.6-.28z" />
        <path d="M11.3 13.6l.24.5.5.24-.5.24-.24.5-.24-.5-.5-.24.5-.24z" />
      </g>
    </svg>
  )
}

function Footer({ onBackToTop }) {
  return (
    <footer className="footer">
      <p>{new Date().getFullYear()} © {personalInfo.name}. All Rights Reserved.</p>

      <div className="footer-socials">
        <span className="footer-icon footer-egg" role="img" aria-label="Easter egg" title="Easter egg">
          <FooterEggIcon />
        </span>
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
