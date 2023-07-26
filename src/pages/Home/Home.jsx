import Slider from "../../components/Slider/Slider";
import CategoriesSlider from "../../components/CategoriesSlider/CategoriesSlider";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div className="container py-4">
      <Slider />
      <CategoriesSlider />
      <Products />
    </div>
  );
};

export default Home;
