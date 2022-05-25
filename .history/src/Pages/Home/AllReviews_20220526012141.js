import React, { useEffect, useState } from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
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
            image: "people1"
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: 'this product assome',
            location: 'california',
            image: "people2"
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: 'this product assome',
            location: 'california',
            image: people3
        },
    ];
    return (
        <div className='my-28'>
        <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Cline Reviews</h3>
           
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                reviews.map(review =><Review
                    key={review._id}
                    product={review}
                ></Review>) 
            }
            
        </div>
        </div>
    );
};

export default AllReview;