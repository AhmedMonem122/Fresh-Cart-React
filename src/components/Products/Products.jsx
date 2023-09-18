import { Fragment, useEffect, useState } from "react";
import axios from "../../apis/axios";
import Pagination from "../Pagination/Pagination";
import ProductItem from "./ProductItem";

const PRODUCTS_URL = "/products/";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);

  const getAllProducts = async () => {
    const {
      data: { data },
    } = await axios.get(PRODUCTS_URL);

    setProducts(data);

    setPageCount(Math.ceil(data.length / 8));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const renderedProductsPerPage = () => {
    return products
      .map((product) => {
        return <ProductItem key={product.id} {...product} product={product} />;
      })
      .slice(start, end);
  };

  return (
    <Fragment>
      <div className="row g-5 my-5 px-5">{renderedProductsPerPage()}</div>
      {products.length >= 1 && (
        <Pagination pageCount={pageCount} setStart={setStart} setEnd={setEnd} />
      )}
    </Fragment>
  );
};

export default Products;
