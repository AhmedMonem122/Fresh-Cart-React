import useFetch from "../../hooks/use-fetch";
import CategoryProductItem from "./CategoryProductItem";
import { useParams } from "react-router-dom";
import notFoundProduct from "../../assets/images/no-product-found.png";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet-async";

const CategoryProducts = () => {
  const { id } = useParams();

  const CATEGORY_PRODUCTS_URL = `/products/?category=${id}`;

  const [categoryProducts, loading] = useFetch(CATEGORY_PRODUCTS_URL);

  // useEffect(() => {
  //   getAllCategoryProducts();
  // }, []);

  return (
    <div className="container py-2">
      <Helmet>
        <title>Category Products</title>
      </Helmet>

      <div className="row g-5 my-5">
        {loading ? (
          <Loading />
        ) : categoryProducts.length ? (
          categoryProducts.map((categoryProduct) => {
            return (
              <CategoryProductItem
                key={categoryProduct.id}
                {...categoryProduct}
                categoryProduct={categoryProduct}
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

export default CategoryProducts;
