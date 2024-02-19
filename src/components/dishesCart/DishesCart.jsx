import React, { useEffect, useState } from "react";
import useProduc from "../../app/useProduc";
import "./dishesCart.scss";

const DishesCart = () => {
  const { loading, product, error, getProduct } = useProduc();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search__input"
      />

      {loading ? <h1>Loading...</h1> : null}
      {error ? <h1>{error}</h1> : null}

      {product.length > 0 ? (
        <ul className="cards__item">
          {product
            .filter((product) => {
              if (searchTerm === "") {
                return product;
              } else if (
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => (
              <li key={product.id} className="cards__list">
                <div className="cards__imgs">
                  <img
                    src={product.image2}
                    className="cards__heart"
                    alt="rasm"
                  />
                  <img className="cards__img" src={product.image1} alt="rasm" />
                </div>
                <button className="cards__btn">{product.title}</button>
                <h4>{product.name}</h4>
                <div className="cards__center">
                  <p className="cards__text">{product.min}</p>
                  <img src={product.image3} alt="rasm" width="23" height={23} />
                  <p className="cards__text">{product.reyting}</p>
                </div>
                <div className="cards__bottom">
                  <p className="cards__sum">
                    <span className="cards__spans">{product.dollor}</span>
                  </p>
                  <img src={product.add} alt="add" />
                </div>
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DishesCart;
