import React from "react";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Inventories from "../Inventories/Inventories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Discount />
      <Inventories />
    </div>
  );
};

export default Home;
