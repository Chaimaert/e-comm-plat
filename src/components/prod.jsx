// import { Shopcontext } from './shopcontext'


const prod = (props) => {
    const {id, image} = props.data;
  return <>
  <div key={id} className="col-3">
    <div className="card">
      <img src={image} alt="" className='img-fluid acrd-img-top' />
      <div className="card-details">
        
      </div>
    </div>
  </div>
  
  
  
  </>
} 

export default prod