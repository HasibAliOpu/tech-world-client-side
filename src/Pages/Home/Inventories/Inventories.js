import React from "react";
import { Link } from "react-router-dom";
import useGetAllItems from "../../Hooks/useGetAllItems";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [products] = useGetAllItems();
  return (
    <div>
      <h1 className="text-3xl text-cyan-400 my-9 font-semibold font-serif text-center">
        Our Top Products
      </h1>
      <div className="grid grid-cols-3 gap-5 mx-20 px-16">
        {products.slice(0, 6).map((Item) => (
          <Inventory key={Item._id} item={Item}></Inventory>
        ))}
      </div>
      <span className="flex justify-center">
        <Link
          to="/manageInventory"
          className="text-white font-semibold font-mono bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-full px-12 py-2.5 text-center  my-4"
        >
          Manage Inventory
        </Link>
      </span>
    </div>
  );
};

export default Inventories;
