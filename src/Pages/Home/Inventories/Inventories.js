import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetAllProduct from "../../Hooks/useGetAllProduct";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [products] = useGetAllProduct();
  return (
    <div>
      <h1 className="text-3xl my-4 font-semibold font-serif">
        Our Top Products
      </h1>
      <div className="grid grid-cols-3 gap-5 mx-20">
        {products.slice(6).map((Item) => (
          <Inventory key={Item._id} item={Item}></Inventory>
        ))}
      </div>
      <Link className="bg-blue-400" to="manageInventory">
        Manage Inventory
      </Link>
    </div>
  );
};

export default Inventories;
