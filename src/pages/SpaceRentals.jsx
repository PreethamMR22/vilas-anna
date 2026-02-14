import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import { useProgramEnrollment } from '../contexts/ProgramEnrollmentContext';
import './SpaceRentals.css';

const SpaceRentals = () => {
  const navigate = useNavigate();
  const { setProgramData } = useProgramEnrollment();

  const handleBookNow = (spaceType) => {
    setProgramData({
      programName: spaceType.name,
      category: spaceType.id,
      type: 'space-rental'
    });
    navigate('/contact');
  };
  const spaceTypes = [
    {
      id: 'standard',
      name: 'Standard',
      image: '/Space-rentals-images/standard-room.jpg',
      badge: 'Budget Friendly',
      features: [
        'No AC',
        'Max 10 occupants',
        '5 minutes buffer time',
        'Working hours on weekdays',
        '₹1200 per hour'
      ],
      description: 'Perfect for small gatherings and practice sessions',
      price: '1200'
    },
    {
      id: 'premium',
      name: 'Premium',
      image: '/Space-rentals-images/premium.jpg',
      badge: 'Most Popular',
      features: [
        'With AC',
        'Max 15 occupants',
        '15 minutes buffer time',
        'Weekdays and weekends',
        '₹1899 per hour'
      ],
      description: 'Ideal for workshops and medium-sized events',
      price: '1899'
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      image: '/Space-rentals-images/ultimate.jpg',
      badge: 'Premium Choice',
      features: [
        'With AC',
        'Max 60 occupants',
        '30 minutes buffer time',
        'Weekdays and weekends',
        '₹2599 per hour'
      ],
      description: 'Perfect for large events and corporate functions',
      price: '2599'
    }
  ];

  return (
    <div className="space-rentals-page">
      {/* Hero Section */}
      <motion.div 
        className="space-rentals-hero"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Studio & Space Rental</h1>
        <p>Premium facilities for your creative events and corporate functions</p>
      </motion.div>

      {/* Creative Spaces Info Section */}
      <Section className="creative-spaces-info">
        <motion.div
          className="creative-spaces-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Creative Spaces Available for Rent</h2>
          <p className="creative-spaces-description">
            Blue Grass Academy offers beautifully designed spaces for creators, educators and performers.
          </p>
          
          <div className="creative-spaces-grid">
            <div className="creative-spaces-column">
              <h3>Ideal For</h3>
              <ul className="creative-spaces-list">
                <li>Music & Dance Workshops</li>
                <li>Rehearsals & Band Practice</li>
                <li>Photoshoots & Video Shoots</li>
                <li>Small Events & Meetups</li>
                <li>Therapy & Wellness Sessions</li>
                <li>Birthday & Creative Parties</li>
              </ul>
            </div>
            
            <div className="creative-spaces-column">
              <h3>Facilities</h3>
              <ul className="facilities-list">
                <li>Sound-treated music rooms</li>
                <li>Instruments available on request</li>
                <li>Seating & open studio space</li>
                <li>Safe and premium ambience</li>
                <li>Hourly / Half-day / Full-day rental</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Space Types Section */}
      <Section title="Choose Your Space" className="space-types-section">
        <div className="space-grid">
          {spaceTypes.map((space, index) => (
            <motion.div
              key={space.id}
              className="space-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="space-image-wrapper">
                <img src={space.image} alt={space.name} className="space-image" />
                {space.badge && (
                  <span className="space-badge">{space.badge}</span>
                )}
              </div>
              <div className="space-content">
                <h3>{space.name}</h3>
                <p className="space-description">{space.description}</p>
                <div className="space-features">
                  {space.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-icon">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-price">
                  <span className="price-amount">₹{space.price}</span>
                  <span className="price-unit">per hour</span>
                </div>
                <motion.button 
                  className="space-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleBookNow(space)}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section title="Why Choose Our Spaces?" className="features-section">
        <div className="features-grid">
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="feature-icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <h4>Premium Facilities</h4>
            <p>State-of-the-art equipment and modern amenities</p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="feature-icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h4>Flexible Timing</h4>
            <p>Available on weekdays and weekends with buffer time</p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="feature-icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
            </div>
            <h4>Full Support</h4>
            <p>24/7 assistance and event coordination services</p>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Book Your Space?</h2>
          <p>Contact us today to discuss your requirements and check availability</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">
              Get in Touch
            </Link>
            <a href="tel:+918792175588" className="cta-button secondary">
              Call Now
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default SpaceRentals;
