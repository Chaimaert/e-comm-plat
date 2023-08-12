import { PRODUCTS, PRODUCTS1 } from '../components/products'
import Cartitems from '../components/Cartitems'
import { ShopContext } from '../components/shopcontext';


const cart = () => {
  return <>
    <div className="row">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => {
            if (CartItems[product.id] !== 0) {
              return <Cartitems key={product.id} data={product} />
            }
        })}
    </div>
  </>
};

export default cart;