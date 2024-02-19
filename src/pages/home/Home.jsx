import React from "react";
import Card from "../../components/card/Card";
import Chicken from "../../components/chicken/Chicken";
import Customer from "../../components/customer/Customer";
import Footer from "../../components/footer/Footer";
import Get from "../../components/get/Get";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Menu from "../../components/menu/Menu";
import Premium from "../../components/premium/Premium";
import Purchases from "../../components/purchases/Purchases";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Menu />
      <Premium />
      <Chicken />
      <Card />
      <Purchases />
      <Customer />
      <Get />
      <Footer />
    </div>
  );
};

export default Home;
