import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import timelineData from '../data/timelineData';
import '../styles/timeline.css';

const cardVariant = (direction, delay) => ({
    hidden: {
        opacity: 0,
        x: direction === 'left' ? -80 : 80,
        scale: 0.85,
        filter: 'blur(6px)',
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
});

const dotVariant = (delay) => ({
    hidden: { scale: 0, opacity: 0, x: '-50%', y: '-50%' },
    visible: {
        scale: 1,
        opacity: 1,
        x: '-50%',
        y: '-50%',
        transition: {
            duration: 0.5,
            delay: delay + 0.2,
            type: 'spring',
            stiffness: 300,
            damping: 15,
        },
    },
});

const dateVariant = (delay) => ({
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: delay + 0.3 },
    },
});

const titleVariant = (delay) => ({
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: delay + 0.4 },
    },
});

const descVariant = (delay) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, delay: delay + 0.55 },
    },
});

function TimelineItem({ item, index, totalItems }) {
    const isLeft = index % 2 === 0;
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
    const staggerDelay = index * 0.15;

    return (
        <div
            className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'}`}
            ref={ref}
        >
            <motion.div
                className="timeline-content"
                variants={cardVariant(isLeft ? 'left' : 'right', staggerDelay)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <motion.span
                    className="timeline-date"
                    variants={dateVariant(staggerDelay)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {item.date}
                </motion.span>
                <motion.h3
                    className="timeline-title"
                    variants={titleVariant(staggerDelay)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {item.title}
                </motion.h3>
                <motion.p
                    className="timeline-desc"
                    variants={descVariant(staggerDelay)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {item.description}
                </motion.p>
            </motion.div>

            {/* Animated dot with pulse ring */}
            <motion.div
                className="timeline-dot"
                variants={dotVariant(staggerDelay)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <span className="timeline-dot-ping" />
            </motion.div>

            {/* Connector line segment that draws in */}
            {index < totalItems - 1 && (
                <motion.div
                    className="timeline-connector"
                    initial={{ scaleY: 0, x: '-50%' }}
                    animate={inView ? { scaleY: 1, x: '-50%' } : { scaleY: 0, x: '-50%' }}
                    transition={{
                        duration: 0.6,
                        delay: staggerDelay + 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                />
            )}
        </div>
    );
}

export default function Timeline() {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section className="st-section timeline-section" id="timeline" ref={ref}>
            <div className="st-particles">
                {[...Array(12)].map((_, i) => (
                    <span
                        key={i}
                        className={`st-particle ${i % 3 === 0 ? 'st-particle--red' : 'st-particle--cyan'}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${7 + Math.random() * 6}s`,
                            animationDelay: `${Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>

            <div className="st-container">
                <motion.h2
                    className="st-section-title"
                    initial={{ opacity: 0, y: 40, letterSpacing: '20px' }}
                    animate={inView ? { opacity: 1, y: 0, letterSpacing: '6px' } : {}}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    Timeline
                </motion.h2>

                <div className="timeline-track">
                    {/* Animated center line that draws downward */}
                    <motion.div
                        className="timeline-line"
                        initial={{ scaleY: 0, x: '-50%' }}
                        animate={inView ? { scaleY: 1, x: '-50%' } : { scaleY: 0, x: '-50%' }}
                        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ transformOrigin: 'top' }}
                    />

                    {timelineData.map((item, i) => (
                        <TimelineItem
                            item={item}
                            index={i}
                            key={i}
                            totalItems={timelineData.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
