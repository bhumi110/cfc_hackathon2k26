import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import sponsorsData from '../data/sponsorsData';
import '../styles/sponsors.css';

const tiers = [
    { key: 'platinum', label: 'Platinum Sponsors', accent: 'var(--st-cyan)' },
    { key: 'gold', label: 'Gold Sponsors', accent: '#ffd700' },
    { key: 'silver', label: 'Silver Sponsors', accent: '#c0c0c0' },
];

const titleVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay, ease: 'easeOut' },
    },
});

export default function Sponsors() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className="st-section sponsors-section" id="sponsors" ref={ref}>
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
                            variants={fadeUp(tierIndex * 0.15)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            {tier.label}
                        </motion.h3>

                        <motion.div
                            className="sponsor-tier-divider"
                            variants={fadeUp(tierIndex * 0.15 + 0.1)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        />

                        <div className={`sponsor-logos sponsor-logos--${tier.key}`}>
                            {sponsorsData[tier.key].map((sponsor, i) => (
                                <motion.div
                                    className="sponsor-logo-card st-card"
                                    key={i}
                                    variants={fadeUp(tierIndex * 0.15 + i * 0.08)}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}