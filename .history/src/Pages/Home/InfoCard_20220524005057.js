import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
         <div >
            {/* <figure className='pl-5 pt-5 '>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Computer parts.</p>
            </div> */}


<div class="stats shadow w-full">
  
  <div class="stat">
    <div class="stat-figure text-primary ">
      <div>
         <img className='w'  src={img}/>
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