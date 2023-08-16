import { useState } from "react";
import axios from "../apis/axios";

const useFetch = (apiUrl) => {
  const [items, setItems] = useState([]);

  const getFetch = async () => {
    const {
      data: { data },
    } = await axios.get(apiUrl);

    setItems(data);
  };

  return [items, setItems, getFetch];
};

export default useFetch;
