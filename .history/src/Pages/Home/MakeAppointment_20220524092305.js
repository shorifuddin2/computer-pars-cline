import React from 'react';
import doctor from '../../assets/images/Prosesor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Computer = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='my-[100px] mx-5' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5 mx-5'>
                <h3 className='text-xl text-primary font-bold'>Processor</h3>
                <h2 className='text-3xl text-white py-5'>Our Processor Computer</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;