import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import UserRow from './UserRow';



const User = () => {
    const { data: users, isLoading ,refetch} = useQuery('users', () => fetch('https://computer-parts-server.onrender.com/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(users)
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                {
                        users.map((user,index) => <UserRow
                            key={user._id}
                            user={user}
                            index= {index}
                        >
                            refetch={refetch}
                        </UserRow>)
                    }
                </tbody>
            </table>
            
        </div>



    );
};

export default User;