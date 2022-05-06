import React from "react";
import { Link } from "react-router-dom";

const Inventory = ({ item }) => {
  const { _id, name, img, description, price, supplier, quantity } = item;

  return (
    <div data-aos="zoom-in-down" className="shadow-xl px-3 rounded-lg relative">
      <img src={img} alt="" />
      <h1 className="text-xl">Name: {name}</h1>
      <h1 className="text-lg text-yellow-500">Price: ${price}</h1>
      <p className="text-slate-600">{description}</p>
      <p className="text-green-400 text-lg">Quantity:{quantity}</p>
      <p className="mb-8">
        <small>Supplier: {supplier}</small>
      </p>
      <br />
      <Link
        className="bg-indigo-500 absolute bottom-2 left-20 rounded-full w-1/2 text-center px-2 py-1 text-slate-200 font-semibold"
        to={`/inventory/${_id}`}
      >
        Update
      </Link>
    </div>
  );
};

export default Inventory;
