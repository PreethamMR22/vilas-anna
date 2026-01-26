import React, { createContext, useContext, useState } from 'react';

const SubmissionModalContext = createContext();

export const useSubmissionModal = () => {
    const context = useContext(SubmissionModalContext);
    if (!context) {
        throw new Error('useSubmissionModal must be used within a SubmissionModalProvider');
    }
    return context;
};

export const SubmissionModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        type: 'success',
        title: '',
        message: ''
    });

    const showModal = (type, title, message) => {
        setModalState({
            isOpen: true,
            type,
            title,
            message
        });
    };

    const showSuccessModal = (title, message) => {
        showModal('success', title, message);
    };

    const showErrorModal = (title, message) => {
        showModal('error', title, message);
    };

    const closeModal = () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
    };

    return (
        <SubmissionModalContext.Provider value={{
            modalState,
            showModal,
            showSuccessModal,
            showErrorModal,
            closeModal
        }}>
            {children}
        </SubmissionModalContext.Provider>
    );
};

export default SubmissionModalContext;
