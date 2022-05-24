import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './ComputerParts';
import Products from './Products';
import AllReviews from './AllReviews';
import ComputerParts from './ComputerParts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Products></Products>
            <ComputerParts></ComputerParts>
            <></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;