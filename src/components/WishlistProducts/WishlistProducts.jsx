import { Fragment, useEffect } from "react";
import useWishlist from "../../hooks/use-wishlist";
import WishlistProductItem from "./WishlistProductItem";
import Loading from "../Loading/Loading";

const WishlistProducts = () => {
  const { wishlistProducts, getLoggedUserWishlist, isLoading } = useWishlist();

  useEffect(() => {
    getLoggedUserWishlist();
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : wishlistProducts.length ? (
        wishlistProducts.map((wishlistProduct) => {
          return (
            <WishlistProductItem
              key={wishlistProduct.id}
              {...wishlistProduct}
              wishlistProduct={wishlistProduct}
            />
          );
        })
      ) : (
        <div className="mt-5 pt-5 text-success fw-bolder text-center text-muted">
          You haven&apos;t added any products in your wishlist
        </div>
      )}
    </Fragment>
  );
};

export default WishlistProducts;
