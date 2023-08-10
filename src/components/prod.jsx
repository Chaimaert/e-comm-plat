// import { Shopcontext } from './shopcontext'


const prod = (props) => {
    const {id, name, image, price, brand} = props.data;
  return <>
  <div key={id} className="col-3">
    <div className="card">
      <img src={image} alt="" className='img-fluid acrd-img-top' />
      <div className="card-details">
        <h5>{name}</h5>
      </div>
    </div>
  </div>
  
  
  
  </>
} 

export default prod