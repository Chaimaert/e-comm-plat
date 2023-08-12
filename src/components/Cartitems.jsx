import { useContext } from "react"; 
import { ShopContext } from './shopcontext'


const Cartitems = (props) => {

  const {id, name, image, price, brand} = props.data;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);

  <section className="cart-item p-5">
    <div className="container-xxl">
      <div key={id} className="row">
        <table>
          <thead>
            <th>Product Image</th>
            <th>Product Details</th>
            <th>Edit</th>
            <th>Coupons</th>
          </thead>
          <tbody>
            <tr>
                <td>
                  <img src={image} alt="" className='img-fluid' />
                </td>
                <td>
                  <p> {brand} </p>
                  <p> {name} </p>
                  <p> {price} </p>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </section>
  return <>
    
  </>
}

export default Cartitems