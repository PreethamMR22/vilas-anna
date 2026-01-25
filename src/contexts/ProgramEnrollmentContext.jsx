import React, { createContext, useContext, useState } from 'react';

const ProgramEnrollmentContext = createContext();

export const ProgramEnrollmentProvider = ({ children }) => {
    const [enrollmentData, setEnrollmentData] = useState(null);

    const setProgramData = (programData) => {
        setEnrollmentData(programData);
    };

    const clearEnrollmentData = () => {
        setEnrollmentData(null);
    };

    return (
        <ProgramEnrollmentContext.Provider value={{
            enrollmentData,
            setProgramData,
            clearEnrollmentData
        }}>
            {children}
        </ProgramEnrollmentContext.Provider>
    );
};

export const useProgramEnrollment = () => {
    const context = useContext(ProgramEnrollmentContext);
    if (!context) {
        throw new Error('useProgramEnrollment must be used within a ProgramEnrollmentProvider');
    }
    return context;
};

export default ProgramEnrollmentContext;
