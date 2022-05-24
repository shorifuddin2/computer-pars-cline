import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = ({product}) => {
    
    const {img,name,price,quantity} = useParams();
    return (
        <div>
            
            <div className='text-center'>
            <h2>Welcome to Perches</h2>
            <img src={img}></img>
            <h2>Name: {name}</h2>
            <h2>Name: ${price}</h2>
            <p>Quantity: {product.quantity}</p>
            {/* <input className='w-25 mx-3' onBlur={stockInput} type="number" name="" required id="" />
                  <button className='w-25 mx-3 btn btn-primary my-1' onClick={stockButton} >Parches</button> */}
            </div>
        </div>
    );
};

export default ProductDetails;