import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useSingleProduct from '../Shared/useSingleProduct'





const Update = () => {
    const { id } = useParams();
    const [user, loading, userError] = useAuthState(auth);
    const [product, setProduct] = useState(id)



    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    //    console.log(product)
 const handleSubmit = e=>{
    e.preventDefault()
    const items = {
        email: user?.email,
        userName: user?.displayName,
        price: product.price,
        name: product.name,
        stock: product.stock,
    }
    fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        }
        )
            .then(res => res.json())
            .then(result => {
                // navigate('/dashboard/myorder')
                console.log(result);
                e.target.reset();
                // toast.success('Order Successfully')
            })
 }
    
    return (
        <div className='flex'>

            <div class="card w-96 mx-auto bg-base-100 shadow-xl">
                <figure><img src={product.image} alt="Image" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name: {product.name}</h2>
                    <h2 class="card-title">Price: {product.price}</h2>
                    <p>Description: {product.description}</p>
                    <p>Stock: {product.stock}</p>
                    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Oder Now</button>
                    </div>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-2xl'>Purchase Form</h1>
                    
                </div>
            </div>

        </div>
    );
};

export default Update;

