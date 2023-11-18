import { Link } from "react-router-dom";
import header from "../components/header";
import { useDispatch, useSelector } from "react-redux";

const PlaceOrderScreen = () => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const placeOrderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header />
      <div className="container">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="cold-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>Admin Chaimae</p>
                <p>admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
