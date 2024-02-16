import React from "react";
import { food } from "../../assets";
import "./Hero.scss";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__left">
              <div className="hero__line">
                <hr className="hero__hr" />
                <p className="hero__subtitle">OVER 1000 USERS</p>
              </div>
              <h1 className="hero__title">
                Enjoy Foods All Over The{" "}
                <span className="hero__span">World</span>
              </h1>
              <p className="hero__text">
                EatLy help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a<span className="hero__span1">$20 bonus.</span>
              </p>
              <button className="hero__btn">Get Started</button>
            </div>
            <div className="hero__right">
              <img src={food} alt="rasm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
