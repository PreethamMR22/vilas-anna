import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
const courseGuitar = '/images/course_guitar.png';
const philosophyImage = '/images/philosophy.png';
const yogaImage = '/images/yoga.png';
const spaceRentalsImage = '/images/space-rentals.jpg';
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
            title="Offline Music Classes"
            description="Instruments • Vocals • Theory"
            buttonText="Explore Music"
            onClick={() => handleCardClick('music')}
            delay={1}
          />
          <Card
            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop"
            title="After School Activities"
            description="Chess • Art • Yoga • Dance"
            buttonText="Explore Activities"
            onClick={() => handleCardClick('after-school-activities')}
            delay={2}
          />
          <Card
            image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
            title="Instrumental Sales & Services"
            description="Instrument Sales • Repairs • Rentals"
            buttonText="Explore Instruments"
            onClick={() => handleCardClick('instrumental-sales')}
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
    </div>
  );
};

export default Courses;
