import { Link } from "react-router-dom"
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { BiLogoLinkedin } from 'react-icons/bi'
import google from '../assets/images/pay/play.jpg'
import app from '../assets/images/pay/app.jpg'
import pay from '../assets/images/pay/pay.png'

const footer = () => {
  return  <>
    <footer className="footer p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4 d-flex flex-column ">

            <h3 className="mb-4">Contact us</h3>

            <div className="footer-details">
              <p className="mb-3"><b>Address : </b>IDAR EL KARMA, Rte de Safi, Marrakech</p>
              <p className="mb-3"><b>Phone : </b> Call us +212661975556</p>
              <p className="mb-4"><b>Hours : </b> From 8 A.m to 6 P.m</p>
              <p className="mb-3"><b>Follow Us</b></p>

              <div className="col-4 mb-3 social-icons d-flex justify-content-around">
                <Link><AiFillInstagram className="fs-4"/></Link>
                <Link><RiFacebookCircleFill className="fs-4" /></Link>
                <Link><AiOutlineTwitter className="fs-4" /></Link>
                <Link><BiLogoLinkedin className="fs-4"  /></Link>
              </div>
            </div>

          </div>
          <div className="col-2">
            <h3 className="mb-4">About</h3>
            <div className="footer-details d-flex flex-column">
                <Link className="mb-3">About Us</Link>
                <Link className="mb-3">Delivery</Link>
                <Link className="mb-3">Privacy Policy</Link>
                <Link className="mb-3">Tax Policy</Link>
                <Link className="mb-3">Terms & Conditions</Link>
                <Link className="mb-3">Fee Policy</Link>
            </div>
          </div>
          <div className="col-2">
            <h3 className="mb-4">Account</h3>
            <div className="footer-details d-flex flex-column">
                <Link className="mb-3">Profile</Link>
                <Link className="mb-3">View Cart</Link>
                <Link className="mb-3">Help</Link>
                <Link className="mb-3">Payments</Link>
                <Link className="mb-3">My wishlist</Link>
                <Link className="mb-3">Coupons</Link>
            </div>
          </div>
          <div className="col-4">
            <h3 className="mb-3">Install App</h3>
            <div className="footer-details">
              <p>Available on Google Play Services & App store</p>
              <div className="pay">
                <Link>
                    <img src={google} alt="" className="img-fluid p-2 my-2" />
                </Link>
                <Link>
                    <img src={app} alt="" className="img-fluid p-2 my-2" />
                </Link>
              </div>
              <p className="mb-3">Payment Methods</p>
              <Link className="pay">
                    <img src={pay} alt="" className="img-fluid p-1 " />
                </Link>
            </div>
          </div>
        </div>
          <hr />
          <div className="row d-flex justify-content-between">
            <div className="col-3">
              <p>&copy; Developped by Rouita Chaimae 2023</p>
            </div>
            <div className="col-3 d-flex justify-content-between">
              <Link className="policy">Privacy Policy</Link>
              <Link className="policy">Terms Of Use</Link>
              <Link className="policy">Contact Me</Link>
            </div>
          </div>
      </div>


    </footer>
  </>
}

export default footer
