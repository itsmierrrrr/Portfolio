import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
}

function DiscordIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 19" aria-hidden="true" focusable="false">
      <use href="/icons.svg#discord-icon" />
    </svg>
  )
}

function SocialIcon({ name, size = 16 }) {
  if (name === 'discord') {
    return <DiscordIcon size={size} />
  }

  const Icon = iconMap[name] ?? Github
  return <Icon size={size} />
}

export default SocialIcon