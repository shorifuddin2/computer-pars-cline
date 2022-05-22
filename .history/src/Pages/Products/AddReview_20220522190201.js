import React from 'react';

const AddReview = () => {
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddReview;