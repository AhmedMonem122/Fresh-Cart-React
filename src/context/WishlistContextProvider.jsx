import { createContext, useState } from "react";
import axios from "../apis/axios";
import { toast } from "react-hot-toast";

const WISHLIST_BASE_URL = "/wishlist";

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [dataProductId, setDataProductId] = useState(
    JSON.parse(localStorage.getItem("wishlistDataIds"))
  );
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addToWishlist = async (productId) => {
    try {
      const { data } = await axios.post(
        WISHLIST_BASE_URL,
        {
          productId,
        },
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );

      console.log(data);
      localStorage.setItem("wishlistDataIds", JSON.stringify(data.data));
      setDataProductId(JSON.parse(localStorage.getItem("wishlistDataIds")));
      toast.success(data.message, {
        duration: 3000,
        className: "text-success px-5 fw-bolder my-3",
        iconTheme: {
          primary: "#198754",
          secondary: "#fff",
        },
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        duration: 3000,
        className: " text-danger px-5 fw-bolder my-3",
      });
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const { data } = await axios.delete(`${WISHLIST_BASE_URL}/${productId}`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });

      console.log(data);
      localStorage.setItem("wishlistDataIds", JSON.stringify(data.data));
      setDataProductId(JSON.parse(localStorage.getItem("wishlistDataIds")));
      toast.success(data.message, {
        duration: 3000,
        className: "text-success px-5 fw-bolder my-3",
        iconTheme: {
          primary: "#198754",
          secondary: "#fff",
        },
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        duration: 3000,
        className: " text-danger px-5 fw-bolder my-3",
      });
    }
  };

  const handleAddOrRemoveWishlist = (dataProductId, actualId) => {
    if (dataProductId === actualId) {
      removeFromWishlist(actualId);
    } else {
      addToWishlist(actualId);
    }
  };

  const getLoggedUserWishlist = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(WISHLIST_BASE_URL, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });
      setIsLoading(false);
      console.log(data);
      setWishlistProducts(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        duration: 3000,
        className: " text-danger px-5 fw-bolder my-3",
      });
    }
  };

  console.log(wishlistProducts);

  return (
    <WishlistContext.Provider
      value={{
        addToWishlist,
        dataProductId,
        removeFromWishlist,
        handleAddOrRemoveWishlist,
        wishlistProducts,
        getLoggedUserWishlist,
        isLoading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
