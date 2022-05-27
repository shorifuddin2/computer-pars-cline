import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
fetch
const ParchesProduct = () => {

    const [product, setProduct] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/product=${user.email}`)


                .then(res => res.json())
                .then(data => setProduct(data));
        }
    }, [user])

    return (
        <div>
            <h2>Parches Product: {product.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>price</th>
                            <th>quantity</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td>{a.quantity}</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ParchesProduct;