import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import UserRow from './UserRow';


const User = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl'>All Users: {users.length}</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            users.map(user=><UserRow>
                                key={user._id}
                                user={user}
                            </UserRow>)
                        }
                        </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;