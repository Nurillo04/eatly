import React from "react";
import { getfood } from "../../assets";
import "./Get.scss";

const Get = () => {
  return (
    <div>
      <section className="get">
        <div className="container">
          <div className="get__wrapper">
            <div className="get__left">
              <h3 className="get__title2">GET 50%</h3>
              <form className=" get__form">
                <input
                  className="get__input"
                  type="email"
                  placeholder=" Enter Your Email Address"
                />
                <button className="get__btn">subscribe</button>
              </form>
            </div>
            <div className="get__left">
              <img
                className="get__img"
                src={getfood}
                alt="rasm"
                width={150}
                height="150 "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Get;
