import { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "../../apis/axios";
import CategoryItem from "./CategoryItem";

const CATEGORIES_URL = "/categories";

const CategoriesSlider = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const {
      data: { data },
    } = await axios.get(CATEGORIES_URL);

    setCategories(data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <Fragment>
      <div className="text-category d-flex align-items-center">
        <h3 className="py-4">Shop Popular</h3>
        <h3 className="text-success px-2">Categories</h3>
      </div>

      <Slider {...settings}>
        {categories.map((category) => {
          return <CategoryItem key={category._id} {...category} />;
        })}
      </Slider>
    </Fragment>
  );
};

export default CategoriesSlider;
