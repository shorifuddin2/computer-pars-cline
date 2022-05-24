import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const Product = ({product}) => {

const navigate = useNavigate();
const ProductDetail = id =>{
    console.log(id)
    navigate(`/Product/${id}`);
 }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product?.img} alt="Product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {product.name}</h2>
                <h2 className="card-title">Price: ${product.price}</h2>
                <h2 className="card-title">quantity: {product.quantity}</h2>
                <p>Description{product.description}</p>
                 <button className='bg-pri' onClick={() => ProductDetail(product._id)}>Perches</button> 
            </div>
        </div>
    );
};

export default Product;