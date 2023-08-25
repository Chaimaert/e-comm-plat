import { useContext, useState } from "react";
import { PRODUCTS } from "../components/products";
import { PRODUCTS1 } from "../components/products";
import { ShopContext } from "../components/shopcontext";
import CartItem from "../components/cartitems";
import { FiDelete } from  'react-icons/fi'
import { useNavigate } from "react-router-dom";

// const cart = () => {
//   const { getTotalCartAmount, cartItems, clearCart, getTotalCartProducts } = useContext(ShopContext);
//   const TotalAmount = getTotalCartAmount();
//   const totalProducts = getTotalCartProducts();
//   return <>
//     {TotalAmount > 0 ?
//         <section className="cart-item p-5">
//             <div className="container-xxl">
//                 <div className="row">
//                       <table>
//                         <thead className="my-2">
//                                       <th className="col-3">Product Image</th>
//                                       <th className="col-3">Product Details</th>
//                                       <th className="col-3"> Edit</th>
//                                       <th className="col-3"> Coupons </th>
//                           </thead>
//                               {[...PRODUCTS, ...PRODUCTS1].map((product) => {
//                                 if (cartItems[product.id] !== 0) {
//                                   return <Cartitems key={product.id} data={product} />
//                                 }
//                               })}
//                           <div className="mb-2 mt-4 p-3">
//                                 <Link
//                                   className='clear-cart'
//                                   onClick={() => clearCart()}>
//                                   Clear Cart
//                                 </Link>
//                             </div>
//                         </table>
//                     </div>
//               </div>
//               <hr />

//             <div className="mt-4 p-3 cart-total d-flex justify-content-between">
//                   <div className="col-6">
//                       <Link to={'/shop'} className='shopping'>Continue Shopping</Link>
//                   </div>
//                   <div>
//                       <h3 className='total'>Total</h3>
//                       <p className='my-2'>Total Products : <span className="text-danger">{totalProducts}</span></p>
//                       <p className="amount mb-4">${TotalAmount}</p>
//                       <button>Check out</button>
//                   </div>
//             </div>
//         </section>
//         :
//         <section className='p-3'>
//           <div className="container-xxl">
//             <div className="row">
//               <div className="text-center">
//                 <h3>Your Cart is Empty !</h3>
//                 <p>Click here to <Link className='add-items' to={'/shop'} >add items</Link></p>
//               </div>
//             </div>
//           </div>
//         </section>
//         }
//   </>
// };

// export default cart;



const cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 576) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <>
      <section className="cart">
        <div className="container-xxl p-5">
          {totalAmount > 0 ? (
            <div className="row">
              <div className="p-2 text-center">
                <h2>Cart</h2>
              </div>
              <div className="col-12 col-md-5 text-center">
                <h5>Product</h5>
              </div>
              <div className="col-12 col-md-5 text-center">
                <h5>Details</h5>
              </div>

              <div className="p-3">
                {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItem key={product.id} data={product} />;
                  }
                })}
                <div className="col-12 p-2 text-end">
                  <button onClick={() => clearCart()} id="clear-cart">
                    {" "}
                    Clear Cart{" "}
                  </button>
                </div>

                <hr />
                <div className="row">
                  <div className="col-12 col-md-6 d-flex m-auto justify-content-center mt-4">
                    <button onClick={() => navigate("/shop")}>
                      {isMobile ? "Continue" : "Continue Shopping"}
                    </button>
                  </div>

                  <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
                    <div className="col-12">
                      <div className="text-end">
                        <h2 className="mb-3">
                          <b>Total</b>
                        </h2>
                        <div className="align-items-center">
                          <div>
                            <p className="total-price align-items-center">
                              <b>${totalAmount}</b>
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => navigate("/checkout")}
                          className="mt-5"
                        >
                          {isMobile ? "Check Out" : "Proceed to Checkout"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container-xxl">
              <div className="row">
                <div className="text-center p-5 mb-4">
                  <h2>Your Cart Is Empty!!!</h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default cart;
