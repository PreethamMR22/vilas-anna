import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProgramEnrollment } from '../contexts/ProgramEnrollmentContext';
import './InstrumentSales.css';

const heroImage = '/images/course_guitar.png';

const InstrumentSales = () => {
    const navigate = useNavigate();
    const { setProgramData } = useProgramEnrollment();
    return (
        <div className="page-instrument-sales">
            <div className="instrument-sales-hero" style={{
                background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(' + heroImage + ')'
            }}>
                <h1>INSTRUMENT SALES AT BLUE GRASS MUSIC ACADEMY</h1>
                <p>Play with Confidence. Perform with Excellence.</p>
            </div>

            <Section>
                <div className="container instrument-sales-content">
                    <motion.div 
                        className="intro-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p>
                            At Blue Grass Music Academy, we don't just teach music—we help you own the right instrument to
                            bring your sound to life. Our carefully curated collection of musical instruments is handpicked by
                            expert musicians and educators to ensure quality, comfort, and performance at every level.
                        </p>
                        <p>
                            Whether you're a beginner taking your first step or a performer refining your craft, we guide you to
                            the perfect instrument that matches your age, skill level, and musical goals.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="why-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="section-title">WHY BUY FROM BLUE GRASS MUSIC ACADEMY?</h2>
                        <div className="why-grid">
                            <div className="why-card bg-glass">
                                <div className="why-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <h3>Expert-Guided Selection</h3>
                                <p>Our verified and experienced teachers personally assist you in choosing the right instrument,
                                ensuring correct size, tone quality, and playability.</p>
                            </div>

                            <div className="why-card bg-glass">
                                <div className="why-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 11l3 3L22 4"/>
                                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                                    </svg>
                                </div>
                                <h3>Quality-Checked & Student-Friendly</h3>
                                <p>Every instrument is inspected for tuning stability, durability, and comfort—ideal for daily practice
                                and long-term growth.</p>
                            </div>

                            <div className="why-card bg-glass">
                                <div className="why-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="1" x2="12" y2="23"/>
                                        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                                    </svg>
                                </div>
                                <h3>Transparent & Fair Pricing</h3>
                                <p>We offer competitive pricing with honest recommendations—no unnecessary upgrades, only what
                                truly benefits your learning journey.</p>
                            </div>

                            <div className="why-card bg-glass">
                                <div className="why-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="23 4 23 10 17 10"/>
                                        <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
                                    </svg>
                                </div>
                                <h3>Upgrade & Exchange Support</h3>
                                <p>As your skills grow, we help you upgrade your instrument with flexible exchange options and
                                buy-back guidance.</p>
                            </div>

                            <div className="why-card bg-glass">
                                <div className="why-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 20V10"/>
                                        <path d="M18 20V4"/>
                                        <path d="M6 20v-4"/>
                                    </svg>
                                </div>
                                <h3>Academy-Tested Models</h3>
                                <p>All our instruments are classroom-approved and performance-ready, trusted by our students and
                                faculty alike.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="collection-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="section-title">OUR INSTRUMENT COLLECTION</h2>
                        <div className="collection-grid">
                            <div className="collection-item">
                                <h3>Violins</h3>
                                <p>Beginner to Advanced Models</p>
                                <button 
                                    className="enquire-button"
                                    onClick={() => {
                                        setProgramData({
                                            category: 'instrumental-sales',
                                            programName: 'Violin'
                                        });
                                        navigate('/contact');
                                    }}
                                >
                                    Enquire
                                </button>
                            </div>
                            <div className="collection-item">
                                <h3>Guitars</h3>
                                <p>Acoustic, Classical & Electric</p>
                                <button 
                                    className="enquire-button"
                                    onClick={() => {
                                        setProgramData({
                                            category: 'instrumental-sales',
                                            programName: 'Guitar'
                                        });
                                        navigate('/contact');
                                    }}
                                >
                                    Enquire
                                </button>
                            </div>
                            <div className="collection-item">
                                <h3>Keyboards & Digital Pianos</h3>
                                <p>All skill levels</p>
                                <button 
                                    className="enquire-button"
                                    onClick={() => {
                                        setProgramData({
                                            category: 'instrumental-sales',
                                            programName: 'Piano'
                                        });
                                        navigate('/contact');
                                    }}
                                >
                                    Enquire
                                </button>
                            </div>
                            <div className="collection-item">
                                <h3>Ukuleles & Fretted Instruments</h3>
                                <p>Perfect for beginners</p>
                                <button 
                                    className="enquire-button"
                                    onClick={() => {
                                        setProgramData({
                                            category: 'instrumental-sales',
                                            programName: 'Ukulele'
                                        });
                                        navigate('/contact');
                                    }}
                                >
                                    Enquire
                                </button>
                            </div>
                            <div className="collection-item">
                                <h3>Percussion & Rhythm Instruments</h3>
                                <p>Drums, hand percussion & more</p>
                                <button 
                                    className="enquire-button"
                                    onClick={() => {
                                        setProgramData({
                                            category: 'instrumental-sales',
                                            programName: 'Drums'
                                        });
                                        navigate('/contact');
                                    }}
                                >
                                    Enquire
                                </button>
                            </div>
                            <div className="collection-item">
                                <h3>Essential Accessories</h3>
                                <p>Bows, Stands, Tuners, Cases, Strings & More</p>
                                <button 
                                    className="enquire-button"
                                    onClick={() => {
                                        setProgramData({
                                            category: 'instrumental-sales',
                                            programName: 'Instrument Sales'
                                        });
                                        navigate('/contact');
                                    }}
                                >
                                    Enquire
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="demo-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="demo-card bg-glass">
                            <h2>TRY BEFORE YOU BUY</h2>
                            <p>
                                Experience the feel, sound, and comfort of your instrument before making a decision. Book a free
                                in-academy demo session and let our experts guide you hands-on.
                            </p>
                            <button 
                                className="cta-button"
                                onClick={() => {
                                    setProgramData({
                                        category: 'instrumental-sales',
                                        programName: 'Instrument Sales'
                                    });
                                    navigate('/contact');
                                }}
                            >
                                Book Your Free Demo
                            </button>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="partnership-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="partnership-card bg-glass">
                            <h2>MORE THAN A PURCHASE — A MUSICAL PARTNERSHIP</h2>
                            <p>
                                When you buy from Blue Grass Music Academy, you gain ongoing support, maintenance
                                services, and access to our community of musicians. We're not just selling instruments;
                                we're building lifelong musical relationships.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default InstrumentSales;
