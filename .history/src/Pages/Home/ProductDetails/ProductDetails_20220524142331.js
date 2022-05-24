import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = ({product}) => {
    const {id } = useParams();
    return (
        <div>
            <h2>Welcome to Perches: {id}</h2>
            <div className='text-center'>
            <h2 className="card-title">Name: {product.name}</h2>
                <h2 className="card-title">Price: ${product.price}</h2>
                <h2 className="card-title">quantity: {product.quantity}</h2>
                <p>Description{product.description}</p>
                <Link to="/ProductDetails">

                    <button className='btn btn-primary'>Perches</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;