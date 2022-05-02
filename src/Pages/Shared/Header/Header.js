import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <span className="flex justify-between px-10 py-2 bg-sky-200">
        <span className="text-4xl font-semibold font-serif">
          <Link to="/">Tech World</Link>
        </span>
        <span className="flex items-center gap-3 text-lg">
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/addItem">Add Item</Link>
              <Link to="/myItem">My Items</Link>
              <Link to="/manageInventory">Manage Items</Link>
              <button onClick={() => signOut(auth)}>LogOut</button>
              <p className="text-sky-700">
                {user?.displayName ? user.displayName : "User"}
              </p>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </span>
      </span>
    </div>
  );
};

export default Header;
