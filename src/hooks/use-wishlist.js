import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContextProvider";

const useWishlist = () => {
  return useContext(WishlistContext);
};

export default useWishlist;
