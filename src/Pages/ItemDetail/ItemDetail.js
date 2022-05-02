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
    <div className="grid grid-cols-2 my-2 p-28">
      <span className="border">
        <img className="w-full" src={img} alt="" />
        <p>{description}</p>
      </span>
      <span className="border">
        <h1>Name: {name}</h1>
        <p>Price: ${price}</p>
        <p>Quantity:{newQuantity} </p>
        <p>Supplier: {supplier}</p>
        <hr className="mx-3 my-1" />
        <button onClick={handleManageQuantity} className="bg-indigo-400">
          Delivered
        </button>
      </span>
    </div>
  );
};

export default ItemDetail;
