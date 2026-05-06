import profimg from '../assets/beach1.jpeg'
import cakeimg from '../assets/cake1.png'
import pf from '../assets/pf.png'
import atp from '../assets/atp.png'
export const personalInfo = {
  name: 'Mihir Sawant', // Replace with your name
  role: 'Full-Stack Web Developer', // Replace with your role
  tagline:
    'I design and build modern digital experiences focused on clarity, performance, and smooth interaction.', // Replace with your tagline
  intro:
    'I’m a second-year engineering student passionate about web development and DevOps. I love creating responsive, user-focused web applications and exploring how they can be deployed, automated, and managed efficiently. My interest lies in understanding the complete development process, from building clean and functional interfaces to ensuring smooth deployment and performance. Through personal projects and continuous learning, I’ve been developing my skills in both development and deployment workflows. Web development allows me to bring ideas to life, while DevOps helps me understand the systems, tools, and processes that keep applications running reliably. I’m always eager to learn, experiment, and improve, with the goal of becoming a versatile engineer who can build and manage impactful digital solutions.', // Replace with your intro
  email: 'mihir.s.sawant17@gmail.com', // Replace with your email
  location: 'Mumbai, India', // Replace with your location
  resume: '/Mihir Sawant Resume.pdf', // Put your resume file in /public as resume.pdf
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
    label: 'Discord',
    href: 'https://discord.com', // Replace with your Discord profile URL
    icon: 'discord',
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
    text: 'I build with a design-first mindset, making every interaction feel smooth, sharp, and natural.',
  },
  {
    title: 'Vision to Launch',
    text: 'From idea to launch, I build websites that grab attention, feel effortless, and leave a lasting mark.',
  },
  {
    title: 'Beyond Code',
    text: 'Outside coding, I play guitar, grind Valorant (most significant part), and hit the gym.',
  },
]

export const skillGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 90 },
      { name: 'JavaScript', level: 93 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Motion', level: 92 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 86 },
      { name: 'Python', level: 89 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 92 },
      { name: 'MongoDB', level: 89 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Figma', level: 82 },
      { name: 'Framer', level: 84 },
      { name: 'GitHub Actions', level: 81 },
      { name: 'Adobe XD', level: 80 },
      //{ name: 'Docker', level: 76 },
      //{ name: 'Vite', level: 90 },
    ],
  },
]

export const projectCategories = ['All', 'Web App']

export const projects = [
  {
    title: 'Portfolio Website',
    category: 'Web App',
    description:
      'A premium personal portfolio with animated sections, seamless dark/light themes, and smooth micro-interactions that make every scroll and click feel crisp. Designed with elegant typography, interactive project showcases, and a fully responsive layout for a clean, high-end vibe',
    image: pf ,
    stack: ['React', 'Vite', 'Framer Motion', 'CSS'],
    github: 'https://github.com/itsmierrrrr/Portfolio.git', // Replace with project repository
    live: 'https://portfolioxo.vercel.app/', // Replace with live demo
  },
  {
    title: 'AI Trip Planner',
    category: 'Web App',
    description:
      'An AI-powered trip planner that generates smart itineraries, suggests destinations, and helps users organize travel with a clean, responsive interface. Built with React and Vite, it offers a seamless user experience and integrates the OpenRouter API for intelligent travel recommendations.',
    image: atp ,
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'OpenRouter API'],
    github: 'https://github.com/itsmierrrrr/AI-Trip-Planner.git', // Replace with project repository
    live: 'https://lessgoai.vercel.app/', // Replace with live demo
  },
  {
    title: 'Cake Shop Website',
    category: 'Web App',
    description:
      'An elegant bakery website with beautifully presented product showcases, seamless category browsing, and irresistible call-to-actions that turn visitors into customers. Crafted with warm visuals, smooth interactions, and a responsive design that feels as fresh as a tray of just-out-the-oven pastries',
    image: cakeimg ,
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/itsmierrrrr/Cake-Shop', // Replace with project repository
    live: 'https://royalebakes.vercel.app/', // Replace with live demo
  },
]

export const timelineItems = [
  {
    year: '2025-26',
    title: 'Second Year of Engineering',
    subtitle: 'Learning and Building Phase',
    description: 'Currently focused on learning DSA, building practical projects, gaining hands-on experience through internships, and staying consistent with academics.',
  },
  {
    year: '2024-25',
    title: 'First Year of Engineering',
    subtitle: 'Beginning of My Engineering Journey',
    description: 'Completed my first year with a strong focus on academics, discovered my interest in web development, and secured a CGPA of 8.6.',
  },
  {
    year: '2024',
    title: 'Completed Higher Secondary Education ',
    subtitle: 'T.P. Bhatia College of Science, Mumbai',
    description: 'Completed my higher secondary education with Computer Science as my primary subject, which deepened my interest in technology and development.',
  },
  {
    year: '2022',
    title: 'Completed 10th Grade',
    subtitle: 'VBSIS, Mumbai',
    description: 'Completed my secondary education and chose Computer Science as my main subject for further studies, which strengthened my interest in technology and problem-solving.',
  },
]
 