import React from 'react';

const UserRow = ({user}) => {
    const {ememailail} = user;
    return (
        
            <tr>
                <th>
                <label>
                <input type="checkbox" class="checkbox" />
                </label>
                </th>
                <td>Image</td>
                <td>{email}</td>
                <td>Job</td>
                <td>Favorite Color</td>
                            
             </tr>
        
    );
};

export default UserRow;