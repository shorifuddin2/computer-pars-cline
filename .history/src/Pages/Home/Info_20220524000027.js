import React from 'react';
import InfoCard from './InfoCard';
import ram from '../../assets/icons/ram.png';
import powerSupply from '../../assets/icons/ps.png';
import processor from '../../assets/icons/processor.png';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
            <InfoCard cardTitle="parts of ram" bgClass="bg-gradient-to-r from-secondary to-primary w-2/1 h-" img={ram}></InfoCard>
            <InfoCard cardTitle="parts of power supply" bgClass="bg-neutral" img={powerSupply}></InfoCard>
            <InfoCard cardTitle="parts of processor " bgClass="bg-gradient-to-r from-secondary to-primary " img={processor}></InfoCard>
        </div>
    );
};

export default Info;