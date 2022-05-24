import React, { useEffect, useState } from 'react';
import Review from './Review';
const AllReview = () => {

    const[re,setProduct] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=> setProduct(data));
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
            <h3 className='text-primary  text-xl font-bold uppercase'>Our Product</h3>
           
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                
                product.map(product =><Product
                    key={product._id}
                    product={product}
                ></Product>)

                 
            }
            
        </div>
        </div>
    );
};

export default AllReview;