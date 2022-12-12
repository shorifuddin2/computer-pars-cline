import { useEffect, useState } from "react"

const UseBooking = ()=>{
    const[booking, setBooking] = useState([]);
    useEffect(()=>{
        fetch('https://serene-scrubland-85143.herokuapp.com/booing')
        .then(res=>res.json())
        .then(data=> setBooking(data));
    },[]);
    return [booking, setBooking];
}
export default UseBooking;