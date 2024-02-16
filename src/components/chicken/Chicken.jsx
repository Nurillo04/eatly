import React from "react";
import { bookmark, chicken, start } from "../../assets";
import "./Chicken.scss";

const Chicken = () => {
  return (
    <div>
      <section className="chicken">
        <div className="container">
          <div className="chicken__wrapper">
            <div className="chicken__top">
              {/* <img src={chicken} alt="rasm" /> */}
            </div>
            <div className="chicken__bottom">
              <h4>The Chicken King</h4>
              <div className="chicken__center">
                <p className="chicken__text">24min •</p>
                <img src={start} alt="rasm" width="23" height={23} />
                <p className="chicken__text">4.8</p>
              </div>
              <img src={bookmark} alt="rasm" height={60} width="60" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chicken;
