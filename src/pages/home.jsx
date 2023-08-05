import { Link } from "react-router-dom";
import Choices from "../components/choices";

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
  </>
};

export default home;
