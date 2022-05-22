import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({service}) => {

}
 const navigate = useNavigate()
 const handleUpdate = (id) => {
 navigate( `/product/${id}`)
 }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {service.name}</h2>
                <h2 className="card-title">Price: ${service.price}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Button  className='btn btn-primary' onClick={() => handleUpdate(product._id)}>Update</utton>
            </div>
        </div>
    );
};

export default Service;