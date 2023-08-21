import { useContext } from "react";
import { ShopContext } from "../components/shopcontext"
import { PRODUCTS, PRODUCTS1 } from './products'



const productdetails = () => {
  
  const { updateCartItemCount, removeToCart, addToCart, cartItems, closeProductDetails, selectedProduct } = useContext(ShopContext);
  const productId = selectedProduct || 0;
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find ((p) => p.id === productId);
  
  return <>
      
  <div className="d-flex">
    <div className="col-6 card">
      <img src={product.image} alt="" className="img-fluid p-5"/>
    </div>

    <div className="col-6">
        <div className="p-4">
              <span className="bd-name"> {product.brand} </span>
              <h3 className="my-2">  {product.name} </h3>
              <div className="card-details">
                  <p className="my-2">Was<strike className="text-danger"> {product.price*2} </strike> &nbsp;Now
                      <span className="price">    ${ product.price} </span>
                  </p>

                  <p className="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum eius delectus officia eaque accusamus? Tempore,
                    tempora nostrum accusamus vel aliquam at officiis? 
                    Omnis sit dolorum consequuntur commodi dicta facilis delectus?</p>
              </div>
                  
                    <button
                                className="add-btn mx-2"
                                onClick={() => {
                                  addToCart(product.id);

                                  }
                                }>+
                    </button>

                             <input type="text" value={cartItems[product.id]} onChange={(e) => 
                            updateCartItemCount(Number(e.target.value), product.id)} />

                     <button
                                className="add-btn mx-2"
                                onClick={() => {
                                  removeToCart(product.id);

                                  }
                                }>-
                      </button>

                    <div className="input-group p-4">
                          <input type="text" className="form-control" placeholder="Enter coupon code ..." 
                              aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <button className="input-group-text" id="basic-addon2">Search</button>
                      </div>
        </div>
    </div>
  </div>
  
  </>
}

export default productdetails