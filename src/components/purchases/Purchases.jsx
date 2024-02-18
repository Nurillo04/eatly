import React from "react";
import {
  chickenHell,
  diver,
  diveras,
  expensive,
  monthIcon,
  suprema,
  trending,
  vocher,
} from "../../assets";
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
            <div className="purchases__right">
              <div className="purchases__month">
                <h6 className="purchases__title6">Purchases</h6>
                <button className="purchases__btn">
                  This month
                  <img src={monthIcon} alt="icon" />
                </button>
              </div>

              <div className="purchases__cardss">
                <div className="purchases__expense">
                  <img src={expensive} alt="rasm" width={50} height="50" />
                  <div className="purchases__hell">
                    <h6 className="purchases__title6">Expense</h6>
                    <p className="purchases__subtitle3">Increased By 10%</p>
                  </div>
                </div>
                <p className="purchases__sum">$409.00</p>
              </div>
              <img
                className="diver"
                src={diver}
                alt="rasm"
                max-width={540}
                height="9"
              />

              <div className="purchases__cardss">
                <div className="purchases__expense">
                  <img src={vocher} alt="rasm" max-width={50} height="50" />
                  <div className="purchases__hell">
                    <h6 className="purchases__title6">Vocher Usage</h6>
                    <p className="purchases__subtitle3">Increased By 5%</p>
                  </div>
                </div>
                <p className="purchases__sum">$45.78</p>
              </div>
              <img
                className="diver"
                src={diveras}
                alt="rasm"
                max-width={540}
                height="9"
              />
            </div>
          </div>
          <hr className="purchases__hr" />
        </div>
      </section>
    </div>
  );
};

export default Purchases;
