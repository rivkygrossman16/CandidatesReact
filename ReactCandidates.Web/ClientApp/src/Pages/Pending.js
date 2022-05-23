import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useCandidatesCount } from '../CandidateContext';
import PendingRow from '../Components/TableRow';

const Pending = () => {

    const [pending, setPending] = useState([]);


    useEffect(() => {
        const getPending = async () => {
            const { data } = await axios.get('/api/Candidate/getall', "pending");
            setPending(data);
            
        }
        getPending();
    }, []);

    return (
        <div>
            <br />
            <div className="container">
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!pending && pending.map(c =>
                            <PendingRow
                                key={c.id}
                                candidate={c}
                                isPending={true}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );

}
export default Pending;