import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgramEnrollment } from '../contexts/ProgramEnrollmentContext';
import './ProgramDetail.css';

// LazyImage component for better performance
const LazyImage = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={imgRef} className={`lazy-image-container ${className}`}>
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
                    onLoad={() => setIsLoaded(true)}
                    loading="lazy"
                />
            )}
            {!isLoaded && (
                <div className="image-placeholder">
                    <div className="skeleton-loader"></div>
                </div>
            )}
        </div>
    );
};

const programData = {
    music: {
        title: "Music Classes",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
        description: "Discover the joy of music with our comprehensive program covering instruments, vocals, and theory.",
        overview: {
            instrumental: {
                title: "INSTRUMENTAL TRAINING",
                description: "We offer structured training in Violin, Guitar (Acoustic & Electric), Keyboard/Piano, Drums, Ukulele, Flute, and Classical Instruments.",
                levels: ["Beginner", "Intermediate", "Advanced"]
            }
        },
        subPrograms: [
            {
                id: 'piano',
                title: 'Piano',
                image: '/music-page-images/piano.jpeg',
                description: 'Master the keys with comprehensive piano training',
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
                image: '/music-page-images/guitar.jpeg',
                description: 'Learn guitar from basics to advanced performance',
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
                image: '/music-page-images/drums.jpg',
                description: 'Develop rhythm and percussion skills',
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
                image: '/music-page-images/vocal.jpeg',
                description: 'Find your voice and master vocal techniques',
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
                image: '/music-page-images/violine.jpg',
                description: 'Classical violin training for all levels',
                details: [
                    'Classical techniques',
                    'Music reading skills',
                    'Orchestra preparation',
                    'Solo performance training'
                ]
            },
            {
                id: 'flute',
                title: 'Flute',
                image: '/music-page-images/flute.jpg',
                description: 'Master the flute with comprehensive training',
                details: [
                    'Classical and modern flute techniques',
                    'Breath control and embouchure',
                    'Music theory integration',
                    'Solo and ensemble performance'
                ]
            },
            {
                id: 'ukulele',
                title: 'Ukulele',
                image: '/music-page-images/ukulele.jpg',
                description: 'Learn the cheerful sounds of the ukulele',
                details: [
                    'Basic chords and strumming patterns',
                    'Island and pop music styles',
                    'Fingerpicking techniques',
                    'Group playing and performance'
                ]
            }
        ]
    },
    'after-school-activities': {
        title: "Creative & Wellness Programs",
        image: "/program-cards-images/after-school.jpg",
        description: "Engaging after-school programs designed to develop creativity, critical thinking, and physical wellness.",
        subPrograms: [
            {
                id: 'chess',
                title: 'Chess',
                image: '/afterSchool-images/chess.jpg',
                description: 'Develop strategic thinking and problem-solving skills',
                details: [
                    'Beginner to advanced levels',
                    'Tournament preparation',
                    'Critical thinking development',
                    'Individual and team play'
                ]
            },
            {
                id: 'art',
                title: 'Art',
                image: '/afterSchool-images/art.jpg',
                description: 'Explore creativity through various art mediums',
                details: [
                    'Drawing and painting techniques',
                    'Creative expression',
                    'Art history appreciation',
                    'Portfolio development'
                ]
            },
            {
                id: 'yoga',
                title: 'Yoga',
                image: '/afterSchool-images/yoga.jpg',
                description: 'Build flexibility, strength, and mindfulness',
                details: [
                    'Age-appropriate poses',
                    'Breathing techniques',
                    'Stress management',
                    'Physical wellness focus'
                ]
            },
            {
                id: 'dance',
                title: 'Dance',
                image: '/afterSchool-images/dance.jpg',
                description: 'Express yourself through movement and rhythm',
                details: [
                    'Various dance styles',
                    'Choreography basics',
                    'Performance opportunities',
                    'Cultural dance appreciation'
                ]
            }
        ]
    },
    'instrumental-sales': {
        title: "Instrument Store & Service",
        image: "/program-cards-images/instrument-sale.jpg",
        description: "<span class='highlight'>Buy</span> <span class='highlight'>Maintain</span> <span class='highlight'>Upgrade</span><br><br>Your trusted destination for instruments and after-sales support.",
        subPrograms: [
            {
                id: 'instrument-sales',
                title: 'Instrument Sales',
                image: '/instrumentSales-images/sales.jpg',
                description: 'Quality instruments for all skill levels',
                details: [
                    'Wide selection of instruments',
                    'Beginner to professional models',
                    'Expert consultation available',
                    'Competitive pricing'
                ]
            },
            {
                id: 'instrument-repairs',
                title: 'Instrument Repairs',
                image: "/instrumentSales-images/repair.jpg",
                description: 'Professional repair and maintenance services',
                details: [
                    'Expert technicians',
                    'Quick turnaround time',
                    'All instrument types',
                    'Warranty on services'
                ]
            },
            {
                id: 'instrument-rentals',
                title: 'Instrument Rentals',
                image: '/instrumentSales-images/rental.jpg',
                description: 'Flexible rental plans for students and professionals',
                details: [
                    'Monthly and yearly plans',
                    'Maintenance included',
                    'Upgrade options available',
                    'Ideal for beginners'
                ]
            }
        ]
    }
};

const ProgramDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setProgramData } = useProgramEnrollment();
    
    const program = programData[id] || {
        title: "Program",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
        description: "Explore our world-class programs.",
        subPrograms: []
    };

    const handleJoinProgram = (subProgram) => {
        const programData = {
            category: id,
            programName: subProgram.title,
            description: subProgram.description
        };
        setProgramData(programData);
        navigate('/contact');
    };



    return (
        <div className="page-program-detail">
            <div className="program-hero">
                <LazyImage 
                    src={program.image} 
                    alt={program.title}
                    className="hero-image"
                />
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

            <div className="section">
                <div className="container">
                    {program.overview && (
                    <div className="program-overview-section">
                        <h2>Program <span className="text-gold">Overview</span></h2>
                        
                        {program.overview.instrumental && (
                            <div className="overview-block">
                                <h3>{program.overview.instrumental.title}</h3>
                                <p>{program.overview.instrumental.description}</p>
                                <div className="levels-section">
                                    <h4>LEVELS</h4>
                                    <div className="levels-list">
                                        {program.overview.instrumental.levels.map((level, index) => (
                                            <span key={index} className="level-badge">{level}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="program-overview">
                    <p dangerouslySetInnerHTML={{ __html: program.description }}></p>
                    {id !== 'instrumental-sales' && (
                        <Link to="/contact" className="btn btn-primary">Enroll Now</Link>
                    )}
                </div>

                <div className="sub-programs-section">
                    <h3>Explore Our <span className="text-gold">Programs</span></h3>
                    <div className="sub-programs-grid">
                        {program.subPrograms.map((subProgram, index) => (
                            <div key={subProgram.id} className="sub-program-card">
                                <div className="sub-program-image">
                                    <LazyImage 
                                        src={subProgram.image} 
                                        alt={subProgram.title}
                                        className="sub-program-img"
                                    />
                                </div>
                                <div className="sub-program-content">
                                    <h4>{subProgram.title}</h4>
                                    {subProgram.id === 'vocals' && (
                                        <div className="vocal-styles">
                                            <span className="vocal-style classical">Classical</span>
                                            <span className="vocal-style western">Western</span>
                                        </div>
                                    )}
                                    <p className="sub-program-description">{subProgram.description}</p>
                                    <ul className="sub-program-details">
                                        {subProgram.details.map((detail, detailIndex) => (
                                            <li key={detailIndex}>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                    {id === 'instrumental-sales' ? (
                                        <button 
                                            onClick={() => handleJoinProgram(subProgram)}
                                            className="sub-program-btn"
                                        >
                                            Enquire
                                        </button>
                                    ) : (
                                        <button 
                                            onClick={() => handleJoinProgram(subProgram)}
                                            className="sub-program-btn"
                                        >
                                            {id === 'music' || id === 'after-school-activities' ? 'Book a free trial' : 'Join This Program'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetail;
