import React from "react";
import { Link } from "react-router-dom";

const Inventory = ({ item }) => {
  const { _id, name, img, description, price, supplier, quantity } = item;

  return (
    <div className="border border-sky-400 px-2 rounded relative">
      <img src={img} alt="" />
      <h1 className="text-xl">Name: {name}</h1>
      <h1 className="text-lg text-yellow-500">Price: ${price}</h1>
      <p>{description}</p>
      <p>Quantity:{quantity}</p>
      <p className="mb-2">
        <small>Supplier: {supplier}</small>
      </p>
      <br />
      <Link
        className="bg-indigo-500 absolute bottom-1 left-20 rounded-full w-1/2 text-center px-2 py-1 text-slate-200 font-semibold"
        to={`/inventory/${_id}`}
      >
        Update
      </Link>
    </div>
  );
};

export default Inventory;
