import React, { useEffect, useState } from 'react';

import Review from './Review';
const AllReview = () => {


    const[review,setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data));
    },[]);

    // const reviews = [
    //     {
    //         _id:1,
    //         name: 'Winson Herry',
    //         review: 'this product assome',
    //         location: 'california',
    //         img: "people1"
    //     },
    //     {
    //         _id:2,
    //         name: 'Winson Herry',
    //         review: '',
    //         location: 'california',
    //         img: people2
    //     },
    //     {
    //         _id:3,
    //         name: 'Winson Herry',
    //         review: '',
    //         location: 'california',
    //         img: people3
    //     },
    // ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-3xl text-primary font-bold text-center">Cline Review</h4>
                    
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default AllReview;