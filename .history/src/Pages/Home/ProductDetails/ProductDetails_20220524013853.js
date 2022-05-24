import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { ProductId } = useParams();
    return (
        <div>
            <h2>Welcome to detail: {ProductId}</h2>
            <div className='text-center'>
                <Link to="/percher">
                    <button className='btn btn-primary'>Perches</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;