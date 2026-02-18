import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TestimonialCarousel.css';

const TestimonialCarousel = () => {
    const [testimonials] = useState([
        {
            id: 1,
            name: "Priya Sharma",
            initial: "PS",
            activity: "Guitar",
            review: "The guitar program at Blue Grass Academy is <span style='color: #22c55e; font-weight: 600;'>exceptional</span>! My daughter has learned proper technique and music theory. She's now <span style='color: #22c55e; font-weight: 600;'>confidently performing</span> in school concerts.",
            borderColor: "#9333ea"
        },
        {
            id: 2,
            name: "Rahul Verma",
            initial: "RV",
            activity: "Violin",
            review: "My son's violin skills have <span style='color: #22c55e; font-weight: 600;'>blossomed</span> under the expert guidance. The classical training is thorough and the instructors are <span style='color: #22c55e; font-weight: 600;'>incredibly patient</span> with beginners.",
            borderColor: "#3b82f6"
        },
        {
            id: 3,
            name: "Anjali Patel",
            initial: "AP",
            activity: "Piano",
            review: "The piano curriculum is <span style='color: #22c55e; font-weight: 600;'>outstanding</span>! My daughter progressed from basic scales to playing complex pieces. The foundation she's building is <span style='color: #22c55e; font-weight: 600;'>truly remarkable</span>.",
            borderColor: "#ec4899"
        },
        {
            id: 4,
            name: "Vikram Reddy",
            initial: "VR",
            activity: "Drums",
            review: "The drum program has <span style='color: #22c55e; font-weight: 600;'>transformed</span> my son's rhythm and coordination. The instructors teach various styles and make learning <span style='color: #22c55e; font-weight: 600;'>so much fun</span>!",
            borderColor: "#9333ea"
        },
        {
            id: 5,
            name: "Kavita Nair",
            initial: "KN",
            activity: "Ukulele",
            review: "My daughter <span style='color: #22c55e; font-weight: 600;'>absolutely loves</span> her ukulele classes! The instrument is perfect for her age, and the teachers make every lesson <span style='color: #22c55e; font-weight: 600;'>engaging and joyful</span>.",
            borderColor: "#3b82f6"
        },
        {
            id: 6,
            name: "Amit Kumar",
            initial: "AK",
            activity: "Flute",
            review: "The flute instruction is <span style='color: #22c55e; font-weight: 600;'>top-notch</span>. My child's breath control and tone have improved dramatically. She's developed a <span style='color: #22c55e; font-weight: 600;'>beautiful sound</span> and love for classical music.",
            borderColor: "#ec4899"
        },
        {
            id: 7,
            name: "Sneha Iyer",
            initial: "SI",
            activity: "Western Vocals",
            review: "The western vocal training has helped my daughter with <span style='color: #22c55e; font-weight: 600;'>pitch control</span> and stage presence. The instructors create a <span style='color: #22c55e; font-weight: 600;'>supportive environment</span> for vocal development.",
            borderColor: "#9333ea"
        },
        {
            id: 8,
            name: "Rajesh Gupta",
            initial: "RG",
            activity: "Classical Vocals",
            review: "<span style='color: #22c55e; font-weight: 600;'>Exceptional</span> classical vocal training! The emphasis on traditional techniques and ragas is authentic. My child's understanding of <span style='color: #22c55e; font-weight: 600;'>classical music</span> has grown immensely.",
            borderColor: "#3b82f6"
        },
        {
            id: 9,
            name: "Meera Joshi",
            initial: "MJ",
            activity: "Piano",
            review: "The piano program is <span style='color: #22c55e; font-weight: 600;'>fantastic</span>! My child has learned both theory and practical skills. The recitals and performances are always a <span style='color: #22c55e; font-weight: 600;'>highlight</span> of our year.",
            borderColor: "#ec4899"
        },
        {
            id: 10,
            name: "Arjun Singh",
            initial: "AS",
            activity: "Guitar",
            review: "From complete beginner to <span style='color: #22c55e; font-weight: 600;'>confident performer</span> in just months! The guitar program's comprehensive approach and expert instructors have <span style='color: #22c55e; font-weight: 600;'>exceeded all expectations</span>.",
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
                                <p className="testimonial-text" dangerouslySetInnerHTML={{ __html: testimonial.review }}></p>
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
