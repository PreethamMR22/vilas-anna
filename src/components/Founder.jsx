import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Founder.css';

const Founder = () => {
    const navigate = useNavigate();

    const handleBookDemo = () => {
        navigate('/contact');
    };

    const handleContactVisit = () => {
        navigate('/contact');
    };

    return (
        <section className="founder-section">
            <div className="founder-container">
                <motion.div 
                    className="founder-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="founder-header">
                        <motion.h2 
                            className="founder-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Meet the Founder
                        </motion.h2>
                    </div>

                    <div className="founder-grid">
                        <motion.div 
                            className="founder-image-wrapper"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="founder-image-container">
                                <img 
                                    src="/images/founder.png" 
                                    alt="Kawitha Mangalapudi - Founder of Blue Grass Academy" 
                                    className="founder-image"
                                />
                                <div className="founder-image-overlay"></div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="founder-info"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="founder-name">Kawitha Mangalapudi</h3>
                            <p className="founder-role">Founder, Blue Grass Academy</p>
                            
                            <div className="founder-description">
                                <p>
                                    Building a holistic academy:
                                </p>
                                <p>
                                    <span className="highlight">Music • Yoga • Art Therapy</span>
                                </p>
                                <p>
                                    A space for learning, wellness and creative growth
                                </p>
                                <p>
                                    Focused on quality training and personal attention
                                </p>
                            </div>

                            <div className="founder-actions">
                                <motion.button 
                                    className="founder-btn primary"
                                    onClick={handleBookDemo}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Book a Demo
                                </motion.button>
                                <motion.button 
                                    className="founder-btn secondary"
                                    onClick={handleContactVisit}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Contact / Visit Us
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Founder;
