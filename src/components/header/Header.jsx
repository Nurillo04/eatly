import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

import { logo } from "../../assets";
import { korzinka } from "../../assets";

const Header = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header id="navbar">
        <div className="container">
          <div className="wrapper d-flex justify-content-between align-items-center ">
            <div className="wrapper__left d-flex wrapper d-flex justify-content-between align-items-center align-self-center">
              <div className="header__left-logo">
                <img src={logo} alt="rasm" />
              </div>
              <div className="header__left-nav">
                <nav>
                  <ul className="list d-flex justify-content-between align-items-center">
                    <NavLink className="item" to="/home">
                      Home
                    </NavLink>
                    <NavLink className="item" to="/dishes">
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
                    <NavLink to="/" className="btn1-login">
                      <button className="btn1">
                        {name ? name : null}
                        Login
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className="btn2-login">
                      <button className="btn2">Sign up</button>
                    </NavLink>
                  </li>
                </ul>
                <div className="hamburger__menu">
                  <button
                    className={`menu-btn ${isOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                  >
                    <div className="menu-btn-burger"></div>
                    <div className="menu-btn-burger"></div>
                    <div className="menu-btn-burger"></div>
                  </button>
                  <div className={`menu-items ${isOpen ? "open" : ""}`}>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/dishes">Dishes</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Sign Up</NavLink>
                  </div>
                </div>
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
