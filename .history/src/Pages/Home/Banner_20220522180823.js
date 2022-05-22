import React from 'react';
import computer from '../../assets/images/computer.png';
import PrimaryButton from '../Shared/PrimaryButton';

// https://i.ibb.co/pwr0zg0/banner1.webp
// https://i.ibb.co/m4ZgTs6/benner-2.webp
// https://i.ibb.co/q0VqdHg/benner-3.jpg
// https://i.ibb.co/NmL8fz9/benner-4.jpg

const Banner = () => {
    return (
        <div className='h-'>
            <div class="carousel w-full ">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/pwr0zg0/banner1.webp" class="w-full"/> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/m4ZgTs6/benner-2.webp" class="w-full"/> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  {/* <div id="slide3" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/q0VqdHg/benner-3.jpg" class="w-full"/> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/NmL8fz9/benner-4.jpg" class="w-full"/> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div> */}
</div>
        </div>
    );
};

export default Banner;