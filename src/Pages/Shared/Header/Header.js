import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../../CustomLink/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-sky-200 text-sky-400 relative ${
        isOpen ? "mb-60" : "mb-0"
      }`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-xl pl-1 md:hidden"
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <div
        className={`md:flex justify-between px-10 py-2  bg-sky-200  w-full md:static  absolute ${
          isOpen ? "top-7" : "top-[-250px]"
        }`}
      >
        <span className="text-4xl text-sky-500 font-semibold font-serif">
          <Link to="/">Tech World</Link>
        </span>
        <span className="md:flex items-center gap-3 text-lg text-sky-500">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          {user ? (
            <>
              <CustomLink to="/manageInventory">Manage Items</CustomLink>
              <CustomLink to="/addItem">Add Item</CustomLink>
              <CustomLink to="/myItem">My Items</CustomLink>

              <button
                className="text-red-500 font-mono font-semibold"
                onClick={() => signOut(auth)}
              >
                LogOut
              </button>
              <p className="text-sky-700">
                {user?.displayName ? user.displayName : "User"}
              </p>
            </>
          ) : (
            <CustomLink
              className="text-green-500 font-mono font-semibold"
              to="/login"
            >
              Login
            </CustomLink>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
