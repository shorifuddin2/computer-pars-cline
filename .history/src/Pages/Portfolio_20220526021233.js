import React from 'react';
import image from '../assets/images/milon-3.png'

const Portfolio = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">This is Shorif Uddin</h2>
                <p>I'm Proportional Full Stack Web Developer.My profession is heard worked coding.2022 year Full Stack Project in the website bootstrap, react bootstrap, es6, react router, firebase, mongodb, node js, heroko</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;