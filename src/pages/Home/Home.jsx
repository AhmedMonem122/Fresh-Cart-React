import Slider from "../../components/Slider/Slider";
import CategoriesSlider from "../../components/CategoriesSlider/CategoriesSlider";
import Products from "../../components/Products/Products";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="container py-4">
      <Helmet>
        <title>Home</title>
      </Helmet>

      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Slider />
          <CategoriesSlider />
          <Products />
        </Fragment>
      )}
    </div>
  );
};

export default Home;
