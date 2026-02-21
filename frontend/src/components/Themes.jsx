import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import themesData from '../data/themesData';
import '../styles/themes.css';

const titleVariant = {
    hidden: { opacity: 0, y: 40, letterSpacing: '20px', filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        letterSpacing: '6px',
        filter: 'blur(0px)',
        transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const cardVariant = (i) => ({
    hidden: {
        opacity: 0,
        y: 80,
        scale: 0.75,
        rotateY: i % 2 === 0 ? -15 : 15,
        filter: 'blur(8px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            delay: 0.2 + i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
});

const iconVariant = (i) => ({
    hidden: { scale: 0, rotate: -90 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.5,
            delay: 0.5 + i * 0.1,
            type: 'spring',
            stiffness: 250,
            damping: 14,
        },
    },
});

export default function Themes() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

    return (
        <section className="st-section themes-section" id="themes" ref={(el) => { sectionRef.current = el; ref(el); }}>
            <motion.div className="st-particles" style={{ y: bgY }}>
                {[...Array(10)].map((_, i) => (
                    <span
                        key={i}
                        className={`st-particle ${i % 2 === 0 ? 'st-particle--red' : 'st-particle--cyan'}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${6 + Math.random() * 7}s`,
                            animationDelay: `${Math.random() * 5}s`,
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
                    Themes
                </motion.h2>

                <div className="themes-grid">
                    {themesData.map((theme, i) => (
                        <motion.div
                            className="theme-card st-card"
                            key={i}
                            variants={cardVariant(i)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{
                                scale: 1.04,
                                y: -8,
                                transition: { duration: 0.25 },
                            }}
                            style={{ '--theme-color': theme.color }}
                        >
                            <motion.div
                                className="theme-icon-wrap"
                                variants={iconVariant(i)}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                            >
                                <theme.icon />
                            </motion.div>
                            <h3 className="theme-title">{theme.title}</h3>
                            <p className="theme-desc">{theme.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
