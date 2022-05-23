import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useCandidatesCount } from '../CandidateContext';


const Details = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState('');
    const {updateConfirmedCount, updateRefusedCount, updatePendingCount } = useCandidatesCount();
    const { firstName, lastName, age, number, email, notes, status } = candidate;

    useEffect(() => {
        const getById = async () => {
            const { data } = await axios.get(`/api/Candidate/getByid?id=${id}`);
            setCandidate(data);
            console.log(data);

        }
        getById();
    }, []);

    const onRefuseClick = async () => {
        await axios.post('api/Candidate/refusecandidate', candidate);
        updateConfirmedCount();
        updateRefusedCount();
        updatePendingCount();
        candidate.status = 'refused';
    }


    const onConfirmClick = async () => {
        await axios.post('api/Candidate/confirmcandidate', candidate);
        updateConfirmedCount();
        updateRefusedCount();
        updatePendingCount();
         candidate.status = 'confirmed';


    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card card-body bg-light'>
                        <h4>First Name: {firstName}</h4>
                        <h4>Last Name: {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone Number: {number}</h4>
                        <h4>Notes: {notes}</h4>
                    </div>

                    {status === "Pending" &&
                        <div><button className='btn btn-danger ' onClick={onRefuseClick}>Refuse</button>
                            <button className='btn btn-primary ' onClick={onConfirmClick}>Confirm</button></div>}


                </div>
            </div>
        </div>
    )
}
export default Details;