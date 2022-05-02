import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span className="flex justify-between px-10 py-2 bg-sky-200">
        <span className="text-4xl font-semibold font-serif">
          <Link to="/">Tech World</Link>
        </span>
        <span className="flex items-center gap-3 text-lg">
          <Link to="/">Home</Link>
          <Link to="/addItem">Add Item</Link>
          <Link to="/myItem">My Items</Link>
          <Link to="/manageInventory">Manage Inventory</Link>
          <Link to="/login">Login</Link>
        </span>
      </span>
    </div>
  );
};

export default Header;
