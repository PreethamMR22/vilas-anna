import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Founder from '../components/Founder';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Import Images
const philosophyImage = '/images/soulfull.png';
const courseGuitar = '/images/course_guitar.png';
const yogaImage = '/images/yoga.png';
const spaceRentalsImage = '/images/space-rentals.jpg';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <Hero />

            {/* Programs Section */}
            <Section title="Our Programs" id="programs">
                <div className="courses-grid">
                    <Card
                        image="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop"
                        title="Music Classes"
                        timing="4:00 PM – 8:00 PM"
                        description="Instruments • Vocals • Theory"
                        buttonText="Explore Music"
                        onClick={() => navigate('/programs/music')}
                        delay={1}
                    />
                    <Card
                        image="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
                        title="Yoga Classes"
                        timing="6:00 AM – 10:30 AM"
                        description="Beginner-friendly • Wellness focused"
                        buttonText="Explore Yoga"
                        onClick={() => navigate('/programs/yoga')}
                        delay={2}
                    />
                    <Card
                        image="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop"
                        title="Art Therapy / Art Workshops"
                        timing="10:30 AM – 3:30 PM"
                        description="Guided sessions • Creative healing"
                        buttonText="Explore Art Therapy"
                        onClick={() => navigate('/programs/art-therapy')}
                        delay={3}
                    />
                    <Card
                        image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
                        title="Events & Entertainment"
                        timing="Evenings & Weekends"
                        description="Weekly Jamming • Karaoke Nights • Signature Events"
                        buttonText="Explore Events"
                        onClick={() => navigate('/events')}
                        delay={4}
                    />
                    <Card
                        image={spaceRentalsImage}
                        title="Space Rentals"
                        timing="Available Daily"
                        description="Premium Facilities • Creative Events • Corporate Functions"
                        buttonText="View Spaces"
                        onClick={() => navigate('/gallery')}
                        delay={5}
                    />
                    <Card
                        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                        title="Digital Learning"
                        timing="24/7 Access"
                        description="Online Classes • Hybrid Learning • Global Access"
                        buttonText="Explore Digital"
                        onClick={() => navigate('/digital-learning')}
                        delay={6}
                    />
                </div>
            </Section>

            {/* Philosophy Section */}
            <Section className="philosophy-section">
                <div className="philosophy-content text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        At Blue Grass Academy, <br />
                        every day builds a <span className="text-gold text-dream">better you</span>
                    </motion.h2>
                    <motion.div
                        className="philosophy-timeline"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="timeline-item">
                            <div className="timeline-icon morning">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="5"/>
                                    <line x1="12" y1="1" x2="12" y2="3"/>
                                    <line x1="12" y1="21" x2="12" y2="23"/>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                    <line x1="1" y1="12" x2="3" y2="12"/>
                                    <line x1="21" y1="12" x2="23" y2="12"/>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                                </svg>
                            </div>
                            <div className="timeline-content">
                                <h3>Calm Mornings</h3>
                                <p>with Yoga</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon afternoon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="timeline-content">
                                <h3>Creative Afternoons</h3>
                                <p>with Art Therapy</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon evening">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 18V5l12-2v13"/>
                                    <circle cx="6" cy="18" r="3"/>
                                    <circle cx="18" cy="16" r="3"/>
                                </svg>
                            </div>
                            <div className="timeline-content">
                                <h3>Confident Evenings</h3>
                                <p>with Music</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="philosophy-image-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img src={philosophyImage} alt="Musician playing drums" />
                    </motion.div>
                </div>
            </Section>

            <Founder />

        </div>
    );
};

export default Home;
