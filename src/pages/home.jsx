import { Link } from "react-router-dom";
import Choices from "../components/choices";
import Featuredproducts from "../components/featuredproducts";
import NewArrival from "../components/newArrival";
import Sale from "../assets/images/blog/hot-sale.avif";
import clothes from "../assets/images/blog/clooo.avif";
// import { CgShoppingCart } from "react-icons/cg";
// import banner from "../assets/images/banner/b17.jpg";
// import banner1 from "../assets/images/banner/b10.jpg";
// import Newsletter from "../components/newsletter";

const home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center ">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="back-details">
                      <h1>Super Value Deals</h1>
                      <h2>Only with Noza</h2>

                      <p className="mb-3">Spend less and save more</p>

                      <Link
                        to="/shop"
                        className="btn btn-primary"
                        id="button-link"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Choices />

      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>Our Featured Products</h1>
              <p className="md-design">Modern and Latests Designs</p>
            </div>
            <Featuredproducts />
          </div>
        </div>
      </section>

      <section className="repair">
        <div className="container-xxl">
          <div className="row">
            <div className="repair-details text-center d-flex flex-column align-items-center p-3">
              <span>Repair services</span>
              <h2 className="mt-3 disc">
                {" "}
                Find out our big{" "}
                <span className="text-danger disc">Discounts</span>
              </h2>
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
              <p className="md-design">Your New Favourites</p>
            </div>
            <NewArrival />
          </div>
        </div>
      </section>

      <section className="deals p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 p-4">
              <div className="card row">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img
                      src={Sale}
                      alt=""
                      className="img-fluid rounded-start p-1 h-100 sale"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span>Hot Deals</span>
                      <h4 className="card-title">
                        Buy 2, get the third one free
                      </h4>
                      {/* <p>Modern and latests products</p> */}
                      <button className="btn-deals">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-4">
              <div className="card row">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img
                      src={clothes}
                      alt=""
                      className="img-fluid rounded-start p-1 h-100 sale"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span>Season in</span>
                      <h4 className="card-title">All weather Attire</h4>
                      {/* <p>Modern and latests products</p> */}
                      <button className="btn-deals">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
