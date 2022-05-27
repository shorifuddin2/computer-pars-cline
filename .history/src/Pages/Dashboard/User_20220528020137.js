import React from 'react';
import {useQuery} from 'react-query'
import Loading from '../Shared/Loading'

const User = () => {
    const {data: users, isLoading} = useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl'>All Users: {users.length}</h1>
        </div>
    );
};

export default User;