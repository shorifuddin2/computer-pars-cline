import React from 'react';
import InfoCard from './InfoCard';
import Cline from '../../assets/icons/cline.png';
import Global from '../../assets/icons/global.png';
import Review from '../../assets/icons/reviews.png';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard ratting="100+" cardTitle="Cline" bgClass="bg-gradient-to-r from-secondary to-primary" img={Cline}></InfoCard>
            <InfoCard ratting="400+" cardTitle="Global" bgClass="bg-neutral" img={Global}></InfoCard>
            <InfoCard ratting="500+" cardTitle="Review" bgClass="bg-gradient-to-r from-secondary to-primary" img={Review}></InfoCard>
        </div>
    );
};

export default Info;