import { Fragment } from "react";
import useFetchPagination from "../../hooks/use-fetch-pagination";
import Loading from "../Loading/Loading";
import AllProductItem from "./AllProductItem";
import AllProductsPagination from "./AllProductsPagination";

const PRODUCTS_URL = "/products";

const AllProducts = () => {
  const [products, loading, pageCount, setPage] =
    useFetchPagination(PRODUCTS_URL);

  return (
    <div className="row align-items-center g-5">
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {products.map((product) => {
            return (
              <AllProductItem key={product.id} {...product} product={product} />
            );
          })}
        </Fragment>
      )}
      <div>
        {products.length >= 1 && (
          <AllProductsPagination pageCount={pageCount} setPage={setPage} />
        )}{" "}
      </div>
    </div>
  );
};

export default AllProducts;
