import { Fragment } from "react";
import Slider from "react-slick";
import CategoryItem from "./CategoryItem";
import useFetch from "../../hooks/use-fetch";

const CATEGORIES_URL = "/categories";

const CategoriesSlider = () => {
  const [categories] = useFetch(CATEGORIES_URL);

  // const [categories, setCategories] = useState([]);

  // const getAllCategories = async () => {
  //   const {
  //     data: { data },
  //   } = await axios.get(CATEGORIES_URL);

  //   setCategories(data);
  // };

  // useEffect(() => {
  //   getAllCategories();
  // }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div className="text-category d-flex align-items-center">
        <h3 className="py-4">Shop Popular</h3>
        <h3 className="text-main px-2">Categories</h3>
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
