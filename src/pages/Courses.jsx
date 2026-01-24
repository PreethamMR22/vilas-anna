import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
const courseGuitar = '/images/course_guitar.png';
const philosophyImage = '/images/philosophy.png';
const yogaImage = '/images/yoga.png';
import './Courses.css';

const Courses = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/programs/${id}`);
  };

  return (
    <div className="page-courses">
      <div className="courses-hero" style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(' + philosophyImage + ')'
      }}>
        <h1>Our Programs</h1>
        <p>Discover your creative potential</p>
      </div>

      <Section>
        <div className="courses-grid">
          <Card
            image="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop"
            title="Music Classes"
            timing="4:00 PM – 8:00 PM"
            description="Instruments • Vocals • Theory"
            buttonText="Explore Music"
            onClick={() => handleCardClick('music')}
            delay={1}
          />
          <Card
            image="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
            title="Yoga Classes"
            timing="6:00 AM – 10:30 AM"
            description="Beginner-friendly • Wellness focused"
            buttonText="Explore Yoga"
            onClick={() => handleCardClick('yoga')}
            delay={2}
          />
          <Card
            image="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop"
            title="Art Therapy / Art Workshops"
            timing="10:30 AM – 3:30 PM"
            description="Guided sessions • Creative healing"
            buttonText="Explore Art Therapy"
            onClick={() => handleCardClick('art-therapy')}
            delay={3}
          />
        </div>
      </Section>
    </div>
  );
};

export default Courses;
