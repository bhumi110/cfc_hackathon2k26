import { 
  FaRobot, 
  FaHeartbeat, 
  FaLeaf, 
  FaGraduationCap, 
  FaShieldAlt, 
  FaGlobe, 
  FaCode,
  FaLink
} from 'react-icons/fa';

const themesData = [
  {
    icon: FaRobot,
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems that learn, adapt, and automate. From NLP to computer vision, push the boundaries of machine intelligence.',
    color: 'var(--st-cyan)',
  },
  {
    icon: FaHeartbeat,
    title: 'Med Tech',
    description: 'Develop technology that enhances patient care, diagnostics, and healthcare accessibility through innovative digital solutions.',
    color: 'var(--st-red)',
  },
  {
    icon: FaLeaf,
    title: 'Sustainability',
    description: 'Create impactful green-tech solutions addressing climate change, renewable energy, and sustainable living.',
    color: '#00ff88',
  },
  {
    icon: FaGraduationCap,
    title: 'Education',
    description: 'Reimagine learning with interactive platforms, adaptive systems, and tools that make education more inclusive and accessible.',
    color: 'var(--st-purple)',
  },
  {
    icon: FaLink,
    title: 'Blockchain & Web3',
    description: 'Build decentralized applications, smart contracts, and secure digital ecosystems powered by blockchain technology.',
    color: '#ff6b35',
  },
  {
    icon: FaGlobe,
    title: 'Open Innovation',
    description: 'Think beyond boundaries. Build bold, cross-domain solutions that solve real-world challenges with creativity and technology.',
    color: '#ffcc00',
  },
  {
    icon: FaCode,
    title: 'Web & App Development',
    description: 'Design and develop scalable web and mobile applications with seamless UI/UX and robust backend architectures.',
    color: '#ffcc00',
  },
];

export default themesData;