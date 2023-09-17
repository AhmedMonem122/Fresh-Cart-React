import { Helmet } from "react-helmet-async";
import Error from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>

      <img className="w-100" src={Error} alt="error" />
    </div>
  );
};

export default NotFound;
