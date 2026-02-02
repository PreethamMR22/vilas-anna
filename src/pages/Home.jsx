import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Founder from '../components/Founder';
import CTASection from '../components/CTASection';
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
                        title="Offline Music Classes"
                        description="Instruments • Vocals • Theory"
                        buttonText="Explore Music"
                        onClick={() => navigate('/programs/music')}
                        delay={1}
                    />
                    <Card
                        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop"
                        title="After School Activities"
                        description="Chess • Art • Yoga • Dance"
                        buttonText="Explore Activities"
                        onClick={() => navigate('/programs/after-school-activities')}
                        delay={2}
                    />
                    <Card
                        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
                        title="Instrumental Sales & Services"
                        description="Instrument Sales • Repairs • Rentals"
                        buttonText="Explore Instruments"
                        onClick={() => navigate('/programs/instrumental-sales')}
                        delay={3}
                    />
                    <Card
                        image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
                        title="Events & Entertainment"
                        description="Weekly Jamming • Karaoke Nights • Signature Events"
                        buttonText="Explore Events"
                        onClick={() => navigate('/events')}
                        delay={4}
                    />
                    <Card
                        image={spaceRentalsImage}
                        title="Space Rentals"
                        description="Premium Facilities • Creative Events • Corporate Functions"
                        buttonText="View Spaces"
                        onClick={() => navigate('/space-rentals')}
                        delay={5}
                    />
                    <Card
                        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                        title="Online Classes"
                        description="Online Classes • Hybrid Learning • Global Access"
                        buttonText="Explore Digital"
                        onClick={() => navigate('/digital-learning')}
                        delay={6}
                    />
                </div>
            </Section>

            {/* Why Parents Trust Blue Grass Academy Section */}
            <Section className="trust-section">
                <div className="trust-content text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        WHY PARENTS TRUST <span className="text-gold">BLUE GRASS MUSIC</span>
                        <br />
                        ACADEMY
                    </motion.h2>
                    <motion.p
                        className="trust-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We don't just aggregate teachers. We build careers and shape futures.
                    </motion.p>
                    <motion.div
                        className="trust-cards"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="trust-card">
                            <div className="trust-icon green">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                            </div>
                            <h3>VERIFIED & EXPERT TEACHERS</h3>
                            <p>Professionally trained, verified educators following global teaching standards.</p>
                        </div>
                        <div className="trust-card">
                            <div className="trust-icon blue">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                    <polyline points="9 22 9 12 15 12 15 22"/>
                                </svg>
                            </div>
                            <h3>SECURE LEARNING ENVIRONMENT</h3>
                            <p>CCTV-equipped classrooms ensuring safety, transparency, and peace of mind.</p>
                        </div>
                        <div className="trust-card">
                            <div className="trust-icon purple">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                                </svg>
                            </div>
                            <h3>REAL OUTCOMES</h3>
                            <p>Measurable growth in technical skills, confidence, performance, and artistry.</p>
                        </div>
                        <div className="trust-card">
                            <div className="trust-icon orange">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <circle cx="12" cy="12" r="6"/>
                                    <circle cx="12" cy="12" r="2"/>
                                </svg>
                            </div>
                            <h3>REGULAR ASSESSMENTS & GROWTH TRACKING</h3>
                            <p>Growth sheets, skill benchmarks, progress reports, and personalized feedback.</p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <Founder />

            <CTASection />

        </div>
    );
};

export default Home;
