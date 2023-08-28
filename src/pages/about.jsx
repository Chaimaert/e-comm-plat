import pic from '../assets/images/about/pic2.avif'
import { Link } from 'react-router-dom';
import video from '../assets/images/about/1.mp4'
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import Marquee from "react-fast-marquee";
import orders from '../assets/images/icons/courier.png'
import orders1 from '../assets/images/icons/truck.png'
import orders2 from '../assets/images/icons/save-money.png'
import orders3 from '../assets/images/icons/support.png'
import orders4 from '../assets/images/icons/gift-box.png'

const about = () => {
  return <>

    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
              <div className="shop-details text-center align-items-center">
                  <h1 className="know">Get to know Us</h1>
                  <p className="fs-9">Take a moment to know us better ...</p>
                </div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-us p-5">
        <div className="row">
          <div className="col-md-6">
            <img src={pic} alt="" className='img-fluid p-5' />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h1 className='who mb-3'><b>Who are we ?</b></h1>
                <p className="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, 
                    <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
                </p>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, 
                    <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
                </p>
          </div>
        </div>
      </section>

      <section className="about-app p-5">
          <h2 className='fs-1 text-center mb-4' >Download our <Link className='fs-2 text-danger'>App</Link></h2>
          <div className="col-12 p-5 col-md-8 mx-auto">
            <video loop muted autoPlay src={video} className='w-100'></video>
          </div>
      </section>

      <section className="abouts p-5">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12 d-flex flex-column align-items-center">
                  <h1 className='mb-3'>What our customers say...</h1>
                  <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
                </div>
                <div className="col-12 col-md-6 p-3">
                  <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={blog1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Marvel Clein</h5>
                        <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                      </div>
                      </div>
                  
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 p-3">
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={blog2} alt="" className='img-fluid rounded-start' />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Melisa Ivy</h5>
                              <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                              <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 p-3">
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={blog3} alt="" className='img-fluid rounded-start' />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Tristian Ann</h5>
                              <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                              <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 p-3">
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={blog4} alt="" className='img-fluid rounded-start' />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Phillip Omosh</h5>
                              <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                              <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-12 col-md-6 p-3">
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={blog2} alt="" className='img-fluid rounded-start' />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Melisa Ivy</h5>
                              <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                              <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 p-3">
                      <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={blog1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Marvel Clein</h5>
                            <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                          </div>
                          </div>
                      
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-12 p-3">
                        <Marquee className='p-2 slide'>
                                <div>
                                    <img src={orders} alt="" className='img-fluid'/>
                                    <p className="card-text mb-2">Fast Orders</p>
                                </div>
                                <div>
                                    <img src={orders1} alt="" className='img-fluid'/>
                                    <p className="card-text mb-2">Quick Shipping</p>

                                </div>
                                <div>
                                    <img src={orders2} alt="" className='img-fluid'/>
                                    <p className="card-text mb-2">High Saves</p>
                                </div>
                                <div>
                                  <img src={orders3} alt="" className='img-fluid'/>
                                  <p className="card-text mb-2">24/7 Support</p>
                                </div>
                                <div>
                                  <img src={orders4} alt="" className='img-fluid'/>
                                  <p className="card-text mb-2">Online Orders</p>
                                </div>
                        </Marquee>
                    </div>
                </div>
              </div>
    </section>

  </>
};

export default about;