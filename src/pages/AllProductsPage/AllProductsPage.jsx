import { Helmet } from "react-helmet-async";
import AllProducts from "../../components/AllProducts/AllProducts";

const AllProductsPage = () => {
  return (
    <div className="container py-5 my-5">
      <Helmet>
        <title>All Products</title>
      </Helmet>

      <AllProducts />
    </div>
  );
};

export default AllProductsPage;
