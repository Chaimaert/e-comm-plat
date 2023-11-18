import { Link } from "react-router-dom";
import header from "../components/header";
import { useDispatch, useSelector } from "react-redux";

const PlaceOrderScreen = () => {
  window.scrollTo(0, 0);


  const  dispatch = useDispatch();
  const cart = useSelector((state))

  const placeOrderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <><header />
      <div className="container">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="cold-md-4 center">
                <div className="alert-success order-box">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )































}