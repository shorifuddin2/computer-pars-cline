import React, { useEffect, useState } from 'react';
import Product from '../Home/';


const Purchase = () => {
    const[product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=> setProduct(data));
    },[]);
    
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

export default Purchase;