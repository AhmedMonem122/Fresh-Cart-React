import { useParams } from "react-router-dom";
import notFoundProduct from "../../assets/images/no-product-found.png";
import Loading from "../Loading/Loading";
import useFetch from "../../hooks/use-fetch";
import BrandProductItem from "./BrandProductItem";

const BrandProducts = () => {
  const { id } = useParams();

  const BRAND_PRODUCTS_URL = `/products/?brand=${id}`;

  const [brandProducts, loading] = useFetch(BRAND_PRODUCTS_URL);

  console.log(id);

  console.log(brandProducts);

  return (
    <div className="container py-2">
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
          <img
            src={notFoundProduct}
            alt="not found product"
            className="w-75 m-auto"
          />
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
