import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
    const {email,role} = user;
    console.log(user)
    
const makeAdmin = () =>{
    fetch(`https://computer-parts-server.onrender.com/user/admin/${email}`,{
        method: 'PUT',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        refetch();
        toast.success(`Successfully made an admin`)
    })
}
    return (
        
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-primary">Make Admin</button>}</td>
        <td><button class="btn btn-primary"  onClick={makeAdmin}>Remove User</button></td>
        
      </tr>
        
    );
};

export default UserRow;