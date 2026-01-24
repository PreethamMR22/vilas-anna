import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import VideoModal from './components/VideoModal';
import ScrollToTop from './components/ScrollToTop';
import { VideoModalProvider, useVideoModal } from './contexts/VideoModalContext';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import ProgramDetail from './components/ProgramDetail';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

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
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
            
            {/* Global Video Modal - renders at root level */}
            <VideoModal 
                isOpen={isVideoModalOpen}
                onClose={closeVideoModal}
                videoUrl={videoUrl}
            />
            
            {/* Scroll to Top Button */}
            <ScrollToTop />
        </>
    );
};

function App() {
  return (
    <VideoModalProvider>
      <Router>
        <AppContent />
      </Router>
    </VideoModalProvider>
  );
}

export default App;
