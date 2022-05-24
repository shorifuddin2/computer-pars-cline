import React from 'react';
import { Navigate } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const Product = ({Product}) => {

const ProductDetail = _id =>{
    Navigate(`/Product/${_id}`);
//  }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={Product.img} alt="Product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {Product.name}</h2>
                <h2 className="card-title">Price: ${Product.price}</h2>
                <h2 className="card-title">quantity: ${Product.quantity}</h2>
                <p>Description{Product.description}</p>
                <PrimaryButton>Perches</PrimaryButton>
                 <PrimaryButton onClick={() => ProductDetail(id)}>Perches</PrimaryButton> 
            </div>
        </div>
    );
};

export default Product;