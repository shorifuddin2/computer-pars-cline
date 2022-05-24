import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const AllReview = () => {


    const[review,setRe] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=> setProduct(data));
    },[]);

    // const reviews = [
    //     {
    //         _id:1,
    //         name: 'Winson Herry',
    //         review: 'this product assome',
    //         location: 'california',
    //         img: "people1"
    //     },
    //     {
    //         _id:2,
    //         name: 'Winson Herry',
    //         review: '',
    //         location: 'california',
    //         img: people2
    //     },
    //     {
    //         _id:3,
    //         name: 'Winson Herry',
    //         review: '',
    //         location: 'california',
    //         img: people3
    //     },
    // ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold text-center">Cline Review</h4>
                    
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default AllReview;