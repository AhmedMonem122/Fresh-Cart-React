import { useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import CategoryItem from "./CategoryItem";

const CATEGORIES_URL = "/categories";

const Categories = () => {
  const [categories, , getAllCategories] = useFetch(CATEGORIES_URL);

  useEffect(() => {
    getAllCategories();
  }, []);

  console.log(categories);

  return (
    <div className="row align-items-center g-5">
      <div className="col-md-4 col-lg-3">
        <div className="textBrands">
          <h3 className="text-success fw-bolder">Our Category</h3>
          <p className="text-muted lead">
            You can see our categories and each category includes the products
            in it
          </p>
        </div>
      </div>
      {categories.map((category) => {
        return <CategoryItem key={category._id} {...category} />;
      })}
    </div>
  );
};

export default Categories;
