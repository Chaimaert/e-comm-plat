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
              <p className="md-design">Modern and Latests Designs</p>
            </div>
            <Featuredproducts  />
          </div>
        </div>
    </section>

    <section className="repair">
      <div className="container-xxl">
        <div className="row">
          <div className="repair-details text-center d-flex flex-column align-items-center p-3">
              <span>Repair services</span>
              <h2 className="mt-3 disc"> Find out our big <span className="text-danger disc">Discounts</span></h2>
              <div className="mt-3">
                <button className="btn-repair">Explore Now</button>
              </div>
          </div>
        </div>
      </div>
    </section>

    <section className="new-products p-5">
        <div className="cintainer-xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="disc">New Arrivals</h1>
              <p className="md-design">Modern and Latests Designs</p>
            </div>
            <Featuredproducts  />
          </div>
        </div>
    </section>
  </>
};

export default home;
