import React from "react";
import { odam, path, star, vocher } from "../../assets";
import "./Customer.scss";

const Customer = () => {
  return (
    <div>
      <section className="customer">
        <div className="container">
          <div className="customer__wrapper">
            <h2 className="customer__title">
              {" "}
              <span className="customer__span">Customer</span> Say
            </h2>

            <div className="customer__cards">
              <div className="customer__card1">
                <div className="customer__card">
                  <div className="customer__expense">
                    <img src={odam} alt="rasm" width={50} height="50" />
                    <div className="customer__hell">
                      <h6 className="customer__title6">Alexander R.</h6>
                      <p className="customer__subtitle3">01 Year With Us </p>
                    </div>
                  </div>
                  <img src={path} alt="rasm" width={40} height="34" />
                </div>
                <div>
                  <p className="customer__text">
                    “ Online invoice payment helps companies save time, are
                    faster and save maximum effort for the clients and save
                    maximum effort. Online invoice payment helps companies save
                    time ”
                  </p>
                  <img src={star} alt="rasm" />
                </div>
              </div>

              <div className="customer__card2">
                <p className="customer__text">
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <img src={star} alt="rasm" />
              </div>

              <div className="customer__card2">
                <p className="customer__text">
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <img src={star} alt="rasm" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customer;
