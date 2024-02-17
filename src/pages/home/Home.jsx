import React from "react";
import Card from "../../components/card/Card";
import Chicken from "../../components/chicken/Chicken";
import Customer from "../../components/customer/Customer";
import Get from "../../components/get/Get";
import Hero from "../../components/hero/Hero";
import Menu from "../../components/menu/Menu";
import Premium from "../../components/premium/Premium";
import Purchases from "../../components/purchases/Purchases";

const Home = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <Premium />
      <Chicken />
      <Card />
      <Purchases />
      <Customer />
      <Get />
    </div>
  );
};

export default Home;
