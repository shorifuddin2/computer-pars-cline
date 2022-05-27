import React from 'react';

const InfoCard = ({img, ratting, cardTitle, bgClass}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img className='w-20' src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <h1 className='text-primary font-bold text-5xl'>{ratting}</h1>
            </div>
        </div>
    );
};

export default InfoCard;