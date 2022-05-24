import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id,img,name,price,quantity, discretion} = useParams();
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                {}
                <img src={product?.img} alt="Product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {product.name}</h2>
                <h2 className="card-title">Price: ${product.price}</h2>
                <h2 className="card-title">quantity: {product.quantity}</h2>
                <p>Description{product.description}</p>
                 <button className='btn btn-primary' onClick={() => ProductDetail(product._id)}>Perches</button> 
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;