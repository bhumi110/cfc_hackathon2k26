import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import themesData from '../data/themesData';
import '../styles/themes.css';

const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const cardVariant = (i) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.08,
            ease: 'easeOut'
        }
    }
});

const iconVariant = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.35, ease: 'easeOut' }
    }
};

export default function Themes() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const sectionRef = useRef(null);

    return (
        <section
            className="st-section themes-section"
            id="themes"
            ref={(el) => {
                sectionRef.current = el;
                ref(el);
            }}
        >
            <div className="st-container">
                <motion.h2
                    className="st-section-title"
                    variants={sectionVariant}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    Themes
                </motion.h2>

                <div className="themes-grid">
                    {themesData.map((theme, i) => (
                        <motion.div
                            key={i}
                            className="theme-card st-card"
                            variants={cardVariant(i)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{
                                scale: 1.04,
                                y: -6,
                                transition: { duration: 0.2 }
                            }}
                            style={{ '--theme-color': theme.color }}
                        >
                            <motion.div
                                className="theme-icon-wrap"
                                variants={iconVariant}
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