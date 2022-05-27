import React from 'react';
import {useQuery} from 'react-query'

const User = () => {
    const {data:users} = useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
    return (
        <div>
            <h1>Users:</h1>
        </div>
    );
};

export default User;