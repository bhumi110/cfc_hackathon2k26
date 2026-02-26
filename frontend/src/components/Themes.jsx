import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import themesData from '../data/themesData';
import monster2 from '../assets/2.jpg';
import { HoverEffect, CardTitle, CardDescription } from "./ui/card-hover-effect";
import '../styles/themes.css';

const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export default function Themes() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const sectionRef = useRef(null);

    const formattedThemes = themesData.map((theme, i) => ({
        title: theme.title,
        link: "#",
        children: (
            <div className="brutalist-card">
                <div className="theme-icon-brutalist" style={{ color: theme.color }}>
                    <theme.icon />
                </div>

                <span className="card__title glitch-hover">
                    {theme.title}
                </span>

                <p className="card__content">
                    {theme.description}
                </p>
            </div>
        )
    }));

    return (
        <section
            className="st-section themes-section"
            id="themes"
            ref={(el) => {
                sectionRef.current = el;
                ref(el);
            }}
        >
            <img src={monster2} alt="Mind Flayer" className="themes-monster" />
            <div className="st-container">
                <motion.h2
                    className="st-section-title"
                    variants={sectionVariant}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    THE DIMENSIONS OF INNOVATION
                </motion.h2>

                <div className="mt-8">
                    <HoverEffect items={formattedThemes} className="max-w-7xl mx-auto themes-grid-compact" />
                </div>
            </div>
        </section>
    );
}
