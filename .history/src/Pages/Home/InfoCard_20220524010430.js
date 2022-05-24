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
 
    <div class="stat-figure text-primary d">
    
    </div>
    <div class="text-white">Total Likes</div>
    <div class="stat-value text-primary">25.6K</div>
    <div class="text-white">21% more than last month</div>
    
  </div>
  <img className='ml-14 w-1/2' src={img} alt="Album" />
  
  
</div>
        </div>
    );
};

export default InfoCard;