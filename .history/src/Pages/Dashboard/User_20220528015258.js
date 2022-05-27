import React from 'react';

const User = () => {
    const {data} =useQuery('users',()=>fetch('').then(res=>res.j))
    return (
        <div>
            <h1>User All</h1>
        </div>
    );
};

export default User;