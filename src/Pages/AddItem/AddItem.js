import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (itemInfo, event) => {
    const url = `http://localhost:5000/item`;

    try {
      const { data } = await axios.post(url, itemInfo);
      toast.success(data.message);
      event.target.reset();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="md:w-1/2 my-5 md:mx-auto mx-5 p-4 border-4 bg-sky-400  border-sky-400 rounded-xl">
      <h1 className="text-3xl my-4 font-semibold font-serif text-center text-slate-100">
        Add Your Item
      </h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="shadow-lg outline-none   mb-2 p-2 text-lg rounded-full"
          placeholder="Email"
          type="email"
          value={user.email}
          readOnly
          required
          {...register("email")}
        />
        <input
          className="shadow-lg outline-none  mb-2 p-2 text-lg rounded-full"
          placeholder="Item Name"
          type="text"
          required
          {...register("name")}
        />

        <input
          className="shadow-lg outline-none  mb-2 p-2 text-lg rounded-full"
          placeholder="Price"
          type="text"
          required
          {...register("price")}
        />
        <input
          className="shadow-lg outline-none mb-2 p-2 text-lg rounded-full"
          placeholder="Quantity"
          type="number"
          required
          {...register("quantity", { min: 1, max: 99 })}
        />
        <input
          className="shadow-lg outline-none  mb-2 p-2 text-lg rounded-full"
          placeholder="Supplier"
          type="text"
          required
          {...register("supplier")}
        />
        <input
          className="shadow-lg outline-none  mb-2 p-2 text-lg rounded-full"
          placeholder="Photo URL"
          type="url"
          required
          {...register("img")}
        />

        <textarea
          className="shadow-lg outline-none  mb-2 p-2 text-lg rounded-full"
          placeholder="Description"
          type="text"
          required
          {...register("description")}
        />
        <input
          className="transition ease-in-out delay-150  bg-yellow-300  text-xl  hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 hover:text-white duration-300  py-2 my-5 w-1/2 mx-auto rounded-full "
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddItem;
