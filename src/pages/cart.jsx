import { PRODUCTS, PRODUCTS1 } from '../components/products'
import Cartitems from '../components/cartitems'
import { useContext } from "react"; 
import { ShopContext } from '../components/shopcontext';


const cart = (props) => {
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  return <>
    <div className="row">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => {
            if (cartItems[product.id] !== 0) {
              return <Cartitems key={product.id} data={product} />
            }
        })}
    </div>
  </>
};

export default cart;