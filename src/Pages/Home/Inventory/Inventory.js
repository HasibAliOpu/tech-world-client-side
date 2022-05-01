import React from "react";
import { Link } from "react-router-dom";

const Inventory = ({ item }) => {
  const { _id, name, img, description, price, supplier, quantity } = item;

  return (
    <div className="border border-slate-400 p-8 rounded">
      <img src={img} alt="" />
      <h1>Name: {name}</h1>
      <h1>Price: ${price}</h1>
      <p>{description}</p>
      <p>quantity:{quantity}</p>
      <small>{supplier}</small>
      <br />
      <Link className="bg-indigo-200" to={`/inventory/${_id}`}>
        Update
      </Link>
    </div>
  );
};

export default Inventory;
