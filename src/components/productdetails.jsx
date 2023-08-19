import { useContext } from "react";
import { ShopContext } from "../components/shopcontext"
import { PRODUCTS, PRODUCTS1 } from './products'



const productdetails = () => {
  
  const { viewProductDetails, addToCart, cartItems, closeProductDetails, selectedProduct } = useContext(ShopContext);
  const productId = selectedProduct || 0;
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find ((p) => p.id === productId);
  
  return <>
      
  <div className="d-flex align-items-center justify-content-between">
    <div className="col-6">
      <img src={product.image} alt="" className="img-fluid"/>
    </div>
  </div>
  
  </>
}

export default productdetails