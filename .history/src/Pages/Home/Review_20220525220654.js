import React from 'react';

const Review = ({ reviews }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia!</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={reviews?.image} alt="R"/>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{reviews?.name}</h4>
                        <h4 className='text-xl'>{reviews?.review}</h4>
                        <p>{reviews?.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;