import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
const courseGuitar = '/images/course_guitar.png';
const mentor2 = '/images/mentor_2.png';
const mentor3 = '/images/mentor_3.png';
const philosophyImage = '/images/philosophy.png';
const yogaImage = '/images/yoga.png';
import './Courses.css';

const Courses = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="page-courses">
      <div className="courses-hero" style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(' + philosophyImage + ')'
      }}>
        <h1>Our Courses</h1>
        <p>Discover your musical potential</p>
      </div>

      <Section>
        <div className="courses-grid">
          <Card
            image={courseGuitar}
            title="Guitar"
            description="From acoustic strumming to electric shredding, learn guitar from the basics to advanced techniques."
            badge="Popular"
            onClick={() => handleCardClick('guitar')}
            delay={1}
          />
          <Card
            image={mentor2}
            title="Piano"
            description="Master the keys with our comprehensive piano curriculum designed for all ages and skill levels."
            onClick={() => handleCardClick('piano')}
            delay={2}
          />
          <Card
            image={mentor3}
            title="Vocals"
            description="Find your voice and refine your technique with professional vocal training in various genres."
            onClick={() => handleCardClick('vocals')}
            delay={3}
          />
          <Card
            image={philosophyImage}
            title="Drums"
            description="Find your rhythm and beat with our expert drum lessons."
            onClick={() => handleCardClick('drums')}
            delay={4}
          />
          <Card
            image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop"
            title="Theory & Composition"
            description="Understand the language of music and learn to write your own songs."
            onClick={() => handleCardClick('theory')}
            delay={5}
          />
          <Card
            image={yogaImage}
            title="Yoga For Musicians"
            description="A special program designed to help musicians with posture, breathing, and mental focus."
            badge="Coming Soon"
            delay={6}
          />
        </div>
      </Section>
    </div>
  );
};

export default Courses;
