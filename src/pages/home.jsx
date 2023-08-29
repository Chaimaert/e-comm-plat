import { Link } from "react-router-dom";
import Choices from "../components/choices";
import Featuredproducts from "../components/featuredproducts";
import NewArrival from "../components/newArrival";
import Sale from "../assets/images/blog/hot-sale.avif";
import clothes from "../assets/images/blog/clooo.avif";
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import Newsletter from "../components/newsletter";

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

      <section className="featured-products p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Our Featured Products</h1>
              <p>Modern and Latests Designs</p>
            </div>
            <Featuredproducts />
          </div>
        </div>
      </section>

      <section className="repair-services p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="repair-details text-center align-items-center">
              <h5 className="mb-3">Repair Services</h5>
              <h2 className="mb-3">
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

      <section className="new-arrivals p-4">
        <div className="cintainer-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1>New Arrivals</h1>
              <p>Your New Favourites</p>
            </div>
            <NewArrival />
          </div>
        </div>
      </section>

      <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card m-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Sale}
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Hot Deals</h5>
                      <h2 className="card-text mb-2">
                        Buy 2, get the third one free
                      </h2>
                      <p className="card-text mb-2">
                        <small className="text-body-secondary">
                          The latest and modern designs
                          <br />
                        </small>
                      </p>
                      <Link to="shop">
                        <button className="mt-4">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={clothes}
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Season-In</h5>
                      <h2 className="card-text mb-2">All Weather Attire</h2>
                      <p className="card-text mb-2">
                        <small className="text-body-secondary">
                          It never matter which season it is We got you covered
                        </small>
                      </p>
                      <Link to="shop">
                        <button className="mt-4">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-3">What our customers say...</h1>
              <p className="mb-4">
                Our customers never miss a bit on providing feedback
              </p>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog1} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Shopping at Noza has been a delightful
                    experience.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog2} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Noza  has exceeded my expectations in every
                    way possible.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog3} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    My experience with Noza has been different, delightful and
                    exceptional.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog4} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    From electronics to fashion, I found exactly what I was
                    looking for.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
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
