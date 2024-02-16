import React from "react";
import { NavLink } from "react-bootstrap";
import { phone, vektor } from "../../assets";
import "./Premium.scss";

const Premium = () => {
  return (
    <div>
      <section className="premium">
        <div className="container">
          <div className="premium__wrapper">
            <div className="premium__left">
              <img src={phone} alt="rasm" />
            </div>
            <div className="premium__right">
              <h2 className="premium__title">
                Premium <span className="premium__span">Quality</span> For Your
                Health
              </h2>
              <ul>
                <li className="premium__item">
                  Premium quality food is made with ingredients that are packed
                  with essential vitamins, minerals.
                </li>
                <li className="premium__item">
                  These foods promote overall wellness by support healthy
                  digestion and boosting immunity
                </li>
              </ul>
              <button className=" premium__btn">
                <NavLink>
                  {" "}
                  Download <img src={vektor} alt="rasm" />{" "}
                </NavLink>
              </button>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </div>
  );
};

export default Premium;
