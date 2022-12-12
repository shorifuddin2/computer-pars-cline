import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {


    const[product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('https://computer-parts-server.onrender.com/product')
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
                    
                    product.slice(0,6).map(product =><Product
                        key={product._id}
                        product={product}
                    ></Product>)

                     
                }
                
            </div>
            </div>
        
    );
};

export default Products;