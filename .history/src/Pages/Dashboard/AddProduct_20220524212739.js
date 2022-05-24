
import React from 'react';import { Button, Form, Placeholder } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) =>{
    const url = `https://mysterious-ridge-40298.herokuapp.com/product`
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
        
        <div className='w-50 bg-danger mx-auto p-5 Larger shadow rounded-3 my-5'>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input className='' {...register('email')}Placeholder="email" required/>
          <br/>
          <input className='' {...register('name')}Placeholder="name" required/>
          <br/>
          <input className='' {...register('price')} Placeholder="price" required/>
          <br/>
          <input className=''{...register('sold')} Placeholder="Sold" required/>
          <br/>
          <input className=''{...register('quantity')} Placeholder="Quantity" required/>
          <br/>
          <input className=''{...register('image' )} Placeholder="Image" required/>
          <br/>
          <input className=''{...register('delivery')} Placeholder="Delivery" required/>
          <br/>
          <input className='w-100 p-5 my-2 rounded-3'{...register('description' )} Placeholder="Description" required/>
          <br/>
          <input className='text-primary my-3 rounded-3 bg-info' type="submit" />
        </form>
        </div>
      );
    };

export default AddProduct;