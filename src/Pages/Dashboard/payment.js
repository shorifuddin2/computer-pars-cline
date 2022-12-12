import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Booking from './Booking';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LlR3kCVTQ8yjUgJQGPeeTTuxnZb4AWDihh6YPa4ddTQcM0nLSaKUVGD2RsYvMLNhtVAk6kTQSjYP5mbTBQ1ATM600UzmsX73n');

const Payment = () => {
    const { id } = useParams();
    const url = `https://computer-parts-server.onrender.com/booking/${id}`;

    const { data: booking, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello,{booking?.userName}</p>
                    <h2 class="card-title">Please Pay for Product</h2>
                    <p>Your product: <span className='text-orange-700'>{booking?.name}</span> at {booking.slot}</p>
                    <p>Please pay: ${booking?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={Booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;