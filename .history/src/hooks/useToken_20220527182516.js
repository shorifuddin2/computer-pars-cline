import {useEffect, useState} from "react"

const useToken =user =>{
    const [token, setToken]= useState('');
    useEffect( ()=>{
       const email = user?.user?.email

    }, [user]);
    return [token]
}

export default useToken;