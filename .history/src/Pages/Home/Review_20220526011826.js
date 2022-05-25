import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>We like to get our hands on all the latest tech and peripherals, so we're always reviewing something. See how they stack up with our hands-on reviews. </p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="Image" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review?.name}</h4>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h4 className='text-xl'>{review?.review}</h4>
                        <p>{review?.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;