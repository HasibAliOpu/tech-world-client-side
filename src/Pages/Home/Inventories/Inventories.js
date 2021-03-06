import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://fierce-fjord-73876.herokuapp.com/item";

    (async () => {
      const { data } = await axios.get(url);
      setProducts(data);
    })();
  }, []);
  return (
    <div>
      <h1 className="md:text-3xl text-2xl text-cyan-400 my-9 font-semibold font-serif text-center">
        Our Top Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mx-20 mb-2 px-5 md:px-16">
        {products.slice(0, 6).map((Item) => (
          <Inventory key={Item._id} item={Item}></Inventory>
        ))}
      </div>
      <span className="flex justify-center">
        <Link
          to="/manageInventory"
          className="text-white font-semibold font-mono bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-full px-12 py-2.5 text-center  my-4"
        >
          Manage Inventories
        </Link>
      </span>
    </div>
  );
};

export default Inventories;
