import { faTrashCan, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyItems = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;
  const url = `https://fierce-fjord-73876.herokuapp.com/myItem?email=${email}`;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setItems(data);
      } catch (error) {
        toast.error(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [url, navigate, user]);

  const handleDeleteItem = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    const url = `https://fierce-fjord-73876.herokuapp.com/item/${id}`;
    if (proceed) {
      (async () => {
        const { data } = await axios.delete(url);
        const newItem = items.filter((item) => item._id !== id);
        setItems(newItem);
        if (!data.success) {
          toast.error(data.error);
        }
        toast.success(data.message);
      })();
    }
  };

  return (
    <div>
      <div className="text-center text-xl my-5">
        <h1>User-Email: {email}</h1>
        <h1>User Added Item</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 mx-6 md:mx-14">
        {items.map((item) => (
          <div
            data-aos="zoom-in-down"
            key={item._id}
            className="px-4 rounded-lg shadow-lg relative"
          >
            <img src={item.img} alt="" />
            <h1 className="text-xl">Name: {item.name}</h1>
            <h1 className="text-lg text-yellow-500">Price: ${item.price}</h1>
            <p className="text-slate-600">{item.description}</p>
            <p className="text-green-500 text-lg">
              quantity:
              {item.quantity === 0 ? (
                <span className="text-red-600">Out of Stock</span>
              ) : (
                item.quantity
              )}
            </p>
            <p className="mb-8">
              <small>Supplier: {item.supplier}</small>
            </p>
            <br />
            <div className="absolute bottom-3">
              <Link
                className="bg-indigo-500  rounded-full px-2 py-1 mr-3 text-slate-100 font-semibold"
                to={`/inventory/${item._id}`}
              >
                Update
                <FontAwesomeIcon className="ml-1" icon={faUpload} />
              </Link>
              <button
                onClick={() => handleDeleteItem(item._id)}
                className="bg-red-500 rounded-full px-2  text-slate-100 font-semibold"
              >
                Delete
                <FontAwesomeIcon className="ml-1" icon={faTrashCan} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
