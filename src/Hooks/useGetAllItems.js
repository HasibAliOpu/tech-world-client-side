import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/item";

    (async () => {
      const { data } = await axios.get(url);
      setProducts(data);
    })();
  }, []);
  return [products, setProducts];
};

export default useGetAllItems;
