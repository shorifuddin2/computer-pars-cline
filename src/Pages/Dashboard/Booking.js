
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'




const Booking = () => {

    
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    // console.log(user)
    const email = user?.email;
    const { data: booking, refetch,isLoading } = useQuery(['booking',email ], () => {
        return fetch(`https://computer-parts-server.onrender.com/booking/${user?.email}`)
            .then(res => res.json());
            
    })




const deleteBooking = id =>{ 
    fetch(`https://computer-parts-server.onrender.com/booking/${id}` ,{ method : 'DELETE' , headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
       }})
       
}
    refetch()
    // console.log(booking)
        if(isLoading){
            return <Loading></Loading>
        }
        
        
    return (
        <div>
           
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking?.map((product) =><tr>
                                <td><img className='w-15 h-8' src={product?.image} alt=""/></td>
                                <td>{product?.name}</td>
                                <td>${product?.price}</td>
                                <td><button className='btn btn-xs btn-primary w-15 h-8' onClick={()=>deleteBooking(product._id)}>Delete</button></td>

                                
                                 <td>
                                    {(product?.price && !product?.paid) && <Link to={`/dashboard/payment/${product._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(product?.price && product?.paid) && <span className='btn btn-xs btn-success'>Paid</span>}
                                </td>
                            </tr>)
                            
                        }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;