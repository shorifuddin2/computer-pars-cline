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
    
    const { data: product, refetch,isLoading } = useQuery(['product',user?.email ], () => {
        return fetch(`https://computer-parts-server.onrender.com/booking?email=${user?.email}`)
            .then(res => res.json());        
    })
    console.log(product)
        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div>
            <h2>Parches Product: {product?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product?.map((p,index) =><tr>
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