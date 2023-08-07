import { Link } from "react-router-dom";
import Choices from "../components/choices";
import Featuredproducts from "../components/featuredproducts";

const home = () => {
  return <>
    <section className="banner">
      <div className="container-xxl">
        <div className="row">
          <div className="banner-details d-flex flex-column align-items-start justify-content-center">
              <h1>Super Value Deals</h1>
              <h2>Only with Nosa</h2>
              <p className="spend">Spend less and save more</p>
              <Link className="button-link mb-1">Shop Now</Link>
          </div>
        </div>
      </div>
    </section>
    
    <Choices />


    <section className="featured-products p-5">
        <div className="cintainer-xxl">
          <div className="row">
            <div className="text-center">
              <h1>Our Featured Products</h1>
              <p>Modern Designs</p>
            </div>
            <Featuredproducts  />
          </div>
        </div>
    </section>

    <section className="repair">
      <div className="container-xxl">
        <div className="row">
          <div className="repair-details text-center">
              
          </div>
        </div>
      </div>
    </section>
  </>
};

export default home;
