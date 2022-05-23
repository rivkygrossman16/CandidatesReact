import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useCandidatesCount } from '../CandidateContext';

const AddCandidate = () => {

    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        notes: '',
        status: '',
    });
    const history = useHistory();
    const { updatePendingCount } = useCandidatesCount();


    const onSubmitClick = async () => {
        candidate.status = 'pending';
        await axios.post('/api/Candidate/addcandidate', candidate);
        updatePendingCount();
        history.push('/');
    };

    const onTextChange = e => {
        setCandidate({
            ...candidate,
            [e.target.name]: e.target.value
        
        });
}

    return (
        <div>
            <br />
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>

                        <input type="text" name="firstName" placeholder="First Name" className="form-control" onChange={onTextChange} />
                        <br />
                        <input type="text" name="lastName" placeholder="Last Name" className="form-control" onChange={onTextChange} />
                        <br />
                        <input type="text" name="email" placeholder="Email" className="form-control" onChange={onTextChange} />
                        <br />
                        <input type="text" name="number" placeholder="Phone Number" className="form-control" onChange={onTextChange} />
                        <br /><textarea rows="5" className="form-control" name="notes" onChange={onTextChange}></textarea>
                        <br />
                        <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>

                    </div>
                </div>
            </div>
        </div>

    );
}
export default AddCandidate;