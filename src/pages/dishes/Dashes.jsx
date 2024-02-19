import React from "react";
import Asked from "../../components/asked/Asked";
// import Card from "../../components/card/Card";
import DishesCart from "../../components/dishesCart/DishesCart";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Dashes = () => {
  return (
    <div>
      <Header />
      <DishesCart />
      {/* <Card /> */}
      <Asked />
      <Footer />
    </div>
  );
};

export default Dashes;
