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

<div class="stats shadow">
  
  <div class="stat place-items-center">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
    
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Users</div>
   
    
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">New Registers</div>
    <div class="stat-value">1,200</div>
   
  </div>
  
</div>
        </div>
    );
};

export default InfoCard;