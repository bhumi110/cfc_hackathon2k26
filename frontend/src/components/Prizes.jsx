import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import prizesData from '../data/prizesData';
import '../styles/prizes.css';

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
    hidden: { opacity: 0, y: 100, scale: 0.6, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            delay: 0.2 + i * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
});

const iconVariant = (i) => ({
    hidden: { scale: 0, y: 20 },
    visible: {
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.5 + i * 0.15,
            type: 'spring',
            stiffness: 300,
            damping: 12,
        },
    },
});

const amountVariant = (i) => ({
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.7 + i * 0.15,
            type: 'spring',
            stiffness: 200,
        },
    },
});

export default function Prizes() {
    const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    return (
        <section className="st-section prizes-section" id="prizes" ref={(el) => { sectionRef.current = el; ref(el); }}>
            <motion.div className="st-particles" style={{ y: bgY }}>
                {[...Array(10)].map((_, i) => (
                    <span
                        key={i}
                        className={`st-particle ${i % 2 === 0 ? 'st-particle--cyan' : 'st-particle--red'}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${6 + Math.random() * 7}s`,
                            animationDelay: `${Math.random() * 4}s`,
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
                    Prizes
                </motion.h2>

                <div className="prizes-grid">
                    {prizesData.map((prize, i) => (
                        <motion.div
                            className="prize-card st-card"
                            key={i}
                            variants={cardVariant(i)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{
                                scale: 1.08,
                                y: -10,
                                transition: { duration: 0.25 },
                            }}
                            style={{ '--prize-color': prize.color, '--prize-glow': prize.glow }}
                        >
                            <motion.div
                                className="prize-icon-wrap"
                                variants={iconVariant(i)}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                            >
                                <prize.icon />
                            </motion.div>
                            <h3 className="prize-place">{prize.place}</h3>
                            <motion.p
                                className="prize-amount"
                                variants={amountVariant(i)}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                            >
                                {prize.prize}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
