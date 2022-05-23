import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TableRow = ({ candidate, isPending, toggle }) => {
    const { firstName, lastName, email, number, notes, id } = candidate;
    return (
        <tr>
            {isPending &&
                <td>
                    <Link to={`/Details/${id}`}>
                        Details
                    </Link>
                </td>}
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{number}</td>
            <td>{email}</td>
            {!isPending && toggle && < td >
                {notes}
            </td>
}
           
        </tr>
    )

}
export default TableRow;