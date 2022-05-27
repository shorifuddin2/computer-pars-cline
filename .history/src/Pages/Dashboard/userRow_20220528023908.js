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
                <th>Image</th>
                <th>{email}</th>
                <th>Job</th>
                <th>Favorite Color</th>
                            
             </tr>
        </div>
    );
};

export default userRow;