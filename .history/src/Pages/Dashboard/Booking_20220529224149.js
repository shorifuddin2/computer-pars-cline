import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'


const Booking = () => {

    
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    // console.log(user)
    const email = user?.email;
    const { data: booking, refetch,isLoading } = useQuery(['booking',email ], () => {
        return fetch(`https://evening-ocean-37550.herokuapp.com/boki${user?.email}`)
            .then(res => res.json());
            
    })
    refetch()
    console.log(booking)
        if(isLoading){
            return <Loading></Loading>
        }
        

    return (
        <div>
            <h2>Parches Product: {booking?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>price</th>
                            <th>quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking?.map((p,index) =><tr>
                                <th>{index + 1}</th>
                                <td>{p?.name}</td>
                                <td>{p?.price}</td>
                                <td>{p?.quantity}</td>
                                
                            </tr>)
                            
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;