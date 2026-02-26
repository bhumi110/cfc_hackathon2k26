import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaUsers, FaBolt } from 'react-icons/fa';
import monster1 from '../assets/1.jpg';
import '../styles/about.css';

const stats = [
    { icon: FaCode, title: 'Build', desc: '36 hours of non-stop coding and creativity' },
    { icon: FaUsers, title: 'Collaborate', desc: 'Teams of 2–4 hackers working together' },
    { icon: FaBolt, title: 'Innovate', desc: 'Push boundaries and solve real problems' },
];

const titleVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const descVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
    },
};

const cardVariant = (i) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.3 + i * 0.1,
            ease: 'easeOut',
        },
    },
});

export default function About() {
    const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

    return (
        <section className="st-section about-section" id="about" ref={ref}>
            <div className="st-container">
                <motion.h2
                    className="st-section-title"
                    variants={titleVariant}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    THE STORY OF THE PORTAL
                </motion.h2>

                <img src={monster1} alt="Demogorgon" className="about-monster" />

                <motion.p
                    className="about-description"
                    variants={descVariant}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    A 36-hour coding marathon organized by the Coding Club where teams
                    venture into the Upside Down to build innovative solutions.
                </motion.p>

                <div className="about-stats">
                    {stats.map((stat, i) => (
                        <motion.div
                            className="about-stat-card st-card"
                            key={i}
                            variants={cardVariant(i)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{ scale: 1.05, y: -10 }}
                        >
                            <div className="about-stat-icon">
                                <stat.icon />
                            </div>
                            <h3 className="about-stat-title">{stat.title}</h3>
                            <p className="about-stat-desc">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}