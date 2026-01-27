import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import VideoModal from './components/VideoModal';
import SubmissionModal from './components/SubmissionModal';
import ScrollToTop from './components/ScrollToTop';
import { VideoModalProvider, useVideoModal } from './contexts/VideoModalContext';
import { SubmissionModalProvider, useSubmissionModal } from './contexts/SubmissionModalContext';
import { ProgramEnrollmentProvider } from './contexts/ProgramEnrollmentContext';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import ProgramDetail from './components/ProgramDetail';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import DigitalLearning from './pages/DigitalLearning';

// Component to handle scroll to top on route change
const ScrollToTopOnRouteChange = () => {
    const location = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return null;
};

const AppContent = () => {
    const { isVideoModalOpen, closeVideoModal, videoUrl } = useVideoModal();
    const { modalState, closeModal } = useSubmissionModal();

    return (
        <>
            <ScrollToTopOnRouteChange />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="programs" element={<Courses />} />
                    <Route path="programs/:id" element={<ProgramDetail />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="events" element={<Events />} />
                    <Route path="digital-learning" element={<DigitalLearning />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
            
            {/* Global Video Modal - renders at root level */}
            <VideoModal 
                isOpen={isVideoModalOpen}
                onClose={closeVideoModal}
                videoUrl={videoUrl}
            />
            
            {/* Global Submission Modal - renders at root level */}
            <SubmissionModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                type={modalState.type}
                title={modalState.title}
                message={modalState.message}
            />
            
            {/* Scroll to Top Button */}
            <ScrollToTop />
        </>
    );
};

function App() {
  return (
    <ProgramEnrollmentProvider>
      <VideoModalProvider>
        <SubmissionModalProvider>
          <Router>
            <AppContent />
          </Router>
        </SubmissionModalProvider>
      </VideoModalProvider>
    </ProgramEnrollmentProvider>
  );
}

export default App;
