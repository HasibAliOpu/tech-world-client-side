import React from "react";

const Product = ({ product }) => {
  const { name, img, description, price, seller, quantity } = product;
  return (
    <div className="border border-slate-400">
      <img src={img} alt="" />
      <h1>Name: {name}</h1>
      <h1>Price: ${price}</h1>
      <p>{description}</p>
      <p>quantity:{quantity}</p>
      <small>{seller}</small>
    </div>
  );
};

export default Product;
