import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaUsers, FaBolt } from 'react-icons/fa';
import '../styles/about.css';

const stats = [
    { icon: FaCode, title: 'Build', desc: '36 hours of non-stop coding and creativity' },
    { icon: FaUsers, title: 'Collaborate', desc: 'Teams of 2–4 hackers working together' },
    { icon: FaBolt, title: 'Innovate', desc: 'Push boundaries and solve real problems' },
];

const titleVariant = {
    hidden: { opacity: 0, y: 50, letterSpacing: '20px', filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        letterSpacing: '6px',
        filter: 'blur(0px)',
        transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const descVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const cardVariant = (i) => ({
    hidden: { opacity: 0, y: 60, scale: 0.8, rotateX: 15, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            delay: 0.5 + i * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
});

const iconVariant = (i) => ({
    hidden: { scale: 0, rotate: -180 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
            delay: 0.7 + i * 0.15,
            type: 'spring',
            stiffness: 200,
            damping: 12,
        },
    },
});

export default function About() {
    const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    return (
        <section className="st-section about-section" id="about" ref={(el) => { sectionRef.current = el; ref(el); }}>
            {/* Parallax particles */}
            <motion.div className="st-particles" style={{ y: bgY }}>
                {[...Array(15)].map((_, i) => (
                    <span
                        key={i}
                        className={`st-particle ${i % 2 === 0 ? 'st-particle--red' : 'st-particle--cyan'}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${6 + Math.random() * 8}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                        }}
                    />
                ))}
            </motion.div>

            <div className="st-container">
                <motion.h2
                    className="st-section-title"
                    variants={titleVariant}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    About the Hackathon
                </motion.h2>

                <motion.p
                    className="about-description"
                    variants={descVariant}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    A 36-hour coding marathon organized by the Coding Club where teams
                    venture into the Upside Down to build innovative solutions. Battle the
                    Demogorgon of boring tech and emerge with something extraordinary.
                </motion.p>

                <div className="about-stats">
                    {stats.map((stat, i) => (
                        <motion.div
                            className="about-stat-card st-card"
                            key={i}
                            variants={cardVariant(i)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <motion.div
                                className="about-stat-icon"
                                variants={iconVariant(i)}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                            >
                                <stat.icon />
                            </motion.div>
                            <h3 className="about-stat-title">{stat.title}</h3>
                            <p className="about-stat-desc">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
