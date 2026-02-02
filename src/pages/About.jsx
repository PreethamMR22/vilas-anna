import React from 'react';
import Section from '../components/Section';
import Certification from '../components/Certification';
const heroImage = '/images/hero.png';
import './About.css';

const About = () => {
    return (
        <div className="page-about">
            <div className="about-hero" style={{
                background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(' + heroImage + ')'
            }}>
                <h1>About Us</h1>
                <p>Blue Grass Music Academy - Where Musical Excellence Meets Creative Expression</p>
            </div>

            <Section>
                <div className="container about-content" style={{ maxWidth: '800px' }}>
                    <div className="about-section">
                        <h2>ABOUT US</h2>
                        <p>
                            Blue Grass Music Academy is a premier destination for musical excellence, creative expression,
                            and performance-driven learning. Founded with a vision to nurture talent from the roots up, we
                            provide structured, professional, and personalized music education for students of all ages.
                        </p>
                        <p>
                            At Blue Grass Academy, we believe music is not just a skill — it is a lifelong companion. Our
                            teaching philosophy blends technical mastery, emotional connection, and stage confidence,
                            ensuring every student grows not only as a musician but as a performer.
                        </p>
                        <p>
                            From beginners discovering their first note to advanced learners refining their artistry, our academy
                            offers a warm, disciplined, and inspiring environment guided by experienced mentors and
                            real-world performance exposure.
                        </p>
                        <p>
                            We specialize in instrumental training, vocal development, live jamming sessions, and
                            performance-based learning, creating musicians who are confident, expressive, and industry-ready.
                        </p>
                    </div>

                    <div className="vision-section">
                        <h2 className="section-title">VISION</h2>
                        <div className="vision-card bg-glass">
                            <p>
                                To become a leading music institution that empowers students to discover their musical identity and
                                perform with confidence, creativity, and excellence on any stage.
                            </p>
                        </div>
                    </div>

                    <div className="mission-section">
                        <h2 className="section-title">MISSION</h2>
                        <div className="mission-grid">
                            <div className="mission-item bg-glass">
                                <div className="mission-marker"></div>
                                <p>Provide high-quality, structured, and personalized music education</p>
                            </div>
                            <div className="mission-item bg-glass">
                                <div className="mission-marker"></div>
                                <p>Nurture discipline, creativity, and confidence through performance-based training</p>
                            </div>
                            <div className="mission-item bg-glass">
                                <div className="mission-marker"></div>
                                <p>Create opportunities for live exposure, collaboration, and certification</p>
                            </div>
                            <div className="mission-item bg-glass">
                                <div className="mission-marker"></div>
                                <p>Build strong musical foundations for hobbyists and professionals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Certification />
        </div>
    );
};

export default About;
