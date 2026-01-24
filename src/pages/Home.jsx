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
                        className="philosophy-lines"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <p>Calm mornings with Yoga</p>
                        <p>Creative afternoons with Art Therapy</p>
                        <p>Confident evenings with Music</p>
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
