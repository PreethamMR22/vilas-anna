import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Founder from '../components/Founder';
import CTASection from '../components/CTASection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Import Images
const philosophyImage = '/images/soulfull.png';
const courseGuitar = '/images/course_guitar.png';
const yogaImage = '/images/yoga.png';
const spaceRentalsImage = '/program-cards-images/space-rental.jpg';

// Program Cards Images
const offlineMusicImage = '/program-cards-images/offline-musicClass.jpeg';
const afterSchoolImage = '/program-cards-images/after-school.jpg';
const instrumentSalesImage = '/program-cards-images/instrument-sale.jpg';
const eventsImage = '/program-cards-images/events-entertainment.jpeg';
const onlineClassesImage = '/program-cards-images/online-class.jpg';
const summerCampImage = '/program-cards-images/summer-camp.jpg';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <Hero />

            {/* Programs Section */}
            <Section title="Our Programs" id="programs">
                <div className="courses-grid">
                    <Card
                        image={offlineMusicImage}
                        title="Music Classes"
                        description="Learn Guitar, Piano, Vocals & Classical Music from expert instructors"
                        buttonText="Explore Music"
                        onClick={() => navigate('/programs/music')}
                        delay={1}
                    />
                    <Card
                        image={afterSchoolImage}
                        title="Creative & Wellness Programs"
                        description="Chess, Art, Yoga & Dance for holistic child development"
                        buttonText="Explore Activities"
                        onClick={() => navigate('/programs/after-school-activities')}
                        delay={2}
                    />
                    <Card
                        image={instrumentSalesImage}
                        title="Instrument Store & Service"
                        description="Quality instruments, repairs & rentals with expert guidance"
                        buttonText="Explore Instruments"
                        onClick={() => navigate('/programs/instrumental-sales')}
                        delay={3}
                    />
                    <Card
                        image={eventsImage}
                        title="Events & Entertainment"
                        description="Cultural events, performances & community celebrations"
                        buttonText="Explore Events"
                        onClick={() => navigate('/events')}
                        delay={4}
                    />
                    <Card
                        image={spaceRentalsImage}
                        title="Studio & Space Rental"
                        description="Professional spaces for rehearsals, events & recordings"
                        buttonText="View Spaces"
                        onClick={() => navigate('/space-rentals')}
                        delay={5}
                    />
                    <Card
                        image={onlineClassesImage}
                        title="Online Classes"
                        description="Live interactive classes with flexible schedules"
                        buttonText="Explore Digital"
                        onClick={() => navigate('/digital-learning')}
                        delay={6}
                    />
                    <Card
                        image={summerCampImage}
                        title="Summer Camp"
                        description="Exciting summer activities with music, arts, and outdoor adventures"
                        buttonText="Join Summer Camp"
                        onClick={() => navigate('/summer-camp')}
                        delay={7}
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
                        Why Parents Trust
                        <br />
                        <span className="text-gold">Blue Grass Academy</span>
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
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                            </div>
                            <h3>Verified & Expert Teachers</h3>
                            <p>Professionally trained, verified educators following global teaching standards.</p>
                        </div>
                        <div className="trust-card">
                            <div className="trust-icon blue">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                    <polyline points="9 22 9 12 15 12 15 22"/>
                                </svg>
                            </div>
                            <h3>Secure Learning Environment</h3>
                            <p>CCTV-equipped classrooms ensuring safety, transparency, and peace of mind.</p>
                        </div>
                        <div className="trust-card">
                            <div className="trust-icon purple">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                                </svg>
                            </div>
                            <h3>Real Outcomes</h3>
                            <p>Measurable growth in technical skills, confidence, performance, and artistry.</p>
                        </div>
                        <div className="trust-card">
                            <div className="trust-icon orange">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <circle cx="12" cy="12" r="6"/>
                                    <circle cx="12" cy="12" r="2"/>
                                </svg>
                            </div>
                            <h3>Regular Assessments & Growth Tracking</h3>
                            <p>Growth sheets, skill benchmarks, progress reports, and personalized feedback.</p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <TestimonialCarousel />

            <Founder />

            <CTASection />

        </div>
    );
};

export default Home;
