import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { useProgramEnrollment } from '../contexts/ProgramEnrollmentContext';
import { useSubmissionModal } from '../contexts/SubmissionModalContext';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const { enrollmentData, clearEnrollmentData } = useProgramEnrollment();
    const { showSuccessModal, showErrorModal } = useSubmissionModal();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interestedField: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    useEffect(() => {
        if (enrollmentData) {
            const fieldMap = {
                'piano': 'music - Piano',
                'guitar': 'music - Guitar',
                'drums': 'music - Drums',
                'vocals': 'music - Vocals',
                'violin': 'music - Violin',
                'flute': 'music - Flute',
                'ukulele': 'music - Ukulele',
                'chess': 'after-school-activities - Chess',
                'dance': 'after-school-activities - Dance',
                'art': 'after-school-activities - Art',
                'yoga': 'after-school-activities - Yoga',
                'summer-camp': 'summer-camp - Summer Camp',
                'instrument-sales': 'sales-instrument-repair - Instrument Sales',
                'instrument-repairs': 'sales-instrument-repair - Instrument Repairs',
                'instrument-rentals': 'sales-instrument-repair - Instrument Rentals',
                'instrument sales': 'sales-instrument-repair - Instrument Sales',
                'instrument repairs': 'sales-instrument-repair - Instrument Repairs',
                'instrument rentals': 'sales-instrument-repair - Instrument Rentals',
                'online-classes': 'online-classes - Online Classes',
                'jamming': 'events-entertainment - Weekly Jamming',
                'karaoke': 'events-entertainment - Karaoke Nights',
                'signature-events': 'events-entertainment - Signature Events',
                'standard': 'space-rentals - Standard Room',
                'premium': 'space-rentals - Premium Room',
                'ultimate': 'space-rentals - Ultimate Room'
            };
            
            setFormData(prev => ({
                ...prev,
                interestedField: fieldMap[enrollmentData.programName?.toLowerCase()] || 
                                 fieldMap[enrollmentData.category] || 
                                 enrollmentData.programName || ''
            }));
        }
    }, [enrollmentData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const templateParams = {
                to_name: 'Blue Grass Academy',
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                interested_field: formData.interestedField,
                message: `New contact form submission from Blue Grass Academy website.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested Field: ${formData.interestedField}`
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams
            );
            
            if (response.status === 200) {
                showSuccessModal(
                    'Thank You for Your Interest!',
                    `Thank you for contacting Blue Grass Academy, ${formData.name}! We have received your inquiry and will get back to you soon.`
                );
                setFormData({ 
                    name: '', 
                    email: '', 
                    phone: '', 
                    interestedField: ''
                });
                clearEnrollmentData();
            } else {
                showErrorModal(
                    'Submission Failed',
                    'Sorry, there was an error sending your message. Please try again later or contact us directly at bluegrassacademybangalore@gmail.com'
                );
            }
        } catch (error) {
            console.error('Failed to send email:', error);
            showErrorModal(
                'Network Error',
                'Unable to connect to our servers. Please check your internet connection and try again, or contact us directly.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="page-contact">
            <Section className="contact-section">
                <div className="contact-header animate-fade-in">
                    <span className="badge">Contact</span>
                    <h1>Get in touch</h1>
                    <p className="contact-intro">
                        For any inquiries or to explore your vision further, we invite you to contact
                        our professional team using the details provided below.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Info Column */}
                    <div className="contact-info">
                        <div className="info-item">
                            <h4>Office</h4>
                            <p>59/6, 80 Feet Road, Gubbalala Main Rd, Gubbalala, Subramanyapura, Bengaluru, Karnataka 560061</p>
                        </div>
                        <div className="info-item">
                            <h4>Email</h4>
                            <p>bluegrassacademybangalore@gmail.com</p>
                        </div>
                        <div className="info-item">
                            <h4>Telephone</h4>
                            <p>8792175588</p>
                            <p>8861552277</p>
                            <p>8971168006</p>
                        </div>

                        <div className="info-item social-section">
                            <h4>Follow us</h4>
                            <div className="social-links-contact">
                                <a href="#" className="social-icon-c"><FaInstagram /></a>
                                <a href="#" className="social-icon-c"><FaFacebookF /></a>
                                <a href="#" className="social-icon-c"><FaYoutube /></a>
                                <a href="#" className="social-icon-c"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="91-00000000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="interestedField">Interested Field</label>
                                <select
                                    id="interestedField"
                                    name="interestedField"
                                    value={formData.interestedField}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a field</option>
                                    <optgroup label="Music">
                                        <option value="music - Piano">Piano</option>
                                        <option value="music - Guitar">Guitar</option>
                                        <option value="music - Drums">Drums</option>
                                        <option value="music - Vocals">Vocals</option>
                                        <option value="music - Violin">Violin</option>
                                        <option value="music - Flute">Flute</option>
                                        <option value="music - Ukulele">Ukulele</option>
                                    </optgroup>
                                    <optgroup label="After School Activities">
                                        <option value="after-school-activities - Chess">Chess</option>
                                        <option value="after-school-activities - Dance">Dance</option>
                                        <option value="after-school-activities - Art">Art</option>
                                        <option value="after-school-activities - Yoga">Yoga</option>
                                    </optgroup>
                                    <optgroup label="Sales & Instrument Repair">
                                        <option value="sales-instrument-repair - Instrument Sales">Instrument Sales</option>
                                        <option value="sales-instrument-repair - Instrument Repairs">Instrument Repairs</option>
                                        <option value="sales-instrument-repair - Instrument Rentals">Instrument Rentals</option>
                                    </optgroup>
                                    <optgroup label="Online Classes">
                                        <option value="online-classes - Online Classes">Online Classes</option>
                                    </optgroup>
                                    <optgroup label="Events & Entertainment">
                                        <option value="events-entertainment - Weekly Jamming">Weekly Jamming</option>
                                        <option value="events-entertainment - Karaoke Nights">Karaoke Nights</option>
                                        <option value="events-entertainment - Signature Events">Signature Events</option>
                                    </optgroup>
                                    <optgroup label="Space Rentals">
                                        <option value="space-rentals - Standard Room">Standard Room</option>
                                        <option value="space-rentals - Premium Room">Premium Room</option>
                                        <option value="space-rentals - Ultimate Room">Ultimate Room</option>
                                    </optgroup>
                                    <optgroup label="Summer Programs">
                                        <option value="summer-camp - Summer Camp">Summer Camp</option>
                                    </optgroup>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
