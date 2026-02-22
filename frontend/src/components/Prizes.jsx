import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import prizesData from '../data/prizesData';
import '../styles/prizes.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: 'easeOut',
    },
  }),
};

export default function Prizes() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="st-section prizes-section" id="prizes" ref={ref}>
      <div className="st-container">
        
        <motion.h2
          className="st-section-title"
          variants={fadeUp}
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
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              style={{
                '--prize-color': prize.color,
                '--prize-glow': prize.glow,
              }}
            >
              <div className="prize-icon-wrap">
                <prize.icon />
              </div>

              <h3 className="prize-place">{prize.place}</h3>
              <p className="prize-amount">{prize.prize}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}