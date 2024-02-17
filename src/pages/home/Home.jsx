import React from "react";
import Card from "../../components/card/Card";
import Chicken from "../../components/chicken/Chicken";
import Hero from "../../components/hero/Hero";
import Menu from "../../components/menu/Menu";
import Premium from "../../components/premium/Premium";

const Home = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <Premium />
      <Chicken />
      <Card />
    </div>
  );
};

export default Home;
