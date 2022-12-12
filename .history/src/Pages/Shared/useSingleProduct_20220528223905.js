import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';

const useSingleProduct = (id) => {
    const[product,setProduct] = useState({});

    useEffect(()=>{
        const url = `https://computer-parts-server.onrender.com/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
        
    },[product]);
    return[Product,setProduct];
}

export default useSingleProduct;