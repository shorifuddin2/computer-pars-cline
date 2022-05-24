import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id,img,name,price,quantity, discretion} = useParams();
    return (
        <div>
            <h1>Welcome to Perches</h2>
            <div className='text-center'>
                <p>{id}</p>
                <img src={img}></img>
                <h1>Name: {name}</h1>
                <h2>Price: {price}</h2>
                <h3>Quantity: {quantity}</h3>
                <p>Description: {discretion}</p>
                <Link to="/ProductDetails">
                    <button className='btn btn-primary'>Perches</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;