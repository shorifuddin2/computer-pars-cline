import React, { useEffect, useState } from 'react';
import Review from '../Home/Review';
const AllReview = () => {

    // const[review,setReview] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/review')
    //     .then(res=>res.json())
    //     .then(data=> setReview(data));
    // },[]);

    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: 'this product assome',
            location: 'california',
            img: "people1"
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: 'this product assome',
            location: 'california',
            imag: "people2"
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: 'this product assome',
            location: 'california',
            image: "people3"
        },
    ];
    return (
        <div className='my-28'>
        <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Cline Reviews</h3>
           
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                reviews.map(reviews =><Review
                    key={reviews._id}
                    product={reviews}
                ></Review>) 
            }
            
        </div>
        </div>
    );
};

export default AllReview;