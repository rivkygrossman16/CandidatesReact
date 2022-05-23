import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CandidatesContext = createContext();

const CandidatesContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);

    const updatePendingCount = async () => {
        const { data } = await axios.get('/api/Candidate/getpending');
        setPendingCount(data.count);
    }
    const updateRefusedCount = async () => {
        const { data } = await axios.get('/api/Candidate/getrefused');
        setRefusedCount(data.count);
    }

    const updateConfirmedCount = async () => {
        const { data } = await axios.get('/api/Candidate/getconfirmed');
        setConfirmedCount(data.count);
        
    }

    useEffect(() => {
        updatePendingCount();
        updateRefusedCount();
        updateConfirmedCount();
    }, []);


    const obj = {
        pendingCount,
        updatePendingCount,
        refusedCount,
        updateRefusedCount,
        confirmedCount,
        updateConfirmedCount

    }
    return (
        <CandidatesContext.Provider value={obj}>
            {children}
        </CandidatesContext.Provider>
    )
}

const useCandidatesCount = () => {
    return useContext(CandidatesContext);
}

export { CandidatesContextComponent, useCandidatesCount };