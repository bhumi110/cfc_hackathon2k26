import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/venue.css';
import venueMap from '../assets/venue_map.png';

const Venue = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const googleMapsUrl = "https://www.google.com/maps/search/NSHM+Knowledge+Campus,+Durgapur";
    const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8596!2d87.3090!3d23.5415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f77174623a851b%3A0xe213038a8e1008e7!2sNSHM%20Knowledge%20Campus%2C%20Durgapur!5e0!3m2!1sen!2sin!4v1740583764000!5m2!1sen!2sin";

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="venue-section" id="venue" ref={ref}>
            <div className="venue-container">
                <motion.h2
                    className="venue-title"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                >
                    THE GATEWAY
                </motion.h2>

                <motion.div
                    className="venue-card"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                >
                    <div className="venue-map-container">
                        <iframe
                            src={embedUrl}
                            className="venue-map-iframe"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="NSHM Durgapur Map"
                        ></iframe>
                        <div className="venue-map-overlay" onClick={() => window.open(googleMapsUrl, '_blank')}></div>
                    </div>

                    <div className="venue-info" onClick={() => window.open(googleMapsUrl, '_blank')}>
                        <h3 className="venue-address">NSHM KNOWLEDGE CAMPUS, DURGAPUR</h3>
                        <p className="venue-details">
                            Arrah, Shibtala, Muchipara<br />
                            Durgapur - 713212, West Bengal, India
                        </p>
                        <span className="venue-hint">CLICK TO EXPAND IN GOOGLE MAPS</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Venue;
