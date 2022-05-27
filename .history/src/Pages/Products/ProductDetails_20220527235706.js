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
        phone: e.target.phone.value,
        address: e.target.address.value,
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
                    <form onSubmit={handleSubmit} className='w'>

                                    <div className="mb-6">
                                        <input type="text" value={product.name} readOnly disabled id="text" className="uppercase shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" required />
                                    </div>

                                    <div className="mb-6">
                                        <input type="text" name='phone' id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Your Phone Number' required />
                                    </div>
                                    <div className="mb-6">
                                        <input type="text"  name='orderQuantity' id="text" className="uppercase shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Minimum Order' required />
                                    </div>
                                    <div className="mb-6">
                                        <input type="text" name='address' id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Your Address' required />
                                    </div>
                                    <button disabled={} type="submit" className="text-white bg-success uppercase font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order Now</button>
                                </form>
                </div>
            </div>

        </div>
    );
};

export default Update;

