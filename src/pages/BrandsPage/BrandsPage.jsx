import { Helmet } from "react-helmet-async";
import Brands from "../../components/Brands/Brands";

const BrandsPage = () => {
  return (
    <div className="container py-5 my-5">
      <Helmet>
        <title>Brands</title>
      </Helmet>

      <Brands />
    </div>
  );
};

export default BrandsPage;
