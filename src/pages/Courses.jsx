import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
const courseGuitar = '/images/course_guitar.png';
const philosophyImage = '/images/philosophy.png';
const yogaImage = '/images/yoga.png';
const spaceRentalsImage = '/program-cards-images/space-rental.jpg';

// Program Cards Images
const offlineMusicImage = '/program-cards-images/offline-musicClass.jpeg';
const afterSchoolImage = '/program-cards-images/after-school.jpg';
const instrumentSalesImage = '/program-cards-images/instrument-sale.jpg';
const eventsImage = '/program-cards-images/events-entertainment.jpeg';
const onlineClassesImage = '/program-cards-images/online-class.jpg';
const summerCampImage = '/program-cards-images/summer-camp.jpg';
import './Courses.css';

const Courses = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/programs/${id}`);
  };

  return (
    <div className="page-courses">
      <div className="courses-hero" style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(' + instrumentSalesImage + ')'
      }}>
        <h1>Our Programs</h1>
        <p>Discover your creative potential</p>
      </div>

      <Section>
        <div className="courses-grid">
          <Card
            image={offlineMusicImage}
            title="Music Classes"
            description="Instruments • Vocals • Theory"
            buttonText="Explore Music"
            onClick={() => handleCardClick('music')}
            delay={1}
          />
          <Card
            image={afterSchoolImage}
            title="Creative & Wellness Programs"
            description="Chess • Art • Yoga • Dance"
            buttonText="Explore Activities"
            onClick={() => handleCardClick('after-school-activities')}
            delay={2}
          />
          <Card
            image={instrumentSalesImage}
            title="Instrument Store & Service"
            description="Instrument Sales • Repairs • Rentals"
            buttonText="Explore Instruments"
            onClick={() => handleCardClick('instrumental-sales')}
            delay={3}
          />
          <Card
            image={eventsImage}
            title="Events & Entertainment"
            description="Weekly Jamming • Karaoke Nights • Signature Events"
            buttonText="Explore Events"
            onClick={() => navigate('/events')}
            delay={4}
          />
          <Card
            image={spaceRentalsImage}
            title="Studio & Space Rental"
            description="Premium Facilities • Creative Events • Corporate Functions"
            buttonText="View Spaces"
            onClick={() => navigate('/space-rentals')}
            delay={5}
          />
          <Card
            image={onlineClassesImage}
            title="Online Classes"
            description="Online Classes • Hybrid Learning • Global Access"
            buttonText="Explore Digital"
            onClick={() => navigate('/digital-learning')}
            delay={6}
          />
          <Card
            image={summerCampImage}
            title="Summer Camp"
            description="Music • Art • Yoga • Performance"
            buttonText="Join Camp"
            onClick={() => navigate('/summer-camp')}
            delay={7}
          />
        </div>
      </Section>
    </div>
  );
};

export default Courses;
