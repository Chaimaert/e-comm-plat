/* eslint-disable react-hooks/rules-of-hooks */
// import { PRODUCTS } from '../data/products';
import { useEffect, useState } from 'react';
import Prod from './prod';
import axios from "axios";


const shopItems = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchproducts = async() => {
      const {data} = await axios.get("http://localhost:5000/api/products")
      setProducts(data)
    }
    fetchproducts();
  },[])

  return <> 
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
  {[...products].map((product) => (
    <Prod key={product.id} data={product} />
  ))}
  
        </div>
  </>
  
}

export default shopItems