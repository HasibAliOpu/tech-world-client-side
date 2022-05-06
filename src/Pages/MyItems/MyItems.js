import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const url = `http://localhost:5000/item?email=${email}`;
  (async () => {
    const { data } = await axios.get(url);
    console.log(data);
  })();
  return (
    <div>
      <h1>My Item List</h1>
    </div>
  );
};

export default MyItems;
