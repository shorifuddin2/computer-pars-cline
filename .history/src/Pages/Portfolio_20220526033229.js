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

            <div className='grid grid-cols-3 gap-8 card bg-orange-200 shadow-2xl p-5'>
                    <h1>This is My Best website</h1>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline"><a href=''>Server side github Link</a></div>
                            <div class="badge badge-outline">Products</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;