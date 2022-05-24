import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Products from './Products';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Products></Products>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;