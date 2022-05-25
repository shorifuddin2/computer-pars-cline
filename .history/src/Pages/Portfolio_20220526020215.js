import React from 'react';
import image from '../assets/images/milon-3.png'

const Portfolio = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title"></h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;