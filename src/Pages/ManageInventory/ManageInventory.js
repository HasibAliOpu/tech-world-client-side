import React from "react";
import useGetAllProduct from "../Hooks/useGetAllProduct";

const ManageInventory = () => {
  const [products] = useGetAllProduct();
  return (
    <div>
      <h1>all Products</h1>
      <div className="grid grid-cols-3 gap-5 my-5 mx-14">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-slate-400 p-8 rounded"
          >
            <img src={product.img} alt="" />
            <h1>Name: {product.name}</h1>
            <h1>Price: ${product.price}</h1>
            <p>{product.description}</p>
            <p>quantity:{product.quantity}</p>
            <small>Supplier: {product.supplier}</small>
            <br />
            <button className="bg-red-700">DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;
