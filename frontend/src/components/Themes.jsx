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
        link: "#", // Add internal anchor if needed
        children: (
            <div className="flex flex-col items-center justify-center text-center">
                <div
                    className="theme-icon-wrap-new relative group/icon mb-6"
                    style={{ '--theme-color': theme.color }}
                >
                    <div className="absolute -inset-2 bg-[rgba(228,0,0,0.4)] rounded-2xl blur-2xl opacity-0 group-hover/icon:opacity-100 transition duration-500 pointer-events-none"></div>
                    <div className="relative z-10 p-4 rounded-2xl bg-[#111114] border border-[rgba(255,255,255,0.05)] text-3xl transition-transform duration-500 group-hover/icon:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                        <theme.icon style={{ color: theme.color }} />
                    </div>
                </div>

                <CardTitle className="mb-2">
                    {theme.title.toUpperCase()}
                </CardTitle>

                <CardDescription className="font-bold tracking-wider text-zinc-400">
                    {theme.description}
                </CardDescription>
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
                    Themes
                </motion.h2>

                <div className="mt-8">
                    <HoverEffect items={formattedThemes} className="max-w-7xl mx-auto" />
                </div>
            </div>
        </section>
    );
}
