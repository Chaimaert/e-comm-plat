import { useContext } from "react"
import { ShopContext } from './shopcontext'
import { RiDeleteBack2Line } from 'react-icons/ri'


const cartitems = (props) => {

  const {id, name, image, price, brand} = props.data;
  const {addToCart, cartItems, removeToCart, updateCartItemCount} = useContext(ShopContext);
  const itemsInStock = id === 0 ? Math.ceil((id + 2.5) * 102 / 2) : Math.ceil((id * 102.5) / 2);

  return <>
      <div className="container card my-3">
      <div className="row g-3">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <div className="cart-item-image m-auto">
              <img src={image} className="card-img-top img-fluid" alt="..." />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3">
            <h2 className="name mb-4">{name}</h2>
            <p className="compo ">Product Brand : <b className='cop mb-1'> {brand}</b></p>
            <p className="compo ">Product Price : <b className='cop mb-1'> ${price}</b></p>
            <p className="compo ">Product Number : <b className='cop mb-3'> {id}</b></p>
            <p className="compo ">Items in Stock : <b className='text-danger'> {itemsInStock}</b></p>
          </div>
          <div className="p-3 d-flex justify-content-between align-items-center">
            <div className="count-handler">
              <button className="btn btn-outline-secondary" onClick={() => addToCart(id)}>+</button>
              <input className='text-danger fs-4 form-control' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
              <button className="btn btn-outline-secondary" onClick={() => removeToCart(id)}>-</button>
            </div>
            <button className="btn btn-outline-danger" onClick={() => removeToCart(id)}>
              <RiDeleteBack2Line />
            </button>
          </div>
          <div className="p-3">
            <input type="text" className="form-control" id="coupon" placeholder="Enter coupon code..." />
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default cartitems