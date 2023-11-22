import { useContext, useState } from "react";
import {useHistory} from "react-redux";
import { ShopContext } from "./shopcontext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { NavLink, Link, useLocation } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import user from "../assets/images/user.svg";
import Mylogo from "../assets/images/Mylogo.png";

const Header = () => {

  const [ keyword, setKeyword ] = useState();
  let history = useHistory();

  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartProducts} = useContext(ShopContext);
  const totalProducts = getTotalCartProducts();
  const location = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="navbar-top p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between d-none d-md-flex">
              <div className="col-md-8 me-auto">
                <p>The trending outfits at 100% off</p>
              </div>

              <div className="col-md2 social-icons ">
                <Link 
                  className="links fs-5"
                  to="https://www.instagram.com/noza.agency/"
                  target="_blank">
                  <AiFillInstagram />
                </Link>

                <Link 
                  className="links fs-5"
                  to="https://www.facebook.com/Noza.agency.morocco/"
                  target="_blank">
                  <RiFacebookCircleFill />
                </Link>

                <Link 
                  className="links fs-5"
                  to="https://twitter.com"
                  target="_blank">
                  <AiOutlineTwitter />
                </Link>
                
                <Link className="links fs-5"
                target="_blank">
                  <BiLogoGmail />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="navbar-middle sticky-top p-2 p-md-2 p-lg-2">
        <div className="container-xxl">
          <div className="row align-items-center m-0">
            <div className="col-md-2 d-flex justify-content-center">
              <button
                className="navbar-toggler d-md-none "
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon">
                  {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </span>
              </button>

              <Link to="/">
                <img src={Mylogo} className="img-fluid logo" />
              </Link>

              <button className="cart-span fs-3 d-md-none">
                <Link
                  to="cart"
                  className={
                    location.pathname === "/cart" ? "active" : "not-active"
                  }
                >
                  <PiShoppingCartSimpleFill />
                  <b>
                    <span>{totalProducts}</span>
                  </b>
                </Link>
              </button>

              <button className="cart-span-2 fs-3 d-md-none">
                <Link
                  to="login"
                  className={
                    location.pathname === "/login" ? "active" : "not-active"
                  }
                >
                  <MdAccountCircle />
                </Link>
              </button>
            </div>

            <div className="col-md-10 row col-lg-10">
              <div className="col-md-3 m-auto">
                <div className="input-group d-none d-md-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
              </div>

              <div className="col-md-6 m-auto">
                <div className="menu-links mt-2 d-none d-md-flex d-lg-flex">
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/"
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/shop"
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      SHOP
                    </NavLink>
                  </div>

                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/about"
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/contact"
                      className={
                        location.pathname === "/contact"
                          ? "active"
                          : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      CONTACT
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-2 d-none d-md-flex d-lg-flex m-auto">
                    <div
                      className={
                        location.pathname === "login" ? "active" : "not-active"
                      }
                    >
                      <Link
                        onClick={toggleMenu}
                        to="/login"
                        className="d-flex align-items-center color-nav mt-2  me-3"
                      >
                        <MdAccountCircle className="me-1 fs-5" />
                      </Link>
                    </div>
                    <div
                      className={
                        location.pathname === "cart" ? "active" : "not-active"
                      }
                    >
                      <Link
                        onClick={toggleMenu}
                        to="/cart"
                        className="d-flex align-items-center color-nav mt-2  me-3 cart-span-one"
                      >
                        <PiShoppingCartSimpleFill className="me-1 fs-5" />
                        <div>
                          <p>
                            <b>
                              <span> ({totalProducts})</span>
                            </b>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showMenu && (
              <div className="col-md-10 d-md-none mt-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
                <div className="menu-links mt-2">
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      to="/"
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      to="/shop"
                      onClick={toggleMenu}
                    >
                      SHOP
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      to="/about"
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/contact"
                          ? "active"
                          : "not-active"
                      }
                      to="/contact"
                      onClick={toggleMenu}
                    >
                      CONTACT
                    </NavLink>
                  </div>
                </div>

                <div className="menu-bar__actions">
                  <div className="mb-2">
                    <Link
                      to="/login"
                      className={
                        location.pathname === "/login" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      <img src={user} alt="user" className="d-none" />
                      <span>Account</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
