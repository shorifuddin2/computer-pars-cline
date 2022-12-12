import React, { useEffect, useState } from 'react';
import quote from '../../assets/icons/quote.svg';
import Review from '../Home/Review';
const AllReviews = () => {

    const[reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://serene-scrubland-85143.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=> setReviews(data));
    },[]);
    
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-3xl text-primary font-bold">Cline Review</h4>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default AllReviews;