import React from 'react';

const userRow = ({user}) => {
    const {email} = user;
    return (
        <div>
            <tr>
                <th>
                <label>
                <input type="checkbox" class="checkbox" />
                </label>
                </th>
                <td>Image</td>
                <td>{email}</td>
                <td>Job</td>
                <td>Favorite Color</th>
                            
             </tr>
        </div>
    );
};

export default userRow;