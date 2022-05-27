import React from 'react';
import { navigate, useNavigate } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const Product = ({product}) => {

const navigate = useNavigate();
const ProductDetail = id =>{
    console.log(id)
    navigate(`/parches/${id}`);
 }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.image} alt="Product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {product.name}</h2>
                <h2 className="card-title">Price: ${product.price}</h2>
                <h2 className="card-title">Stock: {product.Stock}</h2>
                <p className="card-description">Description: {product.description}</p>
                 <button className='btn btn-primary' onClick={() => ProductDetail(product._id)}>Buy Now </button> 
            </div>
        </div>
    );
};

export default Product;