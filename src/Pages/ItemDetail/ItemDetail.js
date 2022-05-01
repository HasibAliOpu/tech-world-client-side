import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { inventoryId } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://fierce-fjord-73876.herokuapp.com/item/${inventoryId}`
      );
      setItem(data);
    })();
  }, [inventoryId]);

  const { name, img, description, price, quantity, supplier } = item;
  return (
    <div className="grid grid-cols-2 my-2 p-28">
      <span className="border">
        <img className="w-full" src={img} alt="" />
        <p>{description}</p>
      </span>
      <span className="border">
        <h1>Name: {name}</h1>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Supplier: {supplier}</p>
      </span>
    </div>
  );
};

export default ItemDetail;
