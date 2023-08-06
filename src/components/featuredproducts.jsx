import { PRODUCTS } from './products'

const featuredproducts = () => {
  return <>
  
  <div className="card">
      {PRODUCTS.slice(2,6).map(product => (
        <img src={product.image} alt="" />
      ))}
  </div>
  

  </>;
}

export default featuredproducts;