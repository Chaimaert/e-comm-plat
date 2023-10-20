
import { useEffect, useState } from 'react';
import Prod from './prod';
import axios from "axios";


const shopitems = () => {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    const fetchproducts = async() => {
      const {data} = axios.get("/api/products");
      setProducts(data);
    };

  },[])

  return <>
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
  {[...PRODUCTS, ...PRODUCTS1].map((product) => (
    <Prod key={product.id} data={product} />
  ))}
  
        </div>
  </>
}

export default shopitems