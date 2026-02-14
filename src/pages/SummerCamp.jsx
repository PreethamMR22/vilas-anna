import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProgramEnrollment } from '../contexts/ProgramEnrollmentContext';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import './SummerCamp.css';

const SummerCamp = () => {
    const navigate = useNavigate();
    const { setProgramData } = useProgramEnrollment();

    const handleEnroll = () => {
        setProgramData({
            programName: 'Summer Camp',
            category: 'summer-camp',
            programType: 'summer-camp',
            price: 'Contact for pricing'
        });
        navigate('/contact');
    };

    return (
        <motion.div 
            className="summer-camp-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section */}
            <motion.div 
                className="summer-camp-hero"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Blue Grass Summer Camp</h1>
                <p>A premium creative immersion for children</p>
                <motion.button 
                    className="btn btn-primary"
                    onClick={handleEnroll}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Register Now
                </motion.button>
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
                            <h2>Where Creativity Meets Adventure</h2>
                            <p>
                                Our Blue Grass Summer Camp offers an extraordinary opportunity for children to explore their creative potential 
                                in a nurturing, professional environment. With limited seats each year, we ensure personalized attention 
                                and transformative experiences that last a lifetime.
                            </p>
                            <div className="highlight-section">
                                <div className="limited-seats">
                                    <div className="seats-content">
                                        <h3>Limited Seats Every Year</h3>
                                        <p>Secure your child's spot in our premium creative immersion program</p>
                                    </div>
                                    <div className="social-links">
                                        <span className="explore-text">Explore More</span>
                                        <div className="social-icons">
                                            <a 
                                                href="https://www.instagram.com/blue_grass_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="social-icon"
                                                aria-label="Follow us on Instagram"
                                            >
                                                <FaInstagram />
                                            </a>
                                            <a 
                                                href="https://www.facebook.com/share/189bp67bcA/?mibextid=wwXIfr" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="social-icon"
                                                aria-label="Follow us on Facebook"
                                            >
                                                <FaFacebookF />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-image">
                            <img 
                                src="/program-cards-images/summer-camp.jpg"
                                alt="Summer camp activities"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Activities Grid */}
                <motion.section 
                    className="activities-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2>Camp Activities</h2>
                    <div className="activities-grid">
                        <motion.div 
                            className="activity-card"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="activity-icon">🎵</div>
                            <h3>Music Exploration</h3>
                            <p>Discover various instruments, find your musical voice, and learn the fundamentals of rhythm and melody</p>
                        </motion.div>
                        <motion.div 
                            className="activity-card"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="activity-icon">🎨</div>
                            <h3>Art & Creativity</h3>
                            <p>Express yourself through painting, crafts, and creative projects that spark imagination</p>
                        </motion.div>
                        <motion.div 
                            className="activity-card"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="activity-icon">🧘</div>
                            <h3>Yoga & Mindfulness</h3>
                            <p>Build physical and mental wellness through age-appropriate yoga and mindfulness practices</p>
                        </motion.div>
                        <motion.div 
                            className="activity-card"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="activity-icon">🌟</div>
                            <h3>Confidence & Personality Development</h3>
                            <p>Develop self-esteem, communication skills, and leadership qualities through fun activities</p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Benefits Section */}
                <motion.section 
                    className="benefits-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2>Why Choose Blue Grass Summer Camp?</h2>
                    <div className="benefits-content">
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">✨</div>
                                <h3>Expert Instructors</h3>
                                <p>Professional educators with years of experience in child development and creative arts</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🏆</div>
                                <h3>Proven Results</h3>
                                <p>Watch your child grow in confidence, creativity, and social skills</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🛡️</div>
                                <h3>Safe Environment</h3>
                                <p>CCTV-equipped facilities ensuring safety and peace of mind for parents</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🎯</div>
                                <h3>Personalized Attention</h3>
                                <p>Small group sizes ensure every child gets the focus they deserve</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section 
                    className="cta-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="cta-content">
                        <h2>Give Your Child an Unforgettable Summer</h2>
                        <p>Join the Blue Grass Summer Camp experience and watch your child thrive in a creative, supportive environment.</p>
                        <div className="cta-buttons">
                            <motion.button 
                                className="btn btn-primary"
                                onClick={handleEnroll}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Register Now
                            </motion.button>
                            
                        </div>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default SummerCamp;
