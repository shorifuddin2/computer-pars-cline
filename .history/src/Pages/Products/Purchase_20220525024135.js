import React from 'react';



const Purchase = () => {
    
    
    return (
        <div className='my-28'>
        <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Our Product</h3>
           
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                
                product.map(product =><Product
                    key={product._id}
                    product={product}
                ></Product>)

                 
            }
            
        </div>
        </div>
    );
};

export default Purchase;