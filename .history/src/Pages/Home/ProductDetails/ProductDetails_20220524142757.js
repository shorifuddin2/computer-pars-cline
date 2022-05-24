import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = ({product}) => {
    const {id ,img,} = useParams();
    return (
        <div>
            <h2>Welcome to Perches: {id}</h2>
            <div className='text-center'>
            
                <Link to="/ProductDetails">

                    <button className='btn btn-primary'>Perches</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;