import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div>
      <section className="cards">
        <div className="container">
          <div className="cards__wrapper">
            <h1 className="cards__title">
              Our Top <span className="cards__span">Dishes</span>
            </h1>
            <nav>
              <ul>
                <li></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
