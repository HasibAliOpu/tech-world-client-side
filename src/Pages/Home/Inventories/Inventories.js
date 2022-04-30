import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fierce-fjord-73876.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>Available Product {products.length}</h1>
      <div className="grid grid-cols-3 gap-5 m-20">
        {products.slice(6).map((Item) => (
          <Inventory key={Item.id} item={Item}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
