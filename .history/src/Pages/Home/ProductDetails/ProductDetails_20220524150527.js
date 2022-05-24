import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id,img,name,price,quantity, description} = useParams();
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                {id}
                <img src={img} alt="Product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="card-title">Price: ${price}</h2>
                <h2 className="card-title">quantity: {quantity}</h2>
                <p>Description{description}</p>
                <input/>
                <button>Parseches</button>
            </div>
        </div>
        
    );
};

export default ProductDetails;