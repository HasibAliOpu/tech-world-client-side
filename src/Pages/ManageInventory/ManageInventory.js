import { faTrashCan, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const url = `https://fierce-fjord-73876.herokuapp.com/item?page=${page}&count=12`;

    (async () => {
      const { data } = await axios.get(url);
      setProducts(data);
    })();
  }, [page]);

  useEffect(() => {
    fetch("https://fierce-fjord-73876.herokuapp.com/itemCount")
      .then((res) => res.json())
      .then((data) => {
        const itemCount = data.itemCount;
        const pages = Math.ceil(itemCount / 12);
        setItemCount(pages);
      });
  }, []);

  const handleDeleteItem = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    const url = `https://fierce-fjord-73876.herokuapp.com/item/${id}`;
    if (proceed) {
      (async () => {
        const { data } = await axios.delete(url);
        const newProduct = products.filter((product) => product._id !== id);
        setProducts(newProduct);
        if (!data.success) {
          toast.error(data.error);
        }
        toast.success(data.message);
      })();
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
            <p className="text-slate-600">{product.description}</p>
            <p className="text-green-500 text-lg">
              quantity:
              {product.quantity === 0 ? (
                <span className="text-red-600">Out of Stock</span>
              ) : (
                product.quantity
              )}
            </p>
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
      <div className="text-center ">
        {[...Array(itemCount).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            className={
              page === number
                ? "bg-sky-300  font-bold text-sm text-white mr-1 border-2 border-sky-300 px-3 py-1 rounded"
                : "bg-white font-bold text-sm text-slate-700 mr-1 border-2 border-sky-500 px-3 py-1 rounded"
            }
          >
            {number + 1}
          </button>
        ))}
      </div>
      <span className="flex justify-center">
        <Link
          to="/addItem"
          className="text-white font-semibold font-mono bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-full px-12 py-2.5 text-center  my-4"
        >
          Add New Item
        </Link>
      </span>
    </div>
  );
};

export default ManageInventory;
