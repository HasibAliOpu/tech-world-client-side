import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { inventoryId } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/item/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));

    /*  (async () => {
      const { data } = await axios.get(
        `https://fierce-fjord-73876.herokuapp.com/item/${inventoryId}`
      );
      setItem(data);
    })(); */
  }, [inventoryId]);

  const { name, img, description, price, quantity, supplier } = item;
  let newQuantity = quantity;
  const handleManageQuantity = () => {
    newQuantity = newQuantity - 1;

    console.log(newQuantity);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-2 p-5 md:p-28">
      <span className="md:border-r-2 border-yellow-300 pr-2">
        <img className="w-full" src={img} alt="" />
        <p>{description}</p>
      </span>
      <div className="flex items-center text-center pl-3 font-semibold">
        <span>
          <h1 className="text-3xl">Name: {name}</h1>
          <p className="py-1 text-yellow-500">Price: ${price}</p>
          <p>Quantity:{newQuantity} </p>
          <p>Supplier: {supplier}</p>
          <div className="border-b-2 border-sky-300 mx-3 my-1" />
          <button
            onClick={handleManageQuantity}
            className="bg-green-400 mt-4 px-10 py-1 text-white rounded-full hover:bg-green-500"
          >
            Delivered
          </button>
        </span>
      </div>
    </div>
  );
};

export default ItemDetail;
