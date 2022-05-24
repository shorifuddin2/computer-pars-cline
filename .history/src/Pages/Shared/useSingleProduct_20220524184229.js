import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';

const useSingleProduct = (id) => {
    const[product,set] = useState({});

    useEffect(()=>{
        const url = `https://mysterious-ridge-40298.herokuapp.com/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
        
    },[service]);
    return[Product,setProduct];
}

export default useSingleProduct;