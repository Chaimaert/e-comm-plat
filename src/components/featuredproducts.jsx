import { PRODUCTS } from './products'

const featuredproducts = () => {
  return <>
  
  <div className="row">
      {PRODUCTS.slice(2,6).map(product => (
        <div className="col-3">
            <div key={product.id}>
            <div className="card text-center">
            <img src={product.image} alt="" className='card-img-top img-fluid m-auto' />
            <div className="card-details">
                <span> {product.brand} </span>
                <h4> {product.name} </h4>
                <div className="card-bottom">
                    <p> {product.status} </p>
                    <p> {product.rate} </p>
                </div>
            </div>
            </div>
            </div>
          </div>
      ))}
  </div>
  </>;
}
export default featuredproducts;