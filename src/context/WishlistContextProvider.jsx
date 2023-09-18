import { createContext, useState } from "react";
import axios from "../apis/axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const WISHLIST_BASE_URL = "/wishlist";

const wishlistDataIds =
  localStorage.getItem("userToken") &&
  JSON.parse(localStorage.getItem("wishlistDataIds"))
    ? JSON.parse(localStorage.getItem("wishlistDataIds"))
    : [];

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  // const [dataProductId, setDataProductId] = useState(wishlistDataIds);
  const [wishlistProducts, setWishlistProducts] = useState(wishlistDataIds);
  const [wishlistCount, setWishlistCount] = useState(0);
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

      // localStorage.setItem("wishlistDataIds", JSON.stringify(data.data));
      // setDataProductId(JSON.parse(localStorage.getItem("wishlistDataIds")));
      toast.success(data.message, {
        duration: 3000,
        className: "text-success px-5 fw-bolder my-3",
        iconTheme: {
          primary: "#198754",
          secondary: "#fff",
        },
      });
    } catch (error) {
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

      // localStorage.setItem("wishlistDataIds", JSON.stringify(data.data));
      // setDataProductId(JSON.parse(localStorage.getItem("wishlistDataIds")));
      toast.success(data.message, {
        duration: 3000,
        className: "text-danger px-5 fw-bolder my-3",
        iconTheme: {
          primary: "#dc3545",
          secondary: "#fff",
        },
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 3000,
        className: " text-danger px-5 fw-bolder my-3",
      });
    }
  };

  const handleAddOrRemoveWishlist = (dataProductId, actualId) => {
    if (
      dataProductId?.id === actualId &&
      dataProductId &&
      localStorage.getItem("userToken") &&
      JSON.parse(localStorage.getItem("wishlistDataIds"))
    ) {
      removeFromWishlist(actualId);
      getLoggedUserWishlist();
    } else {
      addToWishlist(actualId);
      getLoggedUserWishlist();
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
      localStorage.setItem("wishlistDataIds", JSON.stringify(data.data));
      setWishlistProducts(JSON.parse(localStorage.getItem("wishlistDataIds")));
      setWishlistCount(data.count);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message, {
        duration: 3000,
        className: " text-danger px-5 fw-bolder my-3",
      });
    }
  };

  // useEffect(() => {
  //   getLoggedUserWishlist();
  // }, [wishlistCount]);

  return (
    <WishlistContext.Provider
      value={{
        addToWishlist,
        removeFromWishlist,
        handleAddOrRemoveWishlist,
        wishlistProducts,
        getLoggedUserWishlist,
        isLoading,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
