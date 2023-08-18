import { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { ShopContext } from "./shopcontext";
import { Link } from "react-router-dom";


const prod = (props) => {
    const {id, name, image, price, brand} = props.data;
    const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];
  return <>
  <div key={id} className="col-3 mb-4">
    <div className="card">
      <div className="p-2">
        <img src={image} className='img-fluid card-img-top' />
      </div>
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
        <p className="price my-2">{price} <span className="text-danger"><strike> {price * 2} </strike></span> </p>

        <div className="mb-2 d-flex align-items-center justify-content-around">
              <div className="col-6 d-flex align-items-center justify-content-around">
                  <Link 
                      to={'/details'}
                      className="view-btn"
                      onClick={() => viewProductDetails(id)}>
                      View Details
                  </Link>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-around">
                  <button
                      className="add-btn"
                      onClick={() => {
                        addToCart(id);
                        event.target.classlist.toggle("success");
                      }
                  }
                  >
            
                      Add To Cart
                      { cartItemCount > 0 && `(${cartItemCount})`}
                    </button>
              </div>
        </div>
      </div>
    </div>
  </div>
  
  
  
  </>
} 

export default prod