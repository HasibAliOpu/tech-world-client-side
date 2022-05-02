import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/item";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // (async () => {
    //   const { data } = await axios.get(
    //     `https://fierce-fjord-73876.herokuapp.com/item`
    //   );
    //   setProducts(data);
    // })();
  }, []);
  return [products];
};

export default useGetAllItems;
