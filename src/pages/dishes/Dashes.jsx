import React from "react";
import Asked from "../../components/asked/Asked";
// import Card from "../../components/card/Card";
import DishesCart from "../../components/dishesCart/DishesCart";

const Dashes = () => {
  return (
    <div>
      <DishesCart />
      {/* <Card /> */}
      <Asked />
    </div>
  );
};

export default Dashes;
