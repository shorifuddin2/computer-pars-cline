import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = ({product}) => {
    const {img,name,price,quantity} = useParams();
    return (
        <div>
            
            <div className='text-center'>
            <h2>Welcome to Perches</h2>
            <img src={product.img}></img>
            <h2>Name: {product.name}</h2>
            <h2>Name: ${price.product}</h2>
            <p>Quantity: {product.quantity}</p>
                <Link to="/ProductDetails">

                    <button className='btn btn-primary'>Perches</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;