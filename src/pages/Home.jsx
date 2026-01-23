import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Import Images
const philosophyImage = '/images/philosophy.png';
const courseGuitar = '/images/course_guitar.png';
const mentor1 = '/images/mentor_1.png';
const mentor2 = '/images/mentor_2.png';
const mentor3 = '/images/mentor_3.png';
const mentor4 = '/images/mentor_4.png';
const mentor5 = '/images/mentor_5.png';
const yogaImage = '/images/yoga.png';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <Hero />

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
                        every melody carries a <span className="text-gold text-dream">dream</span>
                    </motion.h2>
                    <motion.p
                        className="subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        In every classroom, every note, and every applause, <br /> we see futures being written.
                    </motion.p>
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

            {/* About Hint Section */}
            <Section className="about-hint-section text-center">
                <h2>Explore Our <span className="text-gold text-italic">World of Music</span></h2>
                <p className="subtitle">
                    Where the art of instruments and the soul of vocals come together to shape every musical journey.
                </p>
            </Section>

            {/* Courses Section */}
            <Section title="Our Courses" id="courses">
                <div className="courses-grid">
                    <Card
                        image={courseGuitar}
                        title="Guitar"
                        description="Learn guitar from the basics to advanced techniques in our performance-focused course."
                        badge="Popular"
                        delay={1}
                        onClick={() => navigate('/courses/guitar')}
                    />
                    <Card
                        image={mentor2}
                        title="Piano"
                        description="Master the keys with our comprehensive piano curriculum designed for all ages."
                        delay={2}
                        onClick={() => navigate('/courses/piano')}
                    />
                    <Card
                        image={mentor3}
                        title="Vocals"
                        description="Find your voice and refine your technique with professional vocal training."
                        delay={3}
                        onClick={() => navigate('/courses/vocals')}
                    />
                    <Card
                        image={philosophyImage}
                        title="Drums"
                        description="Find your rhythm and beat with our expert drum lessons."
                        delay={4}
                        onClick={() => navigate('/courses/drums')}
                    />
                    <Card
                        image={yogaImage}
                        title="Yoga Classes"
                        description="Balance your mind and body to enhance your musical journey."
                        badge="Coming Soon"
                        delay={5}
                    // No click for Coming Soon or maybe just scroll/alert
                    />
                </div>
            </Section>

            {/* Mentors Section */}
            <Section title="The Mentors Behind the Music" subtitle="Our accomplished faculty brings decades of experience, passion, and dedication to every lesson.">
                <div className="mentors-scroll-container">
                    <div className="mentors-track">
                        <div className="mentors-grid">
                            <Card
                                image={mentor1}
                                title="Arjun"
                                description="Drums & Percussion"
                                delay={1}
                            />
                            <Card
                                image={mentor2}
                                title="David"
                                description="Piano & Theory"
                                delay={2}
                            />
                            <Card
                                image={mentor3}
                                title="Priya"
                                description="Vocals & Performance"
                                delay={3}
                            />
                            <Card
                                image={mentor4}
                                title="Michael"
                                description="Guitar & Composition"
                                delay={4}
                            />
                            <Card
                                image={mentor5}
                                title="Sarah"
                                description="Violin & Orchestra"
                                delay={5}
                            />
                        </div>
                        {/* Duplicate cards for seamless infinite scroll */}
                        <div className="mentors-grid">
                            <Card
                                image={mentor1}
                                title="Arjun"
                                description="Drums & Percussion"
                                delay={1}
                            />
                            <Card
                                image={mentor2}
                                title="David"
                                description="Piano & Theory"
                                delay={2}
                            />
                            <Card
                                image={mentor3}
                                title="Priya"
                                description="Vocals & Performance"
                                delay={3}
                            />
                            <Card
                                image={mentor4}
                                title="Michael"
                                description="Guitar & Composition"
                                delay={4}
                            />
                            <Card
                                image={mentor5}
                                title="Sarah"
                                description="Violin & Orchestra"
                                delay={5}
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Home;
