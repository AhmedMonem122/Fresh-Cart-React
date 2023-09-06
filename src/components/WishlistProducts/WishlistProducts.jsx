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
      ) : (
        wishlistProducts.map((wishlistProduct) => {
          return (
            <WishlistProductItem
              key={wishlistProduct.id}
              {...wishlistProduct}
              wishlistProduct={wishlistProduct}
            />
          );
        })
      )}
    </Fragment>
  );
};

export default WishlistProducts;
