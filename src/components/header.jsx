import { BiSolidPhoneCall } from 'react-icons/bi'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { BiLogoGmail } from 'react-icons/bi'
import { Link, useLocation } from "react-router-dom"
import { FaClipboardList } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import Mylogo from '../assets/images/Mylogo.png'


const header = () => {
  const location = useLocation();
  return <>
    <header className="header-top-strip px-4 p-1 shadow-sm">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-6">
            <p>The trending outfits at 100% off</p>
          </div>
          <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+212661085174" color="black"> <BiSolidPhoneCall /> Call us +212661975556 </a>
              </div>
              <div className="social-icons">
                <Link><AiFillInstagram className="fs-3 mx-2" size={20} /></Link>
                <Link><RiFacebookCircleFill className="fs-3 mx-2" size={20}  /></Link>
                <Link><AiOutlineTwitter className="fs-3 mx-2" size={20}  /></Link>
                <Link><BiLogoGmail className="fs-3 mx-2" size={20} /></Link>
              </div>
          </div>
        </div>
      </div>

    </header>
  
    <header className="header-upper px-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-2 text-center m-auto">
          <Link to='/'><img src={Mylogo} className="img-fluid logo" /></Link>
          </div>
          <div className="col-3 d-flex align-items-center mt-3">
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">All</span>
                  <input type="text" className="form-control p-2" placeholder="Search Products" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <button className="input-group-text" id="basic-addon2">Search</button>
              </div>
          </div>
          <div className="nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
            <Link to={'/'} className={location.pathname === '/' ? 'active' : 'inactive'}>Home</Link>
            <Link to={'shop'} className={location.pathname === '/shop' ? 'active' : 'inactive'}>Shop</Link>
            <Link to={'blog'} className={location.pathname === '/blog' ? 'active' : 'inactive'}>Blog</Link>
            <Link to={'about'} className={location.pathname === '/about' ? 'active' : 'inactive'}>About</Link>
            <Link to={'contact'} className={location.pathname === '/contact' ? 'active' : 'inactive'}>Contact</Link>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-around">
                <Link to={'wishlist'} className={location.pathname === '/wishlist' ? 'active' : 'inactive'}>
                  <div className="d-flex">
                      <FaClipboardList className="mx-2 m-auto"/>
                      <p>WishList</p>
                  </div>
                </Link>
                <Link to={'login'} className={location.pathname === '/login' ? 'active' : 'inactive'}>
                  <div className="d-flex">
                      <MdAccountCircle className=" mx-2 m-auto"/>
                      <p>Account</p>
                  </div>
                </Link>
                <Link to={'cart'} className={location.pathname === '/cart' ? 'active' : 'inactive'}>
                  <div className="d-flex">
                      <PiShoppingCartSimpleFill className=" mx-2 m-auto"/>
                      <p>Cart</p>
                  </div>  
                </Link>
          </div>
        </div>
      </div>
    </header>
  
  </>
}

export default header
