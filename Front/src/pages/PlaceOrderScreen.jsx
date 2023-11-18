import { useContext } from "react";
import { PRODUCTS } from "../data/products";
import { PRODUCTS1 } from "../data/products";
import { ShopContext } from "../components/shopcontext";
import CartItem from "../components/cartitems";

const PlaceOrderScreen = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <>
      <section className="cart">
        <div className="container-xxl p-5">
          {totalAmount > 0 ? (
            <div className="row">
              <div className="col-12 mx-3 col-md-5 Cart">
                <h5>Product</h5>
              </div>
              <div className="col-12 mx-1 col-md-5 Cart">
                <h5>Details</h5>
              </div>

              <div className="p-3">
                {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItem key={product.id} data={product} />;
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
};

export default PlaceOrderScreen;
