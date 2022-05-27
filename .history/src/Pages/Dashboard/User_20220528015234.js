import React from 'react';

const User = () => {
    const {data} =useQuery('users',()=>fetch(''))
    return (
        <div>
            <h1>User All</h1>
        </div>
    );
};

export default User;