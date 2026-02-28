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
    const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4335481480935!2d87.37415747562517!3d23.51690412883044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7715f5d396cad%3A0xb158a587000d891c!2sNSHM%20Knowledge%20Campus%2C%20Durgapur!5e0!3m2!1sen!2sin!4v1772258686324!5m2!1sen!2sin";

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
                            Via, Shibtala Rd, Muchipara, Arrah Kalinagar,<br/> Arra, Durgapur, West Bengal 713212
                        </p>
                        <span className="venue-hint">CLICK TO EXPAND IN GOOGLE MAPS</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Venue;
