import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProgramEnrollment } from '../contexts/ProgramEnrollmentContext';
import './DigitalLearning.css';

const DigitalLearning = () => {
    const navigate = useNavigate();
    const { setProgramData } = useProgramEnrollment();

    return (
        <motion.div 
            className="digital-learning-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section */}
            <motion.div 
                className="digital-hero"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="hero-content">
                    <h1>Digital & Hybrid Learning Platforms</h1>
                    <p>Extending Blue Grass Academy's premium experience globally</p>
                </div>
            </motion.div>

            <div className="container">
                {/* Main Introduction */}
                <motion.section 
                    className="intro-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Learn Anytime, Anywhere</h2>
                            <p>
                                Blue Grass Academy's digital learning platform brings our world-class music education 
                                to your fingertips. Whether you're across the globe or prefer learning from home, 
                                our hybrid learning solutions maintain the same premium quality and personal attention 
                                that defines our academy.
                            </p>
                        </div>
                        <div className="intro-image">
                            <img 
                                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
                                alt="Online music learning platform"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Features Grid */}
                <motion.section 
                    className="features-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2>Platform Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">💻</div>
                            <h3>Live Interactive Classes</h3>
                            <p>Real-time video sessions with expert instructors, screen sharing, and instant feedback</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Mobile Learning App</h3>
                            <p>Access lessons, practice tracks, and assignments on any device, anywhere</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎥</div>
                            <h3>Recorded Lesson Library</h3>
                            <p>Extensive collection of pre-recorded tutorials for self-paced learning</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎵</div>
                            <h3>Digital Practice Tools</h3>
                            <p>Metronome, tuner, and backing tracks integrated into the learning platform</p>
                        </div>
                    </div>
                </motion.section>

                {/* Learning Modes */}
                <motion.section 
                    className="learning-modes-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2>Flexible Learning Modes</h2>
                    <div className="modes-content">
                        <div className="mode-card">
                            <div className="mode-header">
                                <h3>Fully Online</h3>
                                <span className="mode-badge">100% Remote</span>
                            </div>
                            <ul className="mode-features">
                                <li>Live video lessons with instructors</li>
                                <li>Flexible scheduling across time zones</li>
                                <li>Digital assignment submission</li>
                                <li>Online student community</li>
                            </ul>
                        </div>
                        <div className="mode-card">
                            <div className="mode-header">
                                <h3>Hybrid Model</h3>
                                <span className="mode-badge">Best of Both</span>
                            </div>
                            <ul className="mode-features">
                                <li>Combine in-person and online sessions</li>
                                <li>Access campus facilities when needed</li>
                                <li>Recorded lessons for review</li>
                                <li>Flexible attendance options</li>
                            </ul>
                        </div>
                        <div className="mode-card">
                            <div className="mode-header">
                                <h3>Self-Paced</h3>
                                <span className="mode-badge">Learn at Your Speed</span>
                            </div>
                            <ul className="mode-features">
                                <li>Pre-recorded comprehensive courses</li>
                                <li>24/7 access to learning materials</li>
                                <li>Optional monthly check-ins</li>
                                <li>Community forum support</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Technology Stack */}
                <motion.section 
                    className="tech-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="tech-content">
                        <div className="tech-text">
                            <h2>Cutting-Edge Technology</h2>
                            <p>
                                Our platform leverages the latest educational technology to ensure seamless, 
                                high-quality learning experiences. From low-latency audio transmission to 
                                AI-assisted practice tools, we're committed to providing the best digital 
                                music education available.
                            </p>
                            <div className="tech-highlights">
                                <div className="tech-item">
                                    <span className="tech-icon"></span>
                                    <span>Professional Audio Quality</span>
                                </div>
                                <div className="tech-item">
                                    <span className="tech-icon"></span>
                                    <span>HD Video Streaming</span>
                                </div>
                                <div className="tech-item">
                                    <span className="tech-icon"></span>
                                    <span>AI-Powered Feedback</span>
                                </div>
                                <div className="tech-item">
                                    <span className="tech-icon"></span>
                                    <span>Secure Platform</span>
                                </div>
                            </div>
                        </div>
                        <div className="tech-image">
                            <img 
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                                alt="Digital learning technology"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section 
                    className="cta-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <div className="cta-content">
                        <h2>Start Your Digital Music Journey</h2>
                        <p>Join students from around the world learning with Blue Grass Academy</p>
                        <div className="cta-buttons">
                            <motion.button 
                                className="cta-button primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setProgramData({
                                        category: 'digital-learning',
                                        programName: 'Digital & Hybrid Learning Platforms',
                                        timing: 'Flexible scheduling available'
                                    });
                                    navigate('/contact');
                                }}
                            >
                                Get in Touch
                            </motion.button>
                        </div>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default DigitalLearning;
