import profimg from '../assets/Gemini_Generated_Image_vi4ngsvi4ngsvi4n.png'
import cakeimg from '../assets/cake.png'
import pf from '../assets/pf.png'
export const personalInfo = {
  name: 'Mihir Sawant', // Replace with your name
  role: 'Full-Stack Web Developer', // Replace with your role
  tagline:
    'I design and engineer immersive digital experiences that blend clarity, motion, and performance.', // Replace with your tagline
  intro:
    'I am a second year engineering student exploring web development and devops.', // Replace with your intro
  email: 'mihir.s.sawant17@gmail.com', // Replace with your email
  location: 'Mumbai, India', // Replace with your location
  avatar:
    profimg, // Replace with your profile image
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/itsmierrrrr', // Replace with your GitHub URL
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mihirsawantxo', // Replace with your LinkedIn URL
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/mihir.s_', // Replace with your Instagram URL
    icon: 'instagram',
  },
  {
    label: 'Email',
    href: 'mailto:mihir.s.sawant17@gmail.com', // Replace with your email link
    icon: 'mail',
  },
]

export const aboutCards = [
  {
    title: 'Design-Driven Engineering',
    text: 'I build with a design-first mindset, ensuring each interaction feels polished and intuitive.',
  },
  {
    title: 'Product & Strategy',
    text: 'From discovery to launch, I help in building market ready, customers attention pulling websites.',
  },
  {
    title: 'Beyond Code',
    text: 'I enjoy playing guitar, going to gym and playing valorant.',
  },
]

export const skillGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'JavaScript', level: 94 },
      { name: 'CSS / Motion', level: 92 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 84 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 78 },
      { name: 'MongoDB', level: 83 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Figma', level: 89 },
      { name: 'GitHub Actions', level: 81 },
      //{ name: 'Docker', level: 76 },
      { name: 'Vite', level: 90 },
    ],
  },
]

export const projectCategories = ['All', 'Web App']

export const projects = [
  {
    title: 'Portfolio Website',
    category: 'Web App',
    description:
      'A premium personal portfolio with animated sections, dark/light themes, and refined micro-interactions.',
    image: pf ,
    stack: ['React', 'Vite', 'Framer Motion', 'CSS'],
    github: 'https://github.com/itsmierrrrr/Portfolio.git', // Replace with project repository
    live: 'https://portfolioxo.vercel.app/', // Replace with live demo
  },
  {
    title: 'Cake Shop Website',
    category: 'Web App',
    description:
      'An elegant bakery website with product showcases, category browsing, and conversion-focused call-to-actions.',
    image: cakeimg ,
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/itsmierrrrr', // Replace with project repository
    live: 'https://example.com',
  },
]

export const timelineItems = [
  {
    year: '2026',
    title: 'Second year',
    subtitle: 'Learner phase',
    description: 'Learning DSA, Learning to build projects, Completed various internships and keeping up with academics.',
  },
  {
    year: '2025',
    title: 'First year',
    subtitle: 'VPPCOE, Mumbai',
    description: 'Focused on the academics, got introduced to the world of web development and scored CGPA of 8.6',
  },
  {
    year: '2024',
    title: 'Completed HSC ',
    subtitle: 'Done with schooling.',
    description: 'Completed my 12th grade with Computer Science as my main subject.',
  },
  {
    year: '2022',
    title: 'Completed 10th',
    subtitle: 'VBSIS, Mumbai',
    description: 'Done with the Matrix certification and proceede to 11th grade with Computer Science as my main subject.',
  },
]
