import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  register } from "../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Message from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";

const Signup = ({ location, history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const dispatch = useDispatch();
    const redirect = location && location.search ? location.search.split("=")[1] : '/';
  
    const userRegister = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userRegister;
  
    Signup.propTypes = {
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
    };
  
    useEffect(() => {
      if (userInfo && history) {
        history.push(redirect);
      }
    }, [userInfo, history, redirect]);
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(register(name, email, password));
    };

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">Sign Up</h2>
                <p className="text-center mb-3">Join us !!</p>

                {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}

                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label mail mb-3">
                       Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="enter name here ..."
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label mail mb-3">
                       Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="enter email here ..."
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label mail mb-3">
                       password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="enter password here..."
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>

                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p>Have an account?</p>
                    <Link 
                    to={redirect ? `/login?redirect=${redirect}` : "/login"} 
                    className="form-link">
                      Log In
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
