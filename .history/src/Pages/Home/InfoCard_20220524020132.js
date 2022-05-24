import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
          <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            {/* <figure className='pl-5 pt-5 '>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Computer parts.</p>
            </div> */}


<div class="">
  
  <div class="stat">
 
    <div className="stat-figure text-primary ">
    <img className='ml-20 w-1/2' src={img} alt="Album" />
    </div>
    <div className="text-white">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div classNa="text-white w-full">21% more than last month</div>
    
  </div>
  
  
  
</div>
        </div>
    );
};

export default InfoCard;