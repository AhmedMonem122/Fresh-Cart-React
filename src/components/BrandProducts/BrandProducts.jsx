import { useParams } from "react-router-dom";
import notFoundProduct from "../../assets/images/no-product-found.png";
import Loading from "../Loading/Loading";
import useFetch from "../../hooks/use-fetch";
import BrandProductItem from "./BrandProductItem";
import { Helmet } from "react-helmet-async";

const BrandProducts = () => {
  const { id } = useParams();

  const BRAND_PRODUCTS_URL = `/products/?brand=${id}`;

  const [brandProducts, loading] = useFetch(BRAND_PRODUCTS_URL);

  return (
    <div className="container py-2">
      <Helmet>
        <title>Brand Products</title>
      </Helmet>

      <div className="row g-5 my-5">
        {loading ? (
          <Loading />
        ) : brandProducts.length ? (
          brandProducts.map((brandProduct) => {
            return (
              <BrandProductItem
                key={brandProduct.id}
                {...brandProduct}
                brandProduct={brandProduct}
              />
            );
          })
        ) : (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <img
              src={notFoundProduct}
              alt="not found product"
              className="w-75 m-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
