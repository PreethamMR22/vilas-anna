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
                                    src="/founder-section/founder.jpeg" 
                                    alt="Kawitha Reddy - Founder of Blue Grass Academy" 
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
                            <h3 className="founder-name">Kawitha Reddy</h3>
                            <p className="founder-role">Founder, Blue Grass Academy</p>
                            
                            <div className="founder-description">
                                <p>
                                    Kawitha Reddy is the visionary founder of Blue Grass Music Academy, driven by a deep passion for music, education, and artistic growth. She believes in building strong foundations that transform beginners into confident performers.
                                </p>
                                <p>
                                    Her teaching philosophy is rooted in motherly care, disciplined training, and personal mentorship, ensuring that every student receives individual attention and encouragement at every stage of their journey.
                                </p>
                                <p>
                                    Alongside her role as an educator and mentor, Kawitha is actively pursuing advanced violin training, continuously refining her artistry to bring modern techniques and global performance standards into the academy.
                                </p>
                                <p>
                                    Under her leadership, Blue Grass Academy has grown into a trusted name for quality music education, performance training, and creative development.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Founder;
