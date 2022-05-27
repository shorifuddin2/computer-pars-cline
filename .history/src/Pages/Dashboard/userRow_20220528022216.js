import React from 'react';

const userRow = () => {
    return (
        <div>
            <tr>
                <th>
                <label>
                <input type="checkbox" class="checkbox" /></label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                            
             </tr>
        </div>
    );
};

export default userRow;