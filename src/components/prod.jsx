// import { Shopcontext } from './shopcontext'
import ReactStars from "react-rating-stars-component";


const prod = (props) => {
    const {id, name, image, price, brand} = props.data;
  return <>
  <div key={id} className="col-3">
    <div className="card">
      <img src={image} alt="" className='img-fluid acrd-img-top' />
      <div className="card-details p-3">
        <span>{brand}</span>
        <h5 className="my-3">{name}</h5>
        <ReactStars
            count={5}
            edit={false}
            value={4}
            size={24}
            activeColor="#cca27e"
        />,
        <p className="price"> {price} <span className="text-danger"><strike>{price * 2}</strike></span> </p>
        <div className="d-flex align-items-center"></div>
        <button>View Details</button>
        <button>Add To Cart</button>
      </div>
    </div>
  </div>
  
  
  
  </>
} 

export default prod