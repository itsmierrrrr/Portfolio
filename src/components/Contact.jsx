import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { personalInfo } from '../data/portfolioData'
import '../styles/Contact.css'

function Contact() {
  const [isSent, setIsSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setIsSent(true)
  }

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Let us build something remarkable"
        description="Share your vision and timeline. I usually reply within one business day."
      />

      <div className="contact-grid">
        <motion.form
          className="contact-form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required autocomplete="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required />

          <button type="submit" className="btn btn-primary contact-send-message">
            Send Message <Send size={16} />
          </button>

          {isSent && <p className="sent-message">Thanks for connecting. Kisses from Mihir!</p>}
        </motion.form>

        <motion.div
          className="contact-cards"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <article>
            <Mail size={18} />
            <h3>Email</h3>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </article>

          <article>
            <MapPin size={18} />
            <h3>Location</h3>
            <p>{personalInfo.location}</p>
          </article>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
