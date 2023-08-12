import { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { ShopContext } from "./shopcontext";


const prod = (props) => {
    const {id, name, image, price, brand} = props.data;
    const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];
  return <>
  <div key={id} className="col-3">
    <div className="card">
      <img src={image} alt="" className='img-fluid acrd-img-top' />
      <div className="card-details p-3">
        <span>{brand}</span>
        <h5 className="my-3">{name}</h5>
        <ReactStars
            count={5}
            edit={false}
            value={4}
            size={24}
            activeColor="#cca27e"
        />,
        <p className="price mb-3"> {price} <span className="text-danger"><strike>{price * 2}</strike></span> </p>
        <div className="d-flex align-items-center justify-content-around mb-2"></div>
        
        <button 
          className="view-btn"
          onClick={() => viewProductDetails(id)}>
          View Details
        </button>

        <button
          onClick={() => addToCart(id)}>
          Add To Cart
          { cartItemCount > 0 && `(${cartItemCount})`}
          </button>
      </div>
    </div>
  </div>
  
  
  
  </>
} 

export default prod