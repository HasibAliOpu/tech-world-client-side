import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span className="flex justify-between px-10 py-2">
        <span className="text-4xl font-semibold font-serif">
          <h1>Tech World</h1>
        </span>
        <span className="flex gap-3 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/addItem">Add Item</Link>
          <Link to="/manageInventory">Manage Inventory</Link>
          <Link to="/login">Login</Link>
        </span>
      </span>
    </div>
  );
};

export default Header;