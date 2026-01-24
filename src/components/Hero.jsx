import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaMusic, FaStar, FaYoutube } from 'react-icons/fa';
import { useVideoModal } from '../contexts/VideoModalContext';
const heroImage = '/images/hero.png';
import './Hero.css';

const Hero = () => {
    const { openVideoModal } = useVideoModal();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <section className="hero">
            <div className="hero-bg-wrapper">
                <motion.img 
                    src={heroImage} 
                    alt="Piano student" 
                    className="hero-bg"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
                <div className="hero-overlay"></div>
                <div className="hero-particles">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                                y: [0, -100, -200]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <motion.div 
                className="container hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={itemVariants}>
                    Blue Grass <br />
                    <span className="text-gold">Academy</span>
                </motion.h1>

                <motion.div 
                    className="hero-subtitle"
                    variants={itemVariants}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Music • <span className="text-white">Yoga</span> • Art Therapy
                </motion.div>

                <motion.div className="hero-badge" variants={itemVariants}>
                    <FaMusic className="badge-icon" />
                    <span>Excellence in Music Education</span>
                    <FaStar className="badge-star" />
                </motion.div>

                <motion.p variants={itemVariants}>
                    <span className="text-gold text-bold">Blue Grass Academy</span> is a holistic learning space where Music, Yoga and Art Therapy come together to help learners grow with confidence, creativity and calm.
                </motion.p>

                <motion.div className="hero-buttons" variants={itemVariants}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/contact" className="btn btn-primary">
                            <FaPlay className="btn-icon" />
                            Book a Free Demo
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/programs" className="btn btn-outline">
                            View Programs
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <button 
                            className="btn btn-outline btn-video"
                            onClick={openVideoModal}
                        >
                            <FaYoutube className="btn-icon" />
                            Watch Brand Film
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="hero-stats"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}
                >
                    <div className="stat-item">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Students</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Programs</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Years</div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
