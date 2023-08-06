import { PRODUCTS } from './products'

const featuredproducts = () => {
  return <>
  
  <div className="row">
      {PRODUCTS.slice(2,6).map(product => (
        <div className="col-3 mt-3">
            <div key={product.id}>
            <div className="card h-100 m-auto p-3">
            <img src={product.image} alt="" className='card-img-top img-fluid m-auto p-3' />
            <div className="card-details ">
            <div className="title">
                <span> {product.brand} </span>
                <h5> {product.name} </h5>
            </div>
                <div className="card-bottom text-center">
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
