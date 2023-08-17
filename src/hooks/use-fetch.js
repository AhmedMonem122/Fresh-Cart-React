import { useState } from "react";
import axios from "../apis/axios";
import { useEffect } from "react";

const useFetch = (apiUrl) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFetch = async () => {
    setLoading(true);
    const {
      data: { data },
    } = await axios.get(apiUrl);

    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    getFetch();
  }, []);

  return [items, loading];
};

export default useFetch;
