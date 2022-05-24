
import React from 'react';import { Button, Form, Placeholder } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddReview = () => {
  
  const {register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) =>{
    const url = `http://localhost:5000/reviews`
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
          <h1 className='text-center'>Add Review</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input className='w-full p-2 my-2 rounded' {...register('name')}Placeholder="name" required/>
          <br/>
          <input className='w-full p-2 my-2 rounded'{...register('quantity')} Placeholder="Quantity" required/>
          <br/>
          <input className='w-full p-2 my-2 rounded'{...register('image' )} Placeholder="Image" required/>
          <br/>
          <input className='w-full p-5 my-2 rounded'{...register('description' )} Placeholder="Description" required/>
          <br/>
          <input className='bg-primary my-3 px-5 py-3 rounded' type="Add Review" />
        </form>
        </div>
      );
    };

export default AddReview;