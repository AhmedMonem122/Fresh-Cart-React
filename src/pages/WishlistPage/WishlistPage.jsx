import { Fragment } from "react";
import WishlistProducts from "../../components/WishlistProducts/WishlistProducts";
import useAuth from "../../hooks/use-auth";
import { Helmet } from "react-helmet-async";

const WishlistPage = () => {
  const { userData } = useAuth();

  return (
    <Fragment>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <h3 className="mt-5 pt-5 text-success fw-bolder text-center text-muted">
        Welcome {userData?.name} to your Wishlist{" "}
        <i className="fa-solid fa-heart text-danger"></i>{" "}
      </h3>

      <div className="container py-3">
        <div className="row g-5 my-2">
          <WishlistProducts />
        </div>
      </div>
    </Fragment>
  );
};

export default WishlistPage;
