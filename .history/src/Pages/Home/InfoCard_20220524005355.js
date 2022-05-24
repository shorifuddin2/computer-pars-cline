import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
         <div >
          
<div class="stats shadow w-full {}">
  
  <div class="stat">
    <div class="stat-figure text-primary ">
      <div>
         <img className='w-1/2 ml-9'  src={img}/>
      </div>
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