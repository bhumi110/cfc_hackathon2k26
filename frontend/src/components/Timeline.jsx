import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import timelineData from '../data/timelineData';
import '../styles/timeline.css';

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'}`}
      ref={ref}
    >
      <motion.div
        className="timeline-content"
        variants={fadeVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <span className="timeline-date">{item.date}</span>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-desc">{item.description}</p>
      </motion.div>

      <div className="timeline-dot" />
    </div>
  );
}

export default function Timeline() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="st-section timeline-section" id="timeline" ref={ref}>
      <div className="st-container">
        <motion.h2
          className="st-section-title"
          variants={fadeVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Timeline
        </motion.h2>

        <div className="timeline-track">
          <div className="timeline-line" />
          {timelineData.map((item, i) => (
            <TimelineItem item={item} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}