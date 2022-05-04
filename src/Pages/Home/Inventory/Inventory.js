import React from "react";
import { Link } from "react-router-dom";

const Inventory = ({ item }) => {
  const { _id, name, img, description, price, supplier, quantity } = item;

  return (
    <div className="border border-slate-400 px-2 rounded relative">
      <img src={img} alt="" />
      <h1>Name: {name}</h1>
      <h1>Price: ${price}</h1>
      <p>{description}</p>
      <p>quantity:{quantity}</p>
      <p className="mb-2">
        <small>{supplier}</small>
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
