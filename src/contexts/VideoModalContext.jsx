import React, { createContext, useContext, useState } from 'react';

const VideoModalContext = createContext();

export const useVideoModal = () => {
    const context = useContext(VideoModalContext);
    if (!context) {
        throw new Error('useVideoModal must be used within a VideoModalProvider');
    }
    return context;
};

export const VideoModalProvider = ({ children }) => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const videoUrl = 'https://youtu.be/AIVnLaDMotk?si=4XwprdlcWT1QpK0H';

    const openVideoModal = () => setIsVideoModalOpen(true);
    const closeVideoModal = () => setIsVideoModalOpen(false);

    return (
        <VideoModalContext.Provider value={{
            isVideoModalOpen,
            openVideoModal,
            closeVideoModal,
            videoUrl
        }}>
            {children}
        </VideoModalContext.Provider>
    );
};

export default VideoModalContext;
