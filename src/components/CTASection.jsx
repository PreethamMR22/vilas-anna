import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './CTASection.css';

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <motion.div
                        className="rocket-icon"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </motion.div>
                    
                    <motion.h2
                        className="cta-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Ready to Start Your Child's
                        <span className="highlight-text"> Learning Journey?</span>
                    </motion.h2>
                    
                    <motion.p
                        className="cta-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Book a free demo class and see the Flurn difference. No commitments, just learning.
                    </motion.p>
                    
                    <motion.button
                        className="cta-button"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaCalendarAlt className="button-icon" />
                        Book Free Demo Class
                        <FaArrowRight className="button-arrow" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
