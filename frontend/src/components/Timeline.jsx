import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import timelineData from '../data/timelineData';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import '../styles/timeline.css';

// Import character images
import elevenImg from '../assets/character name/Stranger_Things_Eleven-removebg-preview (1).png';
import steveImg from '../assets/character name/Steve_Harrington-removebg-preview.png';
import nancyImg from '../assets/character name/Nancy_Wheeler-removebg-preview.png';
import dustinImg from '../assets/character name/download-removebg-preview.png';
import willImg from '../assets/character name/Will_Byers-removebg-preview.png';
import whatsitImg from '../assets/character name/mr_whatsit__-removebg-preview.png';

const characterImages = [
  elevenImg,
  dustinImg,
  nancyImg,
  steveImg,
  willImg,
  whatsitImg
];



const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const titleVariant = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* Stranger Things Christmas-light colors for the dots */
const lightColors = ['#e40000', '#f5c200', '#00e5ff', '#39ff14', '#b44dff', '#ff6b35'];

function TimelineItem({ item, index, characterImg }) {
  const isLeft = index % 2 === 0;
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const bulbColor = '#e40000'; // Force red color as requested

  return (
    <motion.div
      className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'} timeline-item-${index}`}
      ref={ref}

      variants={fadeIn}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <CardContainer
        className="timeline-content"
        containerClassName="timeline-card-perspective"
      >
        <CardBody className="timeline-card-body">
          <CardItem translateZ={40} className="timeline-date-wrapper">
            <span className="timeline-date">{item.date}</span>
          </CardItem>
          <CardItem as="h3" translateZ={60} className="timeline-title">
            {item.title}
          </CardItem>
          <CardItem as="p" translateZ={30} className="timeline-desc">
            {item.description}
          </CardItem>

          {/* Character background/side image */}
          <CardItem translateZ={20} className="timeline-character-wrapper">
            <img src={characterImg} alt="Character" className="timeline-character-img" />
          </CardItem>
        </CardBody>
      </CardContainer>

      {/* Christmas-light bulb dot — pure CSS, no framer-motion transform conflict */}
      <div
        className="timeline-dot"
        style={{
          '--bulb-color': bulbColor,
          '--bulb-glow': `${bulbColor}66`,
        }}
      >
        <span className="timeline-dot-ring" style={{ borderColor: bulbColor }} />
        <span className="timeline-dot-wire" />
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="st-section timeline-section" id="timeline" ref={ref}>
      {/* Floating ash particles — Upside Down vibe */}
      <div className="st-upside-particles" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <span className="st-ash" key={i} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }} />
        ))}
      </div>

      <div className="st-container">
        <motion.h2
          className="st-section-title timeline-title-flicker"
          variants={titleVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Timeline
        </motion.h2>

        <motion.div
          className="timeline-track"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* The "wire" for Christmas lights */}
          <div className="timeline-line">
            <div className="timeline-line-glow" />
          </div>

          {timelineData.map((item, i) => (
            <TimelineItem
              item={item}
              index={i}
              key={i}
              characterImg={characterImages[i % characterImages.length]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
