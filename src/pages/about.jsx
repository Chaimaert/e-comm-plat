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
                <p className="card-text mb-3">Noza Digital Marketing (NDM) is an innovative and dynamic e-commerce platform that offers a diverse range of products catering to a wide spectrum of consumer preferences. 
                    <br /> With a commitment to excellence and customer satisfaction, NDM provides a seamless online
                     shopping experience that merges convenience with quality.
                    <br />  The platform&#39;s extensive product selection encompasses everything from electronics and fashion to home essentials and beyond,
                     ensuring that shoppers can find precisely what they&#39;re looking for. 
                </p>
                <p className="card-text">Noza Digital Marketing prides itself on its user-friendly interface, secure payment options, and efficient delivery services, making it a go-to destination for those 
                    seeking to explore and purchase a variety of products in the ever-expanding digital marketplace.
                    <br /> Whether it&#39;s the latest tech gadgets, stylish apparel, or everyday necessities, 
                    <br /> We offers a comprehensive array of choices that resonate with modern consumers diverse needs and preferences.
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
                  <h1 className='mb-3'>What our customers say ...</h1>
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
                        <h5 className="card-title">Mark T.</h5>
                        <p className="card-text mb-3"> <br />I&#39;m absolutely thrilled with my shopping experience on Noza. <br />The platform offers an incredible variety of products, and I easily found everything I needed for my home.</p>
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
                              <p className="card-text mb-3"> The products were delivered promptly and in perfect condition.<br />Noza has become my go-to online shopping destination. <br />The user-friendly interface and secure payment options made the whole process seamless.</p>
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
                              <h5 className="card-title">Emily Swolf</h5>
                              <p className="card-text mb-3">Shopping at Noza  has been a delightful experience. <br /> The platform&#39;s intuitive layout and wide selection of products made finding what I needed effortless <br />I was impressed by the quality of the items I purchased, and the smooth checkout process.</p>
                              <p className="card-text"><small className="text-body-secondary">Last Updated 2 days ago</small></p>
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
                              <h5 className="card-title">Phillip Omay</h5>
                              <p className="card-text mb-3">Noza Digital Marketing has exceeded my expectations in every way possible. <br />The diverse range of products available, <br /> combined with the platform&#39;s user-friendly design, made my shopping journey enjoyable.</p>
                              <p className="card-text"><small className="text-body-secondary">Last Updated 22h ago</small></p>
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
                              <p className="card-text mb-3">From electronics to fashion, I found exactly what I was looking for.<br /> The exceptional customer service and prompt delivery further solidified my trust in Noza Digital Marketing <br />It&#39;s a one-stop shop that I highly recommend to everyone!.</p>
                              <p className="card-text"><small className="text-body-secondary">Last Updated 10 days ago</small></p>
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
                            <h5 className="card-title">Alex Mark</h5>
                            <p className="card-text mb-3">My experience with Noza Digital Marketing has been exceptional.<br />Navigating through their extensive collection of products was a breeze,I appreciated the detailed product descriptions that helped me make informed choices.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 45 mins ago</small></p>
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