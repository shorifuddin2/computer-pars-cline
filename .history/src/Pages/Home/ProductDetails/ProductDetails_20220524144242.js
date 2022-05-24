import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id } = useParams();
    return (
        <div>
            <h2>Welcome to Perches</h2>
            <div className='text-center'>
                <h1>Name: </h1>
                <Link to="/ProductDetails">
                    <button className='btn btn-primary'>Perches</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;