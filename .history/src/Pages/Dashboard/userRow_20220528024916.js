import React from 'react';

const UserRow = ({user}) => {
    const {email} = user;
    return (
        
            <tr>
                <th>
                <label>
                <input type="checkbox" class="checkbox" />
                </label>
                </th>
                <td>Image</td>
                <td>{</td>
                <td>Job</td>
                <td>Favorite Color</td>
                            
             </tr>
        
    );
};

export default UserRow;