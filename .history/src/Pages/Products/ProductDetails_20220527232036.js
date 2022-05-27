import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSingleProduct from '../Shared/useSingleProduct'



const Update = () => {
    const { id } = useParams();
    // const [restock, setReStock] = useState(1);
    const [product, setProduct] = useState(id)



    useEffect(() => {
        fetch(`http://localhost:5000/products/${}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
       console.log(product)



    // const stockInput = (event) => {
    //     setReStock(event.target.value)
    // }
    // const navigate = useNavigate();
    // // console.log(product)
    // const stockButton = () => {


    //     const url = `http://localhost:5000/product/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ restock })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.matchedCount > 0) {
    //                 const url = `http://localhost:5000/product/${id}`;
    //                 fetch(url)
    //                     .then(res => res.json())
    //                     .then(data => setProduct(data));

    //             }
    //         })
    // }
    
    return (
        <div className='flex'>

            <div class="card w-96 mx-auto bg-base-100 shadow-xl">
                <figure><img src={id} alt="Image" /></figure>
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
                    <h1>Purchase Form</h1>
                    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Update;

