// Data for portfolio
import {
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindCSS,
  TypescriptIcon,
  Html,
  Bootstrap,
  Css,
  Sass,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Project Alpha',
    shortDescription:
      'A groundbreaking project that revolutionizes the way we approach technology. Built with cutting-edge tools for maximum efficiency, it sets new industry standards.',
    cover:
      'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://example.com/alpha',
    type: 'Client Work 🙍‍♂️',
    siteAge: '1 month old',
  },
  {
    priority: 2,
    title: 'Project Beta',
    shortDescription:
      'Project Beta is a static technical blog site built with GatsbyJS. I share tips on topics like building reusable components in React, explaining JavaScript methods and concepts, Node.js scripts, and more.',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://example.com/beta',
    visitors: '8K Visitors',
    earned: '$400 Earned',
  },
  {
    priority: 3,
    title: 'Project Epsilon',
    shortDescription:
      'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic.',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop',
    type: 'Free 🔥',
    livePreview: 'https://example.com/epsilon',
    githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
    githubStars: '40 Stars',
    numberOfSales: '138 Sales',
  },
  {
    priority: 4,
    title: 'Ejucationzz',
    shortDescription:
      'Ejucationzz is a directory site built with Next.js listing free and paid online/offline courses in Pakistan.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop',
    type: 'New 🔥',
    livePreview: 'https://example.com/Ejucationzz',
    siteAge: '4 months old',
    visitors: '100 Visitors',
  },
]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  { name: 'HTML5', icon: Html },
  { name: 'CSS3', icon: Css },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'React.js', icon: ReactIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'Tailwind CSS', icon: TailwindCSS },
  { name: 'Bootstrap', icon: Bootstrap },
  { name: 'Scss', icon: Sass },
  // { name: 'Node.js', icon: NodejsIcon },
  // { name: 'Express.js', icon: ExpressjsIcon },
  // { name: 'Nest.js', icon: NestjsIcon },
  // { name: 'Socket.io', icon: SocketIcon },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Blogs', href: '#blogs' },
  { title: 'Services', href: '#services' },
  { title: 'Contact', href: '#contact' },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
