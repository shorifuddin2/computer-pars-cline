import React from 'react';
import {useQuery} from 'react-query'

const User = () => {
    const {data: users, isLoading} = useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
    return (
        <div>
            <h1>All Users: {users.length}</h1>
        </div>
    );
};

export default User;