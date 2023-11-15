import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Actions/UserActions";
import PropTypes from "prop-types";
import Message from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";

const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirect = location && location.search ? location.search.split("=")[1] : '/';

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  Login.propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  useEffect(() => {
 
  }, [userInfo, history, redirect]);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/")
    dispatch(login(email, password));
  };


  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h4 className="text-center mail">LOGIN</h4>
                <p className="text-center mb-4 welc">Welcome Back</p>

                {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
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
                  {/* {error && <div className="alert alert-danger">{error}</div>} */}
                  <div className="mb-3">
                    <Link to="/forgotpasword" className="form-link fg">
                      Forgot password ?
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="m-0">Dont have an account ?</p>
                    <Link
                      to={redirect ? `/signup?redirect=${redirect}` : "/signup"}
                      className="form-link mail"
                    >
                      Sign up
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit">Login</button>
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

export default Login;
