import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id,name} = useParams();
    return (
        <div>
            <h2>Welcome to Perches</h2>
            <div className='text-center'>
                <p>{id}</p>
                <h1>Name: {name}</h1>
                <h1>Name: {price}</h1>
                <h1>Name: {name}</h1>
                <Link to="/ProductDetails">
                    <button className='btn btn-primary'>Perches</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;