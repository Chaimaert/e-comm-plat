/* eslint-disable react-hooks/rules-of-hooks */
import { PRODUCTS } from '../data/products';
import Prod from './prod';


const shopItems = () => {

  return <>
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
  {[...PRODUCTS].map((product) => (
    <Prod key={product.id} data={product} />
  ))}
  
        </div>
  </>
}

export default shopItems