import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const Section = ({ title, subtitle, children, className = '', id = '' }) => {
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
        <section className={`section ${className}`} id={id}>
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {(title || subtitle) && (
                    <motion.div 
                        className="section-header"
                        variants={itemVariants}
                    >
                        {title && (
                            <motion.h2 variants={itemVariants}>
                                {title}
                            </motion.h2>
                        )}
                        {subtitle && (
                            <motion.p variants={itemVariants}>
                                {subtitle}
                            </motion.p>
                        )}
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
                )}
                <motion.div variants={itemVariants}>
                    {children}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Section;
