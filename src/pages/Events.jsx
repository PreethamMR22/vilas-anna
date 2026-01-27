import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProgramEnrollment } from '../contexts/ProgramEnrollmentContext';
import './Events.css';

const Events = () => {
    const navigate = useNavigate();
    const { setProgramData } = useProgramEnrollment();

    return (
        <motion.div 
            className="events-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section */}
            <motion.div 
                className="events-hero"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="hero-content">
                    <h1>Events & Entertainment</h1>
                    <p>Where music comes alive through collaboration and celebration</p>
                </div>
            </motion.div>

            <div className="container">
                {/* Weekly Jamming Sessions */}
                <motion.section 
                    className="event-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="event-content">
                        <div className="event-text">
                            <h2>Weekly Jamming Sessions</h2>
                            <h3>Fostering Collaboration and Joy</h3>
                            <p>
                                Join our vibrant weekly jamming sessions where musicians of all levels come together to create magic. 
                                These informal gatherings are perfect for experimenting with new styles, meeting fellow musicians, 
                                and experiencing the pure joy of spontaneous music creation.
                            </p>
                            <div className="event-details">
                                <div className="detail-item">
                                    <span>Every Friday: 6:00 PM - 9:00 PM</span>
                                </div>
                                <div className="detail-item">
                                    <span>Open to all instruments and skill levels</span>
                                </div>
                                <div className="detail-item">
                                    <span>Collaborative learning environment</span>
                                </div>
                            </div>
                        </div>
                        <div className="event-image">
                            <img 
                                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop"
                                alt="Musicians jamming together"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Karaoke Nights */}
                <motion.section 
                    className="event-section reverse"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="event-content">
                        <div className="event-text">
                            <h2>Karaoke Nights & Blue Grass Signature Events</h2>
                            <h3>Celebrating Music, Culture, and Connection</h3>
                            <p>
                                Experience the thrill of performance at our karaoke nights and signature Blue Grass events. 
                                These celebrations showcase the incredible talent within our community while creating unforgettable 
                                memories. From themed karaoke nights to cultural festivals, there's always something exciting happening.
                            </p>
                            <div className="event-details">
                                <div className="detail-item">
                                    <span>Karaoke Nights: Every Saturday 7:00 PM - 11:00 PM</span>
                                </div>
                                <div className="detail-item">
                                    <span>Monthly Signature Events & Cultural Celebrations</span>
                                </div>
                                <div className="detail-item">
                                    <span>Professional sound system and stage setup</span>
                                </div>
                            </div>
                        </div>
                        <div className="event-image">
                            <img 
                                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop"
                                alt="Karaoke night performance"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Benefits Section */}
                <motion.section 
                    className="benefits-section"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2>Why Join Our Events?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">🎼</div>
                            <h3>Skill Development</h3>
                            <p>Practice and improve your musical abilities in a supportive environment</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">👥</div>
                            <h3>Community Building</h3>
                            <p>Connect with like-minded musicians and build lasting friendships</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🎭</div>
                            <h3>Performance Experience</h3>
                            <p>Gain confidence and stage experience in a friendly setting</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🌈</div>
                            <h3>Cultural Exchange</h3>
                            <p>Experience diverse musical traditions and cultural expressions</p>
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
                        <h2>Ready to Join the Fun?</h2>
                        <p>Be part of our vibrant musical community and experience the joy of live music</p>
                        <div className="cta-buttons">
                            <motion.button 
                                className="cta-button primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setProgramData({
                                        category: 'jamming',
                                        programName: 'Weekly Jamming Sessions',
                                        timing: 'Friday 6:00 PM - 9:00 PM'
                                    });
                                    navigate('/contact');
                                }}
                            >
                                Get Event Schedule
                            </motion.button>
                            <motion.button 
                                className="cta-button secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/gallery')}
                            >
                                View Event Gallery
                            </motion.button>
                        </div>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default Events;
