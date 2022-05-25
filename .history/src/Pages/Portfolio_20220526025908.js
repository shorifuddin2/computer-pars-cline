import React from 'react';
import image from '../assets/images/milon-3.png'

const Portfolio = () => {
    return (
        <div>
            <div class=" card lg:card-side  bg-orange-300 shadow-xl">
                <figure><img className='' src={image} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-primary text-4xl">This is Shorif Uddin</h2>
                    <p className='w-80 text-1xl'>I'm Proportional Full Stack Web Developer.My profession is heard worked coding.2022 year Full Stack Project in the website bootstrap,tailwind, react bootstrap, es6, react router, firebase, mongodb, node js, heroku,express js. etc my product building very awesome  locking for  website.</p>
                    <div className='card-body'>
                        <h1 className='text-3xl'>Present Address</h1>
                        <h2>Email: shorifuddin240915@gmail.com</h2>
                        <h2>District: Habiganj Sadar, Sylhet</h2>
                        <h2>Nationality: Bangladeshi</h2>
                        <h2>Phone: +08801923-062919</h2>
                    </div>

                </div>
            </div>

            <div className="in card w-full bg-base-100 shadow-xl">
            <div class="card w-96 glass">
                <figure><img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 glass">
                <figure><img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 glass">
                <figure><img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;