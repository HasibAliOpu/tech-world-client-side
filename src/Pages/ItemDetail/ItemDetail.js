import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { inventoryId } = useParams();
  const [item, setItem] = useState([]);
  const [newQuantity, setQuantity] = useState(0);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://fierce-fjord-73876.herokuapp.com/item/${inventoryId}`
      );
      setItem(data);
    })();
  }, [inventoryId]);

  const { name, img, description, price, quantity, supplier } = item;
  // setQuantity(Number(quantity));
  const handleManageQuantity = () => {
    const store = Number(quantity) + 1;
    setQuantity(store);
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
        <p>Quantity: {newQuantity}</p>
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
