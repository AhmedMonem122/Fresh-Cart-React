import { useState } from "react";
import axios from "../apis/axios";
import { useEffect } from "react";

const useFetchPagination = (apiUrl) => {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getFetchPagination = async (pageNumber) => {
    setLoading(true);

    const {
      data: {
        data,
        metadata: { numberOfPages },
      },
    } = await axios.get(`${apiUrl}?page=${pageNumber}&limit=8`);

    setItems(data);

    // console.log(numberOfPages);

    setPageCount(numberOfPages);

    setLoading(false);
  };

  useEffect(() => {
    getFetchPagination(page);
  }, [page]);

  return [items, loading, pageCount, setPage];
};

export default useFetchPagination;
