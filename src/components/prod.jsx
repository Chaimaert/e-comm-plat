import { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { ShopContext } from "./shopcontext";
import { Link } from "react-router-dom";


const prod = (props) => {
    const {id, name, image, price, brand} = props.data;
    const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];
  return <>
  <div key={id} className="col-3">
    <div className="card">
      <img src={image} className='img-fluid card-img-top' />
      <div className="card-details p-3">
        <span>{brand}</span>
        <h5 className="my-2">{name} </h5>
        <ReactStars
            count={5}
            edit={false}
            value={4}
            size={24}
            activeColor="#cca27e"
        />
        <p className="price mt-2 mb-2">{price} <span className="text-danger"><strike> {price * 2} </strike></span> </p>
        <div className="d-flex align-items-center justify-content-around mb-2"></div>
        
        <Link 
          className="view-btn"
          onClick={() => viewProductDetails(id)}>
          View Details
        </Link>

        <button
          className="add-btn"
          onClick={() => addToCart(id)}>
          Add To Cart
          { cartItemCount > 0 && ` (${cartItemCount}) `}
          </button>
      </div>
    </div>
  </div>
  
  
  
  </>
} 

export default prod