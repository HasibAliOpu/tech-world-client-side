import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ItemDetail = () => {
  const { inventoryId } = useParams();
  const [item, setItem] = useState([]);
  const [reload, setIsReload] = useState(true);
  const increaseRef = useRef();
  useEffect(() => {
    const url = `https://fierce-fjord-73876.herokuapp.com/item/${inventoryId}`;

    (async () => {
      const { data } = await axios.get(url);
      setItem(data);
    })();
  }, [inventoryId, reload]);

  const { name, img, description, price, quantity, supplier } = item;
  let newQuantity = quantity;

  /* Decreasing the Quantity */
  const handleDecreaseQuantity = async () => {
    newQuantity = newQuantity - 1;
    if (newQuantity < 0) {
      return toast.warning("This Item is Out Of Stock!!");
    }
    const Quantity = { newQuantity };
    const url = `https://fierce-fjord-73876.herokuapp.com/item/${inventoryId}`;
    const { data } = await axios.put(url, Quantity);
    if (!data.success) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      setIsReload(!reload);
    }
  };

  /* Increasing Quantity */
  const handleIncreaseQuantity = async () => {
    const increaseValue = parseInt(increaseRef.current.value);
    if (increaseValue <= 0 || !increaseValue) {
      return toast.warn("Please Provide Valid Number");
    }
    newQuantity = parseInt(newQuantity) + increaseValue;
    const Quantity = { newQuantity };

    const url = `https://fierce-fjord-73876.herokuapp.com/item/${inventoryId}`;
    const { data } = await axios.put(url, Quantity);
    if (!data.success) {
      toast.error(data.error);
    } else {
      toast.success("Successfully Added Item Quantity!!");
      setIsReload(!reload);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-2 p-5 md:p-28">
        <span className="md:border-r-2 border-yellow-300 pr-2">
          <img className="w-full" src={img} alt="" />
          <p className="border-t-2 border-red-500 pt-1 ">{description}</p>
        </span>
        <div className="flex items-center text-center pl-3 font-semibold">
          <span>
            <h1 className="text-3xl py-5">Name: {name}</h1>
            <p className="py-1 text-yellow-500">Price: ${price}</p>
            <p className="text-cyan-400">
              Quantity:
              {newQuantity === 0 ? (
                <span className="text-red-600">Out of stock</span>
              ) : (
                newQuantity
              )}
            </p>
            <p className="text-slate-500">Supplier: {supplier}</p>
            <div className="my-3">
              <p className="text-blue-500 text-lg">restock the items</p>
              <input
                type="number"
                name="quantity"
                ref={increaseRef}
                className="border border-green-500 rounded mr-2 outline-none pl-2 mb-1"
              />
              <button
                onClick={handleIncreaseQuantity}
                className="bg-indigo-400 px-5 py-1 text-white rounded-full hover:bg-indigo-500"
              >
                Add Quantity
              </button>
            </div>
            <div className="border-b-2 border-sky-300 mx-3 my-1" />
            <button
              onClick={handleDecreaseQuantity}
              className="bg-green-400 mt-4 px-10 py-1 text-white rounded-full hover:bg-green-500"
            >
              Delivered
            </button>
          </span>
        </div>
      </div>
      <span className="flex justify-center">
        <Link
          to="/manageInventory"
          className="text-white font-semibold font-mono bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-full px-12 py-2.5 text-center  my-4"
        >
          Manage Inventories
        </Link>
      </span>
    </div>
  );
};

export default ItemDetail;
