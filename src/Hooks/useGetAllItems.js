import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://fierce-fjord-73876.herokuapp.com/item";

    (async () => {
      const { data } = await axios.get(url);
      setProducts(data);
    })();
  }, []);
  return [products, setProducts];
};

export default useGetAllItems;
