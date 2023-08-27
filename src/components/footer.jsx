import { Link } from "react-router-dom";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import google from "../assets/images/pay/play.jpg";
import app from "../assets/images/pay/app.jpg";
import pay from "../assets/images/pay/pay.png";

const footer = () => {
  return <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row justify-content-center justify-content-md-start">
            <div className="col-md-4 col-lg-4 mb-4 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>Contact</b>
              </h2>

              <div className='mb-3'><p><b>Address:</b> IDAR EL KARMA, Rte de Safi, Marrakech</p> </div>
              <div className='mb-3'><p><b>Phone:</b>  <a className='footer-tel' href="tel:+1234567890">Call us at +212661975556</a></p> </div>
              <div className='mb-4'><p><b>Hours:</b>  From 8 a.m To 6 p.m</p> </div>
              <div className='mb-3'><p><b>Follow Us</b></p> </div>

              <div className="socials social-icons  d-flex gap-3">
                <Link
                  to="https://www.instagram.com/noza.agency/"
                  id="footer-link"
                  target="_blank"
                  className="gap-3"
                >
                  <AiFillInstagram />
                </Link>
                <Link
                  to="https://twitter.com"
                  id="footer-link"
                  target="_blank"
                  className="gap-3"
                >
                  <AiOutlineTwitter />
                </Link>
                <Link 
                  to="https://www.facebook.com"
                  id="footer-link"
                  className="gap-3"
                  target="_blank">
                  <RiFacebookCircleFill />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/noza-agency/"
                  id="footer-link"
                  target="_blank"
                  className="gap-3"
                >
                  <BiLogoLinkedin />
                </Link>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                {" "}
                <b>About</b>{" "}
              </h2>
              <div className="mb-3">
                {" "}
                <Link to="/about" id="footer-links">
                  About Us
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link to="checkout" id="footer-links">
                  Delivery
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">Privacy Policy</Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">Terms & Conditions</Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">Fee Policy</Link>{" "}
              </div>
            </div>

            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
                <h2 className='footer-title mb-3'><b>Account</b></h2>
                <div className='mb-3'> <Link to='/login' id='footer-links'>Profile</Link>  </div>
                <div className='mb-3'> <Link to='/cart' id='footer-links'>View Cart</Link>  </div>
                <div className='mb-3'> <Link to='/contact' id='footer-links'>Help</Link>  </div>
                <div className='mb-3'> <Link id='footer-links'>Payments</Link>  </div>
                <div className='mb-3'> <Link id='footer-links'>Coupons</Link> </div>
             </div>

             <div className="col-md-4 col-lg-4">
                <h2 className='footer-title mb-3'><b>Install App</b></h2>
                <p className='mb-3'>Available On Google Play Services & App Store</p>
                <div className="className='mb-3 col-md-6 col-12 pay">
                    <div className='mb-3'>
                        <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
                              <img src={google} alt="" />
                        </Link>
                    </div>
                    <div className='mb-3'>
                      <Link to='https://www.apple.com/app-store/' target='_blank'>
                          <img src={app} alt="" />
                      </Link>
                    </div>
                </div>
                  <p className="mb-3">
                    Payment Methods
                  </p>
                  <div className="pay">
                      <Link to='https://www.paypal.com/signin' target='_blank'>
                          <img src={pay} alt="" />
                      </Link>
                  </div>
                </div>
              </div>
              <hr className='my-4' />
              <div className="row">
                  <div className="col-12 col-md-6">
                  <p className="text-center text-md-start">&copy; Developed by ROUITA CHAIMAE 2023</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <ul className="list-inline text-center text-md-end">
                      <li className="list-inline-item"><Link to="#" className="text-dark">Privacy Policy</Link></li>
                      <li className="list-inline-item"><Link to="#" className="text-dark">Terms of Use</Link></li>
                      <li className="list-inline-item"><Link to="#" className="text-dark">Contact Us</Link></li>
                    </ul>
                  </div>
              </div>
        </div>
      </footer>
    </>;
};

export default footer;
