import React from 'react';
import { Navigate } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const Product = ({Products}) => {

const navigateToProductDetail = _id =>{
    Navigate(`/Products/${_id}`);
 }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={Products.img} alt="Product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {Products.name}</h2>
                <h2 className="card-title">Price: ${Products.price}</h2>
                <h2 className="card-title">quantity: ${Products.quantity}</h2>
                <p>Description{Products.description}</p>
                
                 {/* <PrimaryButton onClick={() => navigateToProductDetail(_id)}>Perches</PrimaryButton>  */}
            </div>
        </div>
    );
};

export default Product;