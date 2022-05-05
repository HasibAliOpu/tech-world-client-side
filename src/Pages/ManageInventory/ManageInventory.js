import { faTrashCan, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="mt-14">
      <h1 className="text-center font-semibold font-mono text-2xl">
        All Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 mx-6 md:mx-14">
        {products.map((product) => (
          <div
            data-aos="zoom-in-down"
            key={product._id}
            className="px-4 rounded-lg shadow-lg relative"
          >
            <img src={product.img} alt="" />
            <h1 className="text-xl">Name: {product.name}</h1>
            <h1 className="text-lg text-yellow-500">Price: ${product.price}</h1>
            <p>{product.description}</p>
            <p>quantity:{product.quantity}</p>
            <p className="mb-8">
              <small>Supplier: {product.supplier}</small>
            </p>
            <br />
            <div className="absolute bottom-3">
              <Link
                className="bg-indigo-500  rounded-full px-2 py-1 mr-3 text-slate-100 font-semibold"
                to={`/inventory/${product._id}`}
              >
                Update
                <FontAwesomeIcon className="ml-1" icon={faUpload} />
              </Link>
              <button
                onClick={() => handleDeleteItem(product._id)}
                className="bg-red-500 rounded-full px-2  text-slate-100 font-semibold"
              >
                Delete
                <FontAwesomeIcon className="ml-1" icon={faTrashCan} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;
