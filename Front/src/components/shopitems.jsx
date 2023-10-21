import { useEffect, useState } from 'react';
import Prod from './prod';
import axios from "axios";

function ShopItems() {  

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        console.log("Fetched data:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchProducts();
  }, []);
  


  return <>
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
  {[...products].map((product) => (
    <Prod key={product.id} data={product} />
  ))}
  
        </div>
  </>
}

export default ShopItems