import {useEffect, useState} from "react"

const useToken =user =>{
    const [token, setToken]= useState('');
    useEffect( ()=>{
        console.log('user inside useToken', user)

    }, [user]);
    return []
}

export default useToken;