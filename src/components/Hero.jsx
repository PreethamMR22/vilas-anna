import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaMusic, FaStar, FaYoutube } from 'react-icons/fa';
import { useVideoModal } from '../contexts/VideoModalContext';
const heroImage = '/program-cards-images/offline-musicClass.jpeg';
import './Hero.css';

const Hero = () => {
    const { openVideoModal } = useVideoModal();
    const [counters, setCounters] = useState({
        students: 0,
        programs: 0,
        years: 0
    });

    const [completedCounters, setCompletedCounters] = useState({
        students: false,
        programs: false,
        years: false
    });

    const targetValues = {
        students: 500,
        programs: 50,
        years: 3
    };

    useEffect(() => {
        console.log('Component mounted, starting counter animation');
        
        // All counters reach target at the same time (4 seconds)
        const studentsDuration = 4000; // 4 seconds for 500
        const programsDuration = 4000; // 4 seconds for 15  
        const yearsDuration = 4000; // 4 seconds for 10
        
        const studentsSteps = 80;
        const programsSteps = 30; // Fewer steps for smaller number
        const yearsSteps = 25; // Fewer steps for smaller number

        const studentsInterval = studentsDuration / studentsSteps;
        const programsInterval = programsDuration / programsSteps;
        const yearsInterval = yearsDuration / yearsSteps;

        let studentsTimer, programsTimer, yearsTimer;

        // Students counter
        studentsTimer = setInterval(() => {
            setCounters((prev) => {
                const newCounters = { ...prev };
                if (newCounters.students < targetValues.students) {
                    newCounters.students = Math.min(
                        newCounters.students + Math.ceil(targetValues.students / studentsSteps),
                        targetValues.students
                    );
                    
                    // Trigger blush effect when reaching target
                    if (newCounters.students === targetValues.students && !completedCounters.students) {
                        setCompletedCounters(prev => ({ ...prev, students: true }));
                        setTimeout(() => {
                            setCompletedCounters(prev => ({ ...prev, students: false }));
                        }, 2000);
                    }
                }
                return newCounters;
            });
        }, studentsInterval);

        // Programs counter
        programsTimer = setInterval(() => {
            setCounters((prev) => {
                const newCounters = { ...prev };
                if (newCounters.programs < targetValues.programs) {
                    newCounters.programs = Math.min(
                        newCounters.programs + Math.ceil(targetValues.programs / programsSteps),
                        targetValues.programs
                    );
                    
                    // Trigger blush effect when reaching target
                    if (newCounters.programs === targetValues.programs && !completedCounters.programs) {
                        setCompletedCounters(prev => ({ ...prev, programs: true }));
                        setTimeout(() => {
                            setCompletedCounters(prev => ({ ...prev, programs: false }));
                        }, 2000);
                    }
                }
                return newCounters;
            });
        }, programsInterval);

        // Years counter
        yearsTimer = setInterval(() => {
            setCounters((prev) => {
                const newCounters = { ...prev };
                if (newCounters.years < targetValues.years) {
                    newCounters.years = Math.min(
                        newCounters.years + Math.ceil(targetValues.years / yearsSteps),
                        targetValues.years
                    );
                    
                    // Trigger blush effect when reaching target
                    if (newCounters.years === targetValues.years && !completedCounters.years) {
                        setCompletedCounters(prev => ({ ...prev, years: true }));
                        setTimeout(() => {
                            setCompletedCounters(prev => ({ ...prev, years: false }));
                        }, 2000);
                    }
                }
                return newCounters;
            });
        }, yearsInterval);

        return () => {
            clearInterval(studentsTimer);
            clearInterval(programsTimer);
            clearInterval(yearsTimer);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <section className="hero">
            <div className="hero-bg-wrapper">
                <motion.img 
                    src={heroImage} 
                    alt="Piano student" 
                    className="hero-bg"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
                <div className="hero-overlay"></div>
                <div className="hero-particles">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                                y: [0, -100, -200]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <motion.div 
                className="container hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={itemVariants}>
                    Blue Grass <br />
                    <span className="text-gold">Academy</span>
                </motion.h1>


                <motion.div className="hero-badge" variants={itemVariants}>
                    <FaMusic className="badge-icon" />
                    <span>Where passion becomes performance</span>
                    <FaStar className="badge-star" />
                </motion.div>

                <motion.p variants={itemVariants}>
                    <span className="text-gold text-bold">Blue Grass Academy</span> is a premium creative hub in Bengaluru offering music education, musical instrument sales, performing arts, wellness programs, various events, and studio space, all under one roof.
                </motion.p>

                <motion.div className="hero-buttons" variants={itemVariants}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <button 
                            className="btn btn-primary"
                            onClick={() => window.location.href = 'tel:8792175588'}
                        >
                            Book a free trial
                        </button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/programs" className="btn btn-outline">
                            Explore Programs
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <button 
                            className="btn btn-outline"
                            onClick={openVideoModal}
                        >
                            <FaYoutube className="btn-icon" />
                            Watch Brand Film
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="hero-stats"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}
                >
                    <div className="stat-item">
                        <div className={`stat-number ${completedCounters.students ? 'blush' : ''}`}>
                            {counters.students}+
                        </div>
                        <div className="stat-label">Students</div>
                    </div>
                    <div className="stat-item">
                        <div className={`stat-number ${completedCounters.programs ? 'blush' : ''}`}>
                            {counters.programs}+
                        </div>
                        <div className="stat-label">Programs</div>
                    </div>
                    <div className="stat-item">
                        <div className={`stat-number ${completedCounters.years ? 'blush' : ''}`}>
                            {counters.years}+
                        </div>
                        <div className="stat-label">Years</div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
