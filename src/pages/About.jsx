import React from 'react';
import Section from '../components/Section';
const heroImage = '/images/hero.png';
import './About.css';

const About = () => {
    return (
        <div className="page-about">
            <div className="about-hero" style={{
                background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(' + heroImage + ')'
            }}>
                <h1>Our Journey</h1>
                <p>The story behind Blue Grass Academy</p>
            </div>

            <Section>
                <div className="container about-vision" style={{ maxWidth: '800px' }}>
                    <h2>A Vision for Musical Excellence</h2>
                    <p>
                        Blue Grass Academy was founded with a simple yet powerful belief: that music is not just a skill, but a way of life.
                        What started as a small jam room has grown into a premier institution dedicated to nurturing the next generation of musicians.
                    </p>
                    <p>
                        Our philosophy places the learner at the center. We believe that everyone has a "musical superhero" waiting to be discovered.
                        Whether you are picking up an instrument for the first time or looking to refine your professional skills, our
                        world-class faculty is here to guide you every step of the way.
                    </p>
                    <p>
                        With state-of-the-art facilities, a diverse curriculum, and a community of passionate artists,
                        Blue Grass Academy is more than a music school - it's a family.
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default About;
