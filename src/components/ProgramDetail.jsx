import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import './ProgramDetail.css';

const programData = {
    music: {
        title: "Music Classes",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
        description: "Discover the joy of music with our comprehensive program covering instruments, vocals, and theory.",
        subPrograms: [
            {
                id: 'piano',
                title: 'Piano',
                image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop',
                description: 'Master the keys with comprehensive piano training',
                timing: '3:00 PM - 5:00 PM',
                details: [
                    'Classical and modern techniques',
                    'Music theory integration',
                    'Performance preparation',
                    'Individual attention'
                ]
            },
            {
                id: 'guitar',
                title: 'Guitar',
                image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
                description: 'Learn guitar from basics to advanced performance',
                timing: '4:00 PM - 6:00 PM',
                details: [
                    'Acoustic and electric styles',
                    'Chord mastery and solos',
                    'Genre exploration',
                    'Band performance skills'
                ]
            },
            {
                id: 'drums',
                title: 'Drums',
                image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
                description: 'Develop rhythm and percussion skills',
                timing: '5:00 PM - 7:00 PM',
                details: [
                    'Rhythm fundamentals',
                    'Various drumming styles',
                    'Coordination training',
                    'Live performance practice'
                ]
            },
            {
                id: 'vocals',
                title: 'Vocals',
                image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
                description: 'Find your voice and master vocal techniques',
                timing: '6:00 PM - 8:00 PM',
                details: [
                    'Breathing techniques',
                    'Range expansion',
                    'Genre exploration',
                    'Solo and group training'
                ]
            },
            {
                id: 'violin',
                title: 'Violin',
                image: 'https://images.unsplash.com/photo-1518699930442-1c665b5d8b9c?q=80&w=2070&auto=format&fit=crop',
                description: 'Classical violin training for all levels',
                timing: '2:00 PM - 4:00 PM',
                details: [
                    'Classical techniques',
                    'Music reading skills',
                    'Orchestra preparation',
                    'Solo performance training'
                ]
            },
            {
                id: 'music-production',
                title: 'Music Production',
                image: 'https://images.unsplash.com/photo-1471478331149-c72f4e049368?q=80&w=2070&auto=format&fit=crop',
                description: 'Learn modern music production and recording',
                timing: '7:00 PM - 9:00 PM',
                details: [
                    'Digital audio workstations',
                    'Mixing and mastering',
                    'Sound design basics',
                    'Studio recording techniques'
                ]
            }
        ]
    },
    yoga: {
        title: "Yoga Classes",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop",
        description: "Transform your mind and body with our beginner-friendly yoga program focused on wellness and balance.",
        subPrograms: [
            {
                id: 'morning-yoga',
                title: 'Morning Yoga (Beginner)',
                image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop',
                description: 'Perfect introduction to yoga practice',
                timing: '6:00 AM - 7:30 AM',
                details: [
                    'Basic poses and alignment',
                    'Breathing fundamentals',
                    'Stress reduction techniques',
                    'Flexible scheduling'
                ]
            },
            {
                id: 'yoga-wellness',
                title: 'Yoga for Wellness',
                image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop',
                description: 'Focus on holistic health and wellness',
                timing: '8:00 AM - 9:30 AM',
                details: [
                    'Meditation practices',
                    'Mindfulness techniques',
                    'Lifestyle integration',
                    'Personal wellness plans'
                ]
            },
            {
                id: 'yoga-seniors',
                title: 'Yoga for Seniors',
                image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop',
                description: 'Gentle yoga practice for seniors',
                timing: '9:30 AM - 10:30 AM',
                details: [
                    'Gentle stretches and movements',
                    'Joint-friendly exercises',
                    'Balance and stability focus',
                    'Adapted poses for comfort'
                ]
            }
        ]
    },
    'art-therapy': {
        title: "Art Therapy / Art Workshops",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop",
        description: "Experience creative healing through guided art therapy sessions and workshops.",
        subPrograms: [
            {
                id: 'kids-art-workshop',
                title: 'Kids Art Workshop',
                image: 'https://picsum.photos/seed/kids-art/400/300.jpg',
                description: 'Creative art sessions for children',
                timing: '10:30 AM - 12:00 PM',
                details: [
                    'Fun and engaging activities',
                    'Age-appropriate projects',
                    'Creative expression',
                    'Skill development'
                ]
            },
            {
                id: 'art-therapy-session',
                title: 'Art Therapy Session',
                image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2070&auto=format&fit=crop',
                description: 'Therapeutic art for emotional wellness',
                timing: '12:30 PM - 2:00 PM',
                details: [
                    'Expressive art techniques',
                    'Emotional processing',
                    'Professional guidance',
                    'Personal growth focus'
                ]
            },
            {
                id: 'weekend-workshop',
                title: 'Weekend Workshop',
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop',
                description: 'Special weekend creative sessions',
                timing: '2:30 PM - 3:30 PM',
                details: [
                    'Weekend scheduling',
                    'Intensive creative projects',
                    'Community building',
                    'Take-home artwork'
                ]
            }
        ]
    }
};

const ProgramDetail = () => {
    const { id } = useParams();
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    
    const program = programData[id] || {
        title: "Program",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
        description: "Explore our world-class programs.",
        subPrograms: []
    };

    useEffect(() => {
        const checkScrollButtons = () => {
            if (scrollContainerRef.current && id === 'music') {
                const container = scrollContainerRef.current;
                setCanScrollLeft(container.scrollLeft > 0);
                setCanScrollRight(
                    container.scrollLeft < container.scrollWidth - container.clientWidth
                );
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollButtons);
            checkScrollButtons(); // Initial check
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScrollButtons);
            }
        };
    }, [id]);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -430,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 430,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="page-program-detail">
            <div className="program-hero">
                <img src={program.image} alt={program.title} />
                <div className="program-hero-overlay">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="program-hero-title"
                    >
                        {program.title}
                    </motion.h1>
                </div>
            </div>

            <Section>
                <motion.div
                    className="program-overview"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Program <span className="text-gold">Overview</span></h2>
                    <p>{program.description}</p>
                    <Link to="/contact" className="btn btn-primary">Enroll Now</Link>
                </motion.div>

                <div className="sub-programs-section">
                    <h3>Explore Our <span className="text-gold">Programs</span></h3>
                    <div className="scroll-navigation">
                        {id === 'music' && (
                            <>
                                <button 
                                    className="scroll-btn prev" 
                                    onClick={scrollLeft}
                                    disabled={!canScrollLeft}
                                >
                                    ←
                                </button>
                                <button 
                                    className="scroll-btn next" 
                                    onClick={scrollRight}
                                    disabled={!canScrollRight}
                                >
                                    →
                                </button>
                            </>
                        )}
                        <div 
                            ref={scrollContainerRef}
                            className={`sub-programs-grid ${id === 'music' ? 'music-scroll' : ''}`}
                        >
                            {program.subPrograms.map((subProgram, index) => (
                                <motion.div
                                    key={subProgram.id}
                                    className="sub-program-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="sub-program-image">
                                        <img src={subProgram.image} alt={subProgram.title} />
                                    </div>
                                    <div className="sub-program-content">
                                        <h4>{subProgram.title}</h4>
                                        <p className="sub-program-timing">{subProgram.timing}</p>
                                        <p className="sub-program-description">{subProgram.description}</p>
                                        <ul className="sub-program-details">
                                            {subProgram.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/contact" className="sub-program-btn">
                                            Join This Program
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default ProgramDetail;
