import React from 'react';

const UserRow = ({user}) => {
    const {email} = user;
const makeAdmin = () =>{
    fetch(`http://localhost:5000/user/admin/${email}`,{
        method: 'PUT',
        headers:{
            authorization: `Bearer ${localStorage.getItem(accessToken)}`
        }
    })
    .then(res => res.json())
    
}
    return (
        
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td><button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button></td>
        <td><button class="btn btn-xs">Remove User</button></td>
        
      </tr>
        
    );
};

export default UserRow;