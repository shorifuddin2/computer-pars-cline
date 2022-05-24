import React from 'react';
import InfoCard from './InfoCard';
import ram from '../../assets/icons/ram.png';
import powerSupply from '../../assets/icons/ps.png';
import processor from '../../assets/icons/processor.png';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary  h-2/3" img={ram}></InfoCard>
            <InfoCard cardTitle="Our Locations" bgClass="bg-neutral h-2/3" img={powerSupply}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary h-2/" img={processor}></InfoCard>
        </div>
    );
};

export default Info;