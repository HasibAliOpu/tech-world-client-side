import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <span className="flex justify-between px-10 py-2 bg-sky-200">
        <span className="text-4xl text-slate-700 font-semibold font-serif">
          <Link to="/">Tech World</Link>
        </span>
        <span className="flex items-center gap-3 text-lg text-sky-500">
          <CustomLink className=" " to="/">
            Home
          </CustomLink>
          {user ? (
            <>
              <CustomLink to="/addItem">Add Item</CustomLink>
              <CustomLink to="/myItem">My Items</CustomLink>
              <CustomLink to="/manageInventory">Manage Items</CustomLink>
              <button onClick={() => signOut(auth)}>LogOut</button>
              <p className="text-sky-700">
                {user?.displayName ? user.displayName : "User"}
              </p>
            </>
          ) : (
            <CustomLink to="/login">Login</CustomLink>
          )}
        </span>
      </span>
    </div>
  );
};

export default Header;
