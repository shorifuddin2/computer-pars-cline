import React from 'react';

const User = () => {
    const {data:us} =useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
    return (
        <div>
            <h1>User All</h1>
        </div>
    );
};

export default User;