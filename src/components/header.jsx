import React from "react"
import { BiSolidPhoneCall } from 'react-icons/bi'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { BiLogoGmail } from 'react-icons/bi'
import { Link } from "react-router-dom"
import { FaClipboardList } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import logo from '../assets/images/apneck.png'


const header = () => {
  return <>
    <header className="header-top-strip px-4 p-1 shadow-sm">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-6">
            <p>The trending outfits at 100% off</p>
          </div>
          <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+212661085174" color="black"> <BiSolidPhoneCall /> Call us +212661085174 </a>
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
          <Link to='/'><img src={logo} className="img-fluid logo" /></Link>
          </div>
          <div className="col-3 d-flex align-items-center mt-3">
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">All</span>
                  <input type="text" className="form-control p-2" placeholder="Search Products" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <button className="input-group-text" id="basic-addon2">Search</button>
              </div>
          </div>
          <div className="nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
            <Link to={'/'}>Home</Link>
            <Link to={'shop'}>Shop</Link>
            <Link to={'blog'}>Blog</Link>
            <Link to={'about'}>About</Link>
            <Link to={'contact'}>Contact</Link>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-around">
                <Link to={'wishlist'} className="d-flex"><FaClipboardList className="mx-2 m-auto"/>
                <p>WishList</p>
                </Link>
                <Link to={'login'} className="d-flex"><MdAccountCircle className=" mx-2 m-auto"/>
                <p>Account</p>
                </Link>
                <Link to={'cart'} className="d-flex"><PiShoppingCartSimpleFill className=" mx-2 m-auto"/>
                <p>Cart</p>
                </Link>
          </div>
        </div>
      </div>
    </header>
  
  </>
}

export default header
