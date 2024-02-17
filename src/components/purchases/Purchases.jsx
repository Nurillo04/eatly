import React from "react";
import { chickenHell, suprema, trending } from "../../assets";
import "./Purchases.scss";

const Purchases = () => {
  return (
    <div>
      <section className="purchases">
        <div className="container">
          <div className="purchases__wrapper">
            <div className="purchases__left">
              <h3 className="purchases__title">
                Control <span className="purchases__span"> Purchases</span> Via
                Dashboard
              </h3>

              <div className="purchases__cards">
                <div className="purchases__card">
                  <img src={chickenHell} alt="rasm" width={77} height80 />
                  <div>
                    <h5 className="purchases__title5">Chicken Hell</h5>
                    <p className="purchases__subtitle2">On The Way</p>
                  </div>
                </div>
                <p className="purchases__day">3:09 PM</p>
              </div>

              <div className="purchases__cards">
                <div className="purchases__card">
                  <img src={trending} alt="rasm" width={77} height80 />
                  <div>
                    <h5 className="purchases__title5">Swe Dish</h5>
                    <p className="purchases__subtitle">Delivered</p>
                  </div>
                </div>
                <p className="purchases__day">Yesterday</p>
              </div>

              <div className="purchases__cards">
                <div className="purchases__card">
                  <img src={suprema} alt="rasm" width={77} height80 />
                  <div>
                    <h5 className="purchases__title5">Fish Hell Veg</h5>
                    <p className="purchases__subtitle2">Cancelled</p>
                  </div>
                </div>
                <p className="purchases__day">Yesterday</p>
              </div>
            </div>
            <div className="purchases__left"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchases;
