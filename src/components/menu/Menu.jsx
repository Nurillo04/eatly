import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div>
      <section className="menu">
        <div className="container">
          <div className="menu__wrapper">
            <nav className="menu__nav">
              <ul className="menu__list">
                <li className="menu__item1">10K+</li>
                <li className="menu__item2">
                  Satisfied Costumers All Great Over The World{" "}
                </li>
              </ul>
              <ul className="menu__list">
                <li className="menu__item1">4M</li>
                <li className="menu__item2">
                  Healthy Dishes SoldIncluding Milk Shakes Smooth{" "}
                </li>
              </ul>
              <ul className="menu__list">
                <li className="menu__item1">99.99%</li>
                <li className="menu__item2">
                  Reliable Customer SupportWe Provide Great Experiences
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
