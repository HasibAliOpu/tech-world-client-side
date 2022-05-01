import axios from "axios";
import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://fierce-fjord-73876.herokuapp.com/item`
      );
      setProducts(data);
    })();
  }, []);
  return (
    <div>
      <h1>Available Product {products.length}</h1>
      <div className="grid grid-cols-3 gap-5 m-20">
        {products.slice(6).map((Item) => (
          <Inventory key={Item._id} item={Item}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
