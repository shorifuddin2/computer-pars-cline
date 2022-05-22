import React, { useState } from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {


    // const[service,setService] = useState([]);
    // useEffect(()=>{
    //     fetch('https://mysterious-ridge-40298.herokuapp.com/product')
    //     .then(res=>res.json())
    //     .then(data=> setServices(data));
    // },[]);


    // const services = [
    //     {
    //         _id: 1,
    //         name: 'Fluoride Treatment',
    //         description: '',
    //         img: fluoride
    //     },
    //     {
    //         _id: 2,
    //         name: 'Cavity Filling',
    //         description: '',
    //         img: cavity
    //     },
    //     {
    //         _id: 3,
    //         name: 'Teeth Whitening',
    //         description: '',
    //         img: whitening
    //     },
    // ];

// }
// const navigate = useNavigate()
// const handleUpdate = (id) => {
// navigate( `/product/${id}`)
// }
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    
                    service?.slice(0,6).map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)

                    // <Button className='bg-primary' onClick={() => handleUpdate(product._id)}>Perches</Button>
                }
            </div>
            </div>
        
    );
};

export default Services;