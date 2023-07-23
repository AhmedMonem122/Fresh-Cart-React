import { Fragment } from "react";
import Slider from "../../components/Slider/Slider";
import CategoriesSlider from "../../components/CategoriesSlider/CategoriesSlider";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <CategoriesSlider />
      <Products />
    </Fragment>
  );
};

export default Home;
