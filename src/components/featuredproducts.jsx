import { PRODUCTS } from './products';

const featuredproducts = () => {
  return (
    <div className="row mt-4">
      {PRODUCTS.slice(2, 6).map((product) => (
        <div className="col-3" key={product.id}>
          <div className="card h-100 m-auto p-3">
            <img src={product.image} alt="" className="card-img-top img-fluid m-auto p-3" />
            <div className="card-details">
                <div className="title mb-3">
                  <span> {product.brand} </span>
                  <h5 className='mt-2'> {product.name} </h5>
                </div>
              <div className="card-footer text-center mb-2">
                <p className='mb-2'> {product.status} </p>
                <p className='text-danger'> <strike> {product.rate} </strike> </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default featuredproducts;

