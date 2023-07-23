import { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "../../apis/axios";

const CATEGORIES_URL = "/categories";

const CategoriesSlider = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const {
      data: { data },
    } = await axios.get(CATEGORIES_URL);

    setCategories(...categories, data);
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
          const { _id, name, image } = category;

          return (
            <div key={_id}>
              <div>
                <img
                  src={image}
                  alt={name}
                  className="w-100 rounded-5"
                  style={{ height: "200px" }}
                />
                <h2 className="h6 pt-2 text-center text-success">{name}</h2>
              </div>
            </div>
          );
        })}
      </Slider>
    </Fragment>
  );
};

export default CategoriesSlider;
