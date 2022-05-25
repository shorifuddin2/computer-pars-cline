import React from 'react';
import image from '../assets/images/milon-3.png'

const Portfolio = () => {
    return (
        <div class=" card lg:card-side  bg-orange-300 shadow-xl">
            <figure><img className='' src={image} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title text-primary text-4xl">This is Shorif Uddin</h2>
                <p className='w-80 text-1xl'>I'm Proportional Full Stack Web Developer.My profession is heard worked coding.2022 year Full Stack Project in the website bootstrap,tailwind, react bootstrap, es6, react router, firebase, mongodb, node js, heroku,express js. etc </p>
                <div class="">
                    <h3>My </h3>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;