import React from "react";
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
    </div>
  );
};

export default Home;
