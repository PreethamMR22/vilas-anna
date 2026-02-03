import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGraduationCap, FaCertificate, FaCheckCircle } from 'react-icons/fa';
import './Certification.css';

const Certification = () => {
    const certifications = [
        {
            name: 'Trinity College London',
            description: 'Internationally recognized music performance and theory examinations'
        },
        {
            name: 'RSL Awards (Rockschool London)',
            description: 'Contemporary music qualifications for modern instruments'
        },
        {
            name: 'ABRSM (Associated Board of the Royal Schools of Music)',
            description: 'Prestigious classical music examinations and assessments'
        },
        {
            name: 'University of West London – London College of Music',
            description: 'Comprehensive music education and performance certifications'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <section className="certification">
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="certification-header" variants={itemVariants}>
                    <motion.h2 variants={itemVariants}>
                        <FaAward className="header-icon" />
                        INTERNATIONAL BENCHMARKS & CERTIFICATION
                    </motion.h2>
                    <motion.p variants={itemVariants} className="certification-subtitle">
                        Our training methodology is aligned with international music education benchmarks
                    </motion.p>
                    <motion.div
                        className="section-separator"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: 0.3, 
                            duration: 0.8,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    />
                </motion.div>

                <motion.div className="certification-content" variants={itemVariants}>
                    <motion.div className="certification-description bg-glass" variants={itemVariants}>
                        <p>
                            We prepare students for globally recognized certification and performance frameworks. 
                            Students receive level-based performance certificates, theory and practical assessments, 
                            and instrument proficiency recognition that supports academic and professional musical growth.
                        </p>
                    </motion.div>

                    <motion.div className="certification-benefits" variants={itemVariants}>
                        <h3 className="benefits-title">
                            <FaGraduationCap className="benefits-icon" />
                            Certification Benefits
                        </h3>
                        <div className="benefits-list">
                            {[
                                'Level-based performance certificates',
                                'Comprehensive theory and practical assessments',
                                'Instrument proficiency recognition',
                                'Academic and professional growth support'
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="benefit-point"
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="benefit-number">{String(index + 1).padStart(2, '0')}</div>
                                    <div className="benefit-text">{benefit}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="certification-grid" variants={itemVariants}>
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="certification-card bg-glass"
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -5,
                                    borderColor: 'rgba(74, 222, 128, 0.3)',
                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="certification-icon">
                                    <FaCertificate />
                                </div>
                                <h3>{cert.name}</h3>
                                <p>{cert.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Certification;
