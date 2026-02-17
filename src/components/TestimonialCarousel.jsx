import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TestimonialCarousel.css';

const TestimonialCarousel = () => {
    const [testimonials] = useState([
        {
            id: 1,
            name: "Priya Sharma",
            initial: "PS",
            activity: "Music",
            review: "Blue Grass Academy has transformed my daughter's musical journey. The instructors are exceptional and truly care about each student's progress. She's become more confident and passionate about music!",
            borderColor: "#9333ea"
        },
        {
            id: 2,
            name: "Rahul Verma",
            initial: "RV",
            activity: "Swimming",
            review: "The swimming program is outstanding! My son went from being afraid of water to swimming laps in just a few months. The coaches are patient and professional.",
            borderColor: "#3b82f6"
        },
        {
            id: 3,
            name: "Anjali Patel",
            initial: "AP",
            activity: "Art",
            review: "My daughter's creativity has flourished here. The art teachers nurture individual expression while teaching fundamental techniques. We couldn't be happier!",
            borderColor: "#ec4899"
        },
        {
            id: 4,
            name: "Vikram Reddy",
            initial: "VR",
            activity: "Chess",
            review: "The chess program has improved my son's critical thinking and concentration skills. The tournaments and competitions are well-organized and motivating.",
            borderColor: "#9333ea"
        },
        {
            id: 5,
            name: "Kavita Nair",
            initial: "KN",
            activity: "Dance",
            review: "My daughter loves every dance class! The instructors are amazing at bringing out the best in each child while making learning fun and engaging.",
            borderColor: "#3b82f6"
        },
        {
            id: 6,
            name: "Amit Kumar",
            initial: "AK",
            activity: "Music",
            review: "The music education here is top-notch. My child's piano skills have improved dramatically, and more importantly, she's developed a lifelong love for music.",
            borderColor: "#ec4899"
        },
        {
            id: 7,
            name: "Sneha Iyer",
            initial: "SI",
            activity: "Yoga",
            review: "The yoga classes have helped my daughter with focus and flexibility. The instructors create a calm, supportive environment that's perfect for children.",
            borderColor: "#9333ea"
        },
        {
            id: 8,
            name: "Rajesh Gupta",
            initial: "RG",
            activity: "Swimming",
            review: "Excellent swimming program! The instructors are certified and very safety-conscious. My kids have become confident swimmers while having fun.",
            borderColor: "#3b82f6"
        },
        {
            id: 9,
            name: "Meera Joshi",
            initial: "MJ",
            activity: "Art",
            review: "The art program is fantastic! My child has explored different mediums and techniques. The annual art showcase is always a highlight of our year.",
            borderColor: "#ec4899"
        },
        {
            id: 10,
            name: "Arjun Singh",
            initial: "AS",
            activity: "Music",
            review: "From beginner to performer in just one year! The music program's comprehensive approach and supportive environment have exceeded all our expectations.",
            borderColor: "#9333ea"
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Duplicate testimonials for infinite scroll effect
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex >= testimonials.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            });
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    // Handle manual navigation
    const handlePrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => {
            if (prevIndex <= 0) {
                return testimonials.length - 1;
            }
            return prevIndex - 1;
        });
        
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => {
            if (prevIndex >= testimonials.length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
        
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Calculate transform for carousel
    const getTransform = () => {
        const cardWidth = 380; // Width of each card
        const gap = 30; // Gap between cards
        const offset = currentIndex * (cardWidth + gap);
        return `translateX(-${offset}px)`;
    };

    return (
        <section className="testimonial-section">
            <div className="testimonial-content">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="testimonial-title"
                >
                    Loved by Families
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="testimonial-subtitle"
                >
                    Real stories from our community
                </motion.p>

                <div className="carousel-container">
                    <div 
                        className="carousel-track" 
                        style={{ 
                            transform: getTransform(),
                            transition: isAutoPlaying ? 'none' : 'transform 0.5s ease-in-out'
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="testimonial-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{ borderColor: testimonial.borderColor }}
                            >
                                <div className="quote-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                    </svg>
                                </div>
                                <p className="testimonial-text">{testimonial.review}</p>
                                <a href="#" className="more-link">more</a>
                                <div className="testimonial-footer">
                                    <div className="avatar" style={{ borderColor: testimonial.borderColor }}>
                                        {testimonial.initial}
                                    </div>
                                    <div className="testimonial-info">
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.activity}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="carousel-controls">
                    <button className="carousel-arrow prev" onClick={handlePrev}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button className="carousel-arrow next" onClick={handleNext}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
