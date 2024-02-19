// import React from "react";

// const ForgetPassword = () => {
//   return <div>ForgetPassword</div>;
// };

// export default ForgetPassword;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { email, loginlogo, rasml } from "../../assets";
import "./ForgetPassword.scss";

const ForgetPassword = () => {
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
                <h2 className="login__title">Forget Password</h2>
                <p className="login__p">Enter Your Mail To Reset</p>
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
                  <Link to="/" className="login__sign">
                    <button type="submit" className="login__verify">
                      Verify
                    </button>
                  </Link>
                  {/* <button type="submit" className="login__verify">
                    Verify
                  </button> */}
                </form>
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

export default ForgetPassword;
