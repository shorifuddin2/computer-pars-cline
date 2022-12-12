import React from 'react';

// https://i.ibb.co/pwr0zg0/banner1.webp
// https://i.ibb.co/m4ZgTs6/benner-2.webp
// https://i.ibb.co/q0VqdHg/benner-3.jpg
// https://i.ibb.co/NmL8fz9/benner-4.jpg
// https://i.ibb.co/HC6pNV4/banner1.webp
// https://i.ibb.co/bdyyvLD/benner-2.webp
const Banner = () => {
    return (
        <div className='h-100vh'>
            <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4Z17jG1/img-1.jpg" className="w-full h-[600px]"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/BtS33xc/img-2.jpg" className="w-full h-[600px]"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
   <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/3C1TbQy/img-3.jpg" className="w-full h-[600px]"/> / 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Ws3h9xj/img-4.jpg" className="w-full h-[600px]"/> / 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

/* https://i.ibb.co/4Z17jG1/img-1.jpg
https://i.ibb.co/BtS33xc/img-2.jpg
https://i.ibb.co/3C1TbQy/img-3.jpg
https://i.ibb.co/Ws3h9xj/img-4.jpg
https://i.ibb.co/w0pfH5k/img-5.jpg
https://i.ibb.co/tsxdjVB/img-6.jpg
https://i.ibb.co/JFFwC5N/img-7.jpg
https://i.ibb.co/nRJZd56/img-8.jpg
https://i.ibb.co/w0j6H0G/img-9.jpg
*/

export default Banner;