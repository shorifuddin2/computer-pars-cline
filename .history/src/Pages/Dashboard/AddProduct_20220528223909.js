
import React from 'react';import { Button, Form, Placeholder } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  
  const {register,handleSubmit,} = useForm();
  const onSubmit = (data) =>{
    console.log(data)
    const url = `https://computer-parts-server.onrender.com/product`
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
        
        <div className='w-50 bg-primary mx-auto p-5 Larger shadow rounded my-5'>
            <h2 className='text-center text-3xl font-bold'>This Add Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <br/>
          <input className='w-full p-2 my-2 rounded' {...register('name')}Placeholder="name" required/>
          <br/>
          <input className='w-full p-2 my-2 rounded' {...register('price')} Placeholder="price" required/>
    
          <br/>
          <input className='w-full p-2 my-2 rounded'{...register('Stock')} Placeholder="Stock" required/>
          <br/>
          <input className='w-full p-2 my-2 rounded'{...register('image' )} Placeholder="Image Url" required/>
          <br/>
          <input className='w-full p-5 my-2 rounded'{...register('description' )} Placeholder="Description" required/>
          <br/>
          <input className='btn btn-secondary my-3 px-5 py-3 rounded' type="submit" />
        </form>
        </div>
      );
    };

export default AddProduct;