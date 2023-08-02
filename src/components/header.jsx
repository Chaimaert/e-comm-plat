import React from "react"
import { BiSolidPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from "react-router-dom"
import logo from '../assets/images/apneck.png'


const header = () => {
  return <>
    <header className="header-top-strip p-1 shadow-sm">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-6">
            <p>The trending outfits at 100% off</p>
          </div>
          <div className="col-6 d-flex justify-content-between">
            <div>
            <a href="tel:+212661085174" color="black"> <BiSolidPhoneCall /> Call us +212661085174 </a>
            </div>
            <div>
              <Link><BiSolidPhoneCall className="fs-3 mx-4" size={20}  /></Link>
              <Link><AiOutlineMail className="fs-3 mx-4" size={20} /></Link>
            </div>
          </div>
        </div>
      </div>

    </header>
  
    <header className="header-upper">
      <div className="container-xxl">
        <div className="row">
          <div className="col-2">
          <Link to='/'><img src={logo} className="img-fluid logo" /></Link>
          </div>
          <div className="col-3">
            
          </div>
          <div className="col-4 d-flex align-items-center justify-content-between">
            <Link to={'/'}>Home</Link>
            <Link to={'shop'}>Shop</Link>
            <Link to={'blog'}>Blog</Link>
            <Link to={'about'}>About</Link>
            <Link to={'contact'}>Contact</Link>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </header>
  
  </>
}

export default header
