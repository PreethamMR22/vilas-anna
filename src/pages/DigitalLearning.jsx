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
                <h1>Interactive Live Music Sessions</h1>
                <p>Learn instruments directly from expert instructors through live remote sessions</p>
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
                            <h2>Learn Instruments Live, From Anywhere</h2>
                            <p>
                                Join our interactive live sessions and learn your favorite instruments directly from expert instructors. 
                                Get personalized attention, clear your doubts in real-time, and receive instant feedback 
                                - all from the comfort of your home.
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
                    <h2>What We Offer</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🎵</div>
                            <h3>Live Instrument Teaching</h3>
                            <p>Real-time video sessions with expert instructors for guitar, piano, violin, drums and more</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">�</div>
                            <h3>Instant Doubt Clearing</h3>
                            <p>Ask questions and get immediate answers during live sessions for better understanding</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👨‍�</div>
                            <h3>Personalized Attention</h3>
                            <p>One-on-one and small group sessions ensuring individual focus on your learning progress</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">�</div>
                            <h3>Learn From Home</h3>
                            <p>Attend classes remotely with flexible scheduling that fits your routine</p>
                        </div>
                    </div>
                </motion.section>

                {/* Session Types */}
                <motion.section 
                    className="learning-modes-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2>Live Session Formats</h2>
                    <div className="modes-content">
                        <div className="mode-card">
                            <div className="mode-header">
                                <h3>One-on-One Sessions</h3>
                                <span className="mode-badge">Personalized</span>
                            </div>
                            <ul className="mode-features">
                                <li>Individual attention from instructors</li>
                                <li>Customized lesson plans</li>
                                <li>Flexible timing</li>
                                <li>Focus on your specific instrument</li>
                            </ul>
                        </div>
                        <div className="mode-card">
                            <div className="mode-header">
                                <h3>Small Group Classes</h3>
                                <span className="mode-badge">Interactive</span>
                            </div>
                            <ul className="mode-features">
                                <li>Learn with 3-5 students</li>
                                <li>Peer learning opportunities</li>
                                <li>Cost-effective option</li>
                                <li>Group performances and activities</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* How It Works */}
                <motion.section 
                    className="tech-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="tech-content">
                        <div className="tech-text">
                            <h2>How Live Sessions Work</h2>
                            <p>
                                Our live music sessions use simple video conferencing technology to connect you 
                                with expert instructors. All you need is your instrument and a device with camera 
                                and microphone to start learning from anywhere.
                            </p>
                            <div className="tech-highlights">
                                <div className="tech-item">
                                    <span className="tech-icon"></span>
                                    <span>HD Video Quality</span>
                                </div>
                                <div className="tech-item">
                                    <span className="tech-icon"></span>
                                    <span>Clear Audio Transmission</span>
                                </div>
                                <div className="tech-item">
                                    <span className="tech-icon"></span>
                                    <span>Screen Sharing for Music Sheets</span>
                                </div>
                                <div className="tech-item">
                                    <span className="tech-icon"></span>
                                    <span>Recording Available for Practice</span>
                                </div>
                            </div>
                        </div>
                        <div className="tech-image">
                            <img 
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                                alt="Live music session"
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
                        <h2>Start Your Live Music Learning Journey</h2>
                        <p>Join students from around the world learning instruments through interactive live sessions</p>
                        <div className="cta-buttons">
                            <motion.button 
                                className="cta-button primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setProgramData({
                                        category: 'live-sessions',
                                        programName: 'Interactive Live Music Sessions',
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
