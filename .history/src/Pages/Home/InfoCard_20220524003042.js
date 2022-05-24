import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        // <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            {/* <figure className='pl-5 pt-5 '>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Computer parts.</p>
            </div> */}


<div class="stats shadow">
  
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">Total Likes</div>
    <div class="stat-value text-primary">25.6K</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  
  
</div>
        </div>
    );
};

export default InfoCard;