import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';






const Update = () => {
    const { id } = useParams();
    const [user, loading, userError] = useAuthState(auth);
    const [product, setProduct] = useState(id)



    useEffect(() => {
        fetch(`https://serene-scrubland-85143.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    //    console.log(product)



 
 const handleSubmit = e=>{
    e.preventDefault()
    const items = {
        image: product?.image,
        email: user?.email,
        userName: user?.displayName,
        productId: product.productId,
        name: product.name,
        price: product.price,
        phone: e.target.phone.value,
        address: e.target.address.value,
        orderQuantity: e.target.orderQuantity.value
    }

    fetch('https://serene-scrubland-85143.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        }
        )
            .then(res => res.json())
            .then(result => {
                // navigate('/dashboard/booking')
                console.log(result);
                e.target.reset();
                // toast.success('Order Successfully')
            })
 }
    
    return (
        <div className='flex'>

            <div class="card w-96 mx-auto bg-base-100 shadow-xl">
                <figure><img src={product.image} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name: {product.name}</h2>
                    <h2 class="card-title">Price: {product.price}</h2>
                    <p class="card-title">Stock: {product.Stock}</p>
                    <p>Description: {product.description}</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-2xl'>Purchase Form</h1>
                    <form onSubmit={handleSubmit} className=''>
                    <img className='w-40 h-40 mx-auto' src={product.image} alt=""/>
                    <input type="text" placeholder={user.email}disabled class="input input-bordered input-primary w-full text-red-500 max-w-xs" />
                    <br/>
                    <br/>
                    <input type="text" placeholder={user.displayName} disabled class="input input-bordered input-primary w-full text-red-500 max-w-xs" />
                    <br/>
                    <br/>
                    <input type="text" placeholder="Phone" name="phone" class="input input-bordered input-primary w-full max-w-xs" />
                    <br/>
                    <br/>
                    <input type="text" placeholder="Address" name="address" class="input input-bordered input-primary w-full max-w-xs" />
                    <br/>
                    <br/>
                    <input type="text" placeholder="orderQuantity" name="orderQuantity" class="input input-bordered input-primary w-full max-w-xs" />
                    <br/>
                    <br/>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" type='submit'>Booking Now</button>
                    </div>
                
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Update;

