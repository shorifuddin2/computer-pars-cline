import React from 'react';
import InfoCard from './InfoCard';
import ram from '../../assets/icons/ram.svg';
import powersupp from '../../assets/icons/ps.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={ram}></InfoCard>
            <InfoCard cardTitle="Our Locations" bgClass="bg-neutral" img={powersupply}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;