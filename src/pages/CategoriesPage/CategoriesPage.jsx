import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";

const CategoriesPage = () => {
  return (
    <div className="container py-5 my-5">
      <Helmet>
        <title>Categories</title>
      </Helmet>

      <Categories />
    </div>
  );
};

export default CategoriesPage;
