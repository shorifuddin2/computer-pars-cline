
import React from 'react';import { Button, Form, Placeholder } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) =>{
    const url = `http://localhost:5000/product`
    fetch(url, {
      method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
    })

    .then(res => res.json)
    .then(result => {
      alert('product error successfully', result)
    })
  };
    return (
        
        <div className='w-50 bg-slate-400 mx-auto p-5 Larger shadow rounded-3 my-5'>
            <h2 className='text-center'>This Add Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input className='w-full p-2 my-2 rounded' {...register('email')}Placeholder="email" required/>
          <br/>
          <input className='w-full p-2 my-2 rounded' {...register('name')}Placeholder="name" required/>
          <br/>
          <input className='w-full p-2 my-2 rounded' {...register('price')} Placeholder="price" required/>
          <br/>
          <input className='w-full p-2 my-2 rounded'{...register('sold')} Placeholder="Sold" required/>
          <br/>
          <input className='w-full p-2 my-2 rounded'{...register('quantity')} Placeholder="Quantity" required/>
          <br/>
          <input className='w-full p-2 my-2 rounded'{...register('image' )} Placeholder="Image" required/>
          <br/>
          <input className='w-full p-2 my-2 rounded'{...register('delivery')} Placeholder="Delivery" required/>
          <br/>
          <input className='w-full p-5 my-2 rounded'{...register('description' )} Placeholder="Description" required/>
          <br/>
          <input className='bg-primary my-3 px-5 py-3 rounded' type="submit" />
        </form>
        </div>
      );
    };

export default AddProduct;