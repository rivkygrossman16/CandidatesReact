import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useCandidatesCount } from '../CandidateContext';
import TableRow from '../Components/TableRow';

const Confirmed = () => {

    const [confirmed, setConfirmed] = useState([]);
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const getConfirmed=async () => {
            const { data } = await axios.get('/api/Candidate/getallconfirmed');
            setConfirmed(data);

        }
        getConfirmed();
    }, []);

    const onToggleClick = () => {
        setToggle(!toggle);
        console.log(toggle);
    }

    return (
        <div>
            <br />
            <div className="container">
                <button className='btn btn-warning ' onClick={onToggleClick}>Toggle</button>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!confirmed && confirmed.map(c =>
                            <TableRow
                                key={c.id}
                                candidate={c}
                                isPending={false}
                                toggle={toggle}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );

}
export default Confirmed;