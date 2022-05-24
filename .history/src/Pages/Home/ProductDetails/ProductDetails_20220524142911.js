import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = ({product}) => {
    const {img,name,price,quantity} = useParams();
    return (
        <div>
            
            <div className='text-center'>
            
                <Link to="/ProductDetails">

                    <button className='btn btn-primary'>Perches</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;