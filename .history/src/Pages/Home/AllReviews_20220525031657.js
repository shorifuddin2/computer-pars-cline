import React, { useEffect, useState } from 'react';
import Review from '';
const AllReview = () => {

    const[review,setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=> setReview(data));
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
        <div className='my-28'>
        <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Cline Reviews</h3>
           
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                review.map(review =><review
                    key={review._id}
                    product={review}
                ></review>) 
            }
            
        </div>
        </div>
    );
};

export default AllReview;