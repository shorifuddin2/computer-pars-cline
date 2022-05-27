import React from 'react';
import Prosesor from '../../assets/images/Prosesor.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ComputerParts = () => {
    return (
        <section style={{
            // background: `url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='my-[100px] mx-5' src={Prosesor} alt="" />
            </div>
            <div className='flex-1 px-5 mx-5'>
                <h3 className='text-xl text-primary font-bold'>Processor</h3>
                <h2 className='text-3xl  py-5'>Our Processor Computer</h2>
                <p className=' pb-5'>Prosessoren eller Central Processing Unit (CPU) er hjernen i datamaskinen, og står for de aller fleste beregningene som foregår i en PC og som gjør at den fungerer. Intel og AMD er de store produsentene på markedet. Hva du foretrekker er en smakssak, AMD er generelt gode på media, mens Intel er noe kraftigere. Vi har CPU med ulike klokkehastigheter og internminne i alle prisklasser, finn den som er kompatibel med ditt hovedkort og din socket.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </section>
    );
};

export default ComputerParts;