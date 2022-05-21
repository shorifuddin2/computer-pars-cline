import React from 'react';
import chair from '../../assets/images/chair.png';
// import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src='https://uploads-ssl.webflow.com/62310c1b75501a83aed75dbf/625320e3618fdec27013fbaa_623bcb6002def0f166fdaf92_lian-li-lancool-ii-mesh-rgb-case-removebg(2)-p-500(1).png' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;