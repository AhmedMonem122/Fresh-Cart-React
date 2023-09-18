import { Fragment } from "react";
import useFetchPagination from "../../hooks/use-fetch-pagination";
import Loading from "../Loading/Loading";
import BrandItem from "./BrandItem";
import BrandsPagination from "./BrandsPagination";

const BRANDS_URL = "/brands";

const Brands = () => {
  const [brands, loading, pageCount, setPage] = useFetchPagination(BRANDS_URL);

  return (
    <div className="row align-items-center g-5">
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="col-md-4 col-lg-3">
            <div className="textBrands">
              <h3 className="text-success fw-bolder">Our Brands</h3>
              <p className="text-muted lead">
                You can see our Brands and each brand includes the products in
                it
              </p>
            </div>
          </div>
          {brands.map((brand) => {
            return <BrandItem key={brand._id} {...brand} />;
          })}
        </Fragment>
      )}
      <div>
        {brands.length >= 1 && (
          <BrandsPagination pageCount={pageCount} setPage={setPage} />
        )}{" "}
      </div>
    </div>
  );
};

export default Brands;
