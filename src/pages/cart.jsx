import { PRODUCTS, PRODUCTS1 } from '../components/products'
import Cartitems from '../components/cartitems'
import { useContext } from "react"; 
import { ShopContext } from '../components/shopcontext';


const cart = (props) => {
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  return <>
    <section className="cart-item p-5">
            <div className="container-xxl">
              <div className="row">
                    <table>
                      <thead className="my-2">
                                    <th className="col-3">Product Image</th>
                                    <th className="col-3">Product Details</th>
                                    <th className="col-3">Edit</th>
                                    <th className="col-3">Coupons</th>
                        </thead>
                            {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                              if (cartItems[product.id] !== 0) {
                                return <Cartitems key={product.id} data={product} />
                              }
                            })}
                    </table>
                </div>
             </div>


    </section>
  </>
};

export default cart;