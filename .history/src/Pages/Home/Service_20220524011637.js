import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({service}) => {

// }
//  const navigate = useNavigate()
// // const handleUpdate = (id) => {
//  navigate( `/product/${id}`)
//  }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {service.name}</h2>
                <h2 className="card-title">Price: ${service.price}</h2>
                <h2 className="card-title">quantity: ${service.quantity}</h2>
                <p>Description{service.description}</p>
                <PrimaryButton onClick={() => navigateToServiceDetail(id)}>Perches</PrimaryButton>
            </div>
        </div>
    );
};

export default Service;