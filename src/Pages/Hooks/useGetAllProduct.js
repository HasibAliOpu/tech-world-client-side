import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://fierce-fjord-73876.herokuapp.com/item`
      );
      setProducts(data);
    })();
  }, []);
  return [products];
};

export default useGetAllProduct;
