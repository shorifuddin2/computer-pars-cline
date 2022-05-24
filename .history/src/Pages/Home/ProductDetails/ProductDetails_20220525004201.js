import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useSingleProduct from '../../Shared/useSingleProduct';

const ProductDetails = () => {

    const{id} = useParams();
    
    //  const[parches,setParches] = useState(1);
    //  const[product,setProduct] = useSingleProduct(id)

    // const parchesInput = (event)=>{
    //   setParches(event.target.value)
    // }
    // const navigate = useNavigate();
    //  console.log(product)
    // const parchesButton = ()=>{
    //     const url =`http://localhost:5000/Product/${id}`;
    //     fetch(url,{
    //         method : 'PUT',
    //         headers : {
    //             'content-type' : 'application/json'
    //         },
    //         body : JSON.stringify({parches})
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //       if(data.matchedCount > 0){
    //         const url = `http://localhost:5000/Product/${id}`;
    //         fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProduct(data));
            
    //       }
    //     })

    const {img,name,price,quantity, description} = useParams();
    return (
        <div className="card lg:max-w-lg bg-base-500 bg-slate-400 shadow-xl">
            <figure className="px-10 pt-10">
                {id}
                <img src={img} alt="Product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {product.name}</h2>
                <h2 className="card-title">Price: ${product.price}</h2>
                <h2 className="card-title">quantity: {product.quantity}</h2>
                <p>Description{product.description}</p>
                

                {/* <input className='w-25 mx-3' onBlur={parchesInput} type="number" name="" required id="" />
                  <button className='w-25 mx-3 btn btn-primary my-1' onClick={parchesButton} >Parches</button> */}
            </div>
        </div>
        
    );
};

export default ProductDetails;