import React from "react";
import Banner from "../Banner/Banner";
import DeliverInfo from "../DeliverInfo/DeliverInfo";
import Discount from "../Discount/Discount";
import Inventories from "../Inventories/Inventories";
import SpecialOffer from "../SpecialOffer/SpecialOffer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Discount />
      <DeliverInfo />
      <Inventories />
      <SpecialOffer />
    </div>
  );
};

export default Home;
