import { useEffect, useState } from "react";

const UseUpdate = productId =>{
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `https://serene-scrubland-85143.herokuapp.com/product/${productId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [productId]);
    return [product]
}

export default UseUpdate;