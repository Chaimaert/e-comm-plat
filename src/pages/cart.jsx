import { PRODUCTS, PRODUCTS1 } from '../components/products'
import Cartitems from '../components/cartitems'
import { useContext } from "react"; 
import { ShopContext } from '../components/shopcontext';
import { Link } from 'react-router-dom';


const cart = () => {
  const { getTotalCartAmount, cartItems, clearCart, getTotalCartProducts } = useContext(ShopContext);
  const TotalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts();
  return <>
    {TotalAmount > 0 ?
        <section className="cart-item p-5">
            <div className="container-xxl">
                <div className="row">
                      <table>
                        <thead className="my-2">
                                      <th className="col-3">Product Image</th>
                                      <th className="col-3">Product Details</th>
                                      <th className="col-3"> Edit</th>
                                      <th className="col-3"> Coupons </th>
                          </thead>
                              {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                                if (cartItems[product.id] !== 0) {
                                  return <Cartitems key={product.id} data={product} />
                                }
                              })}
                          <div className="mb-2 mt-4 p-3">
                                <Link 
                                  className='clear-cart' 
                                  onClick={() => clearCart()}>
                                  Clear Cart
                                </Link>
                            </div>
                        </table>
                    </div>
              </div>
              <hr />

            <div className="mt-4 p-3 cart-total d-flex justify-content-between">
                  <div className="col-6">
                      <Link to={'/shop'} className='shopping'>Continue Shopping</Link>
                  </div>
                  <div>
                      <h3 className='total'>Total</h3>
                      <p className='my-2'>Total Products : <span className="text-danger">{totalProducts}</span></p>
                      <p className="amount mb-4">${TotalAmount}</p>
                      <button>Check out</button>
                  </div>
            </div>
        </section>
        :
        <section className='p-3'>
          <div className="container-xxl">
            <div className="row">
              <div className="text-center">
                <h3>Your Cart is Empty !</h3>
                <p>Click here to <Link className='add-items' to={'/shop'} >add items</Link></p>
              </div>
            </div>
          </div>
        </section>
        }
  </>
};

export default cart;