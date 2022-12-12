import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Products from './Products';
import ComputerParts from './ComputerParts';
import AllReviews from './AllReviews ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br/>
            <br/>
            <br/>
            <Info></Info>
            <Products></Products>
            <ComputerParts></ComputerParts>
            <AllReviews></AllReviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;