import React from 'react';
import {use}

const User = () => {
    const {data:users} =useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
    return (
        <div>
            <h1>User All</h1>
        </div>
    );
};

export default User;