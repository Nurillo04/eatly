import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { email, loginlogo, look, rasml } from "../../assets";
import "./Login.scss";

const Login = () => {
  const log = useNavigate();
  const goBack = () => {
    log(-1);
  };
  return (
    <div>
      <div className="login">
        <div className="container">
          <div>
            <img src={loginlogo} alt="rasm" />
            <button onClick={goBack} className="login__back">
              {" "}
              Back
            </button>
          </div>
          <div className="login__wrapper">
            <div className="login__left">
              <div>
                <h2 className="login__title">Sign Up To eatly</h2>
                <form>
                  <div className="login__div">
                    <img src={email} alt="rasm" />
                    <input
                      type="email"
                      className="login__email"
                      name="user-email"
                      id="user-email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="login__div">
                    <img src={look} alt="rasm" />
                    <input
                      type="password"
                      className="login__password"
                      name="user-password"
                      id="user-password"
                      placeholder="Password"
                    />
                  </div>
                  <Link to="/forget" className="login__forget">
                    Forget Password ?
                  </Link>
                  <button type="submit" className="login__btn">
                    sign up
                  </button>
                </form>

                <p className="login__subtitle">
                  Create A New Account?
                  <Link to="/register" className="login__sign">
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className="login__bottom">
                <p className="login__bottom-text">Privacy Policy</p>
                <p className="login__bottom-text">Copyright 2022</p>
              </div>
            </div>

            <div className="login__right">
              <img src={rasml} alt="rasm" width={359} />
              <h2 className="login__title2">Find Foods With Love </h2>
              <p className="login__right-text">
                Eatly Is The Food Delivery Dashboard And Having More Than 2K+
                Dishes Including Asian, Chinese, Italians And Many More. Our
                Dashboard Helps You To Manage Orders And Money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
