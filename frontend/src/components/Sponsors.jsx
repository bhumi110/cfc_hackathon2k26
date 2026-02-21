import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import sponsorsData from '../data/sponsorsData';
import '../styles/sponsors.css';

const tiers = [
    { key: 'platinum', label: 'Platinum Sponsors', accent: 'var(--st-cyan)' },
    { key: 'gold', label: 'Gold Sponsors', accent: '#ffd700' },
    { key: 'silver', label: 'Silver Sponsors', accent: '#c0c0c0' },
];

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

const tierLabelVariant = (tierIndex) => ({
    hidden: { opacity: 0, x: tierIndex % 2 === 0 ? -40 : 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: tierIndex * 0.25,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
});

const logoVariant = (tierIndex, logoIndex) => ({
    hidden: { opacity: 0, scale: 0.6, y: 30, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            delay: tierIndex * 0.25 + 0.15 + logoIndex * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
});

const dividerVariant = (tierIndex) => ({
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.8,
            delay: tierIndex * 0.25 + 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
});

export default function Sponsors() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    return (
        <section className="st-section sponsors-section" id="sponsors" ref={(el) => { sectionRef.current = el; ref(el); }}>
            <motion.div className="st-particles" style={{ y: bgY }}>
                {[...Array(8)].map((_, i) => (
                    <span
                        key={i}
                        className={`st-particle ${i % 2 === 0 ? 'st-particle--red' : 'st-particle--cyan'}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${7 + Math.random() * 6}s`,
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
                    Our Sponsors
                </motion.h2>

                {tiers.map((tier, tierIndex) => (
                    <div className="sponsor-tier" key={tier.key}>
                        <motion.h3
                            className="sponsor-tier-label"
                            style={{ color: tier.accent }}
                            variants={tierLabelVariant(tierIndex)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            {tier.label}
                        </motion.h3>

                        <motion.div
                            className="sponsor-tier-divider"
                            variants={dividerVariant(tierIndex)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            style={{ transformOrigin: 'center' }}
                        />

                        <div className={`sponsor-logos sponsor-logos--${tier.key}`}>
                            {sponsorsData[tier.key].map((sponsor, i) => (
                                <motion.div
                                    className="sponsor-logo-card st-card"
                                    key={i}
                                    variants={logoVariant(tierIndex, i)}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    whileHover={{
                                        scale: 1.06,
                                        y: -4,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
