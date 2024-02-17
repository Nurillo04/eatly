import React from "react";
import {
  add,
  chickenHell,
  heart,
  start,
  suprema,
  trending,
} from "../../assets";
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
              <ul className="cards__item">
                <li className="cards__list">
                  <div className="cards__imgs">
                    <img className="cards__heart" src={heart} alt="rasm" />
                    <img className="cards__img" src={chickenHell} alt="rasm" />
                  </div>
                  <button className="cards__btn">Healthy</button>
                  <h4>The Chicken King</h4>
                  <div className="cards__center">
                    <p className="cards__text">24min •</p>
                    <img src={start} alt="rasm" width="23" height={23} />
                    <p className="cards__text">4.8</p>
                  </div>
                  <div className="cards__bottom">
                    <p className="cards__sum">
                      <span className="cards__spans">$12</span> .99
                    </p>
                    <img src={add} alt="add" />
                  </div>
                </li>

                <li className="cards__list">
                  <div className="cards__imgs">
                    <img className="cards__heart" src={heart} alt="rasm" />
                    <img className="cards__img" src={trending} alt="rasm" />
                  </div>
                  <button className="cards__btn2">Trending</button>
                  <h4>Swe Dish</h4>
                  <div className="cards__center">
                    <p className="cards__text">34min •</p>
                    <img src={start} alt="rasm" width="23" height={23} />
                    <p className="cards__text">4.9</p>
                  </div>
                  <div className="cards__bottom">
                    <p className="cards__sum">
                      <span className="cards__spans">$19</span> .99
                    </p>
                    <img src={add} alt="add" />
                  </div>
                </li>

                <li className="cards__list">
                  <div className="cards__imgs">
                    <img className="cards__heart" src={heart} alt="rasm" />
                    <img className="cards__img" src={suprema} alt="rasm" />
                  </div>
                  <button className="cards__btn3">Suprema</button>
                  <h4>Swe Dish</h4>
                  <div className="cards__center">
                    <p className="cards__text">34min •</p>
                    <img src={start} alt="rasm" width="23" height={23} />
                    <p className="cards__text">4.9</p>
                  </div>
                  <div className="cards__bottom">
                    <p className="cards__sum">
                      <span className="cards__spans">$19</span> .99
                    </p>
                    <img src={add} alt="add" />
                  </div>
                </li>

                <li className="cards__list">
                  <div className="cards__imgs">
                    <img className="cards__heart" src={heart} alt="rasm" />
                    <img className="cards__img" src={chickenHell} alt="rasm" />
                  </div>
                  <button className="cards__btn">Healthy</button>
                  <h4>The Chicken King</h4>
                  <div className="cards__center">
                    <p className="cards__text">24min •</p>
                    <img src={start} alt="rasm" width="23" height={23} />
                    <p className="cards__text">4.8</p>
                  </div>
                  <div className="cards__bottom">
                    <p className="cards__sum">
                      <span className="cards__spans">$12</span> .99
                    </p>
                    <img src={add} alt="add" />
                  </div>
                </li>

                <li className="cards__list">
                  <div className="cards__imgs">
                    <img className="cards__heart" src={heart} alt="rasm" />
                    <img className="cards__img" src={trending} alt="rasm" />
                  </div>
                  <button className="cards__btn2">Trending</button>
                  <h4>Swe Dish</h4>
                  <div className="cards__center">
                    <p className="cards__text">34min •</p>
                    <img src={start} alt="rasm" width="23" height={23} />
                    <p className="cards__text">4.9</p>
                  </div>
                  <div className="cards__bottom">
                    <p className="cards__sum">
                      <span className="cards__spans">$19</span> .99
                    </p>
                    <img src={add} alt="add" />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
