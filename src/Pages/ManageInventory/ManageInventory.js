import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useGetAllItems from "../Hooks/useGetAllItems";

const ManageInventory = () => {
  const [products] = useGetAllItems();

  const handleDeleteItem = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    const url = `http://localhost:5000/item/${id}`;
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      // (async () => {
      //   const { data } = await axios.delete(url);
      //   console.log(data);
      // })();
    }
  };
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
            <Link className="bg-indigo-600" to={`/inventory/${product._id}`}>
              Update
            </Link>
            <button
              onClick={() => handleDeleteItem(product._id)}
              className="bg-red-700"
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;
