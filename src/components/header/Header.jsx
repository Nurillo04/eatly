import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

import { logo } from "../../assets";
import { korzinka } from "../../assets";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="wrapper d-flex justify-content-between align-items-center ">
            <div className="wrapper__left d-flex wrapper d-flex justify-content-between align-items-center align-self-center">
              <div className="header__left-logo">
                <img src={logo} alt="rasm" />
              </div>
              <div className="header__left-nav">
                <nav>
                  <ul className="list d-flex justify-content-between align-items-center">
                    <NavLink className="item" to="home">
                      Home
                    </NavLink>
                    <NavLink className="item" to="dishes">
                      Dishes
                    </NavLink>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="wrapper__right">
              <nav>
                <ul className=" right-list d-flex justify-content-between align-items-center align-self-center">
                  <li>
                    <img src={korzinka} alt="rasm" />
                  </li>
                  <li>
                    <button className="btn1">
                      <NavLink className="btn1-login">Login</NavLink>
                    </button>
                  </li>
                  <li>
                    <button className="btn2">
                      <NavLink className="btn2-login">Sign up</NavLink>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <hr />
        </div>
      </header>
    </div>
  );
};

export default Header;
