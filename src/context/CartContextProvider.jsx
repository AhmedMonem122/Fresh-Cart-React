import { createContext } from "react";
import axios from "../apis/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const CART_BASE_URL = "/cart";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = async (productId) => {
    try {
      const { data } = await axios.post(
        CART_BASE_URL,
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
      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
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

  const removeFromCart = async (productId) => {
    try {
      const { data } = await axios.delete(`${CART_BASE_URL}/${productId}`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });

      console.log(data);
      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setCartProducts(data.data.products);

      toast.success(data.status, {
        duration: 3000,
        className: "text-danger px-5 fw-bolder my-3",
        iconTheme: {
          primary: "#dc3545",
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

  const updateCartProductQuantity = async (productId, count) => {
    try {
      const { data } = await axios.put(
        `${CART_BASE_URL}/${productId}`,
        {
          count,
        },
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );

      console.log(data);
      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setCartProducts(data.data.products);

      toast.success(data.status, {
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

  const getLoggedUserCart = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(CART_BASE_URL, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });
      setIsLoading(false);
      console.log(data);
      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setCartProducts(data.data.products);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(error.response.data.message, {
        duration: 3000,
        className: " text-danger px-5 fw-bolder my-3",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        numOfCartItems,
        totalCartPrice,
        cartProducts,
        isLoading,
        getLoggedUserCart,
        removeFromCart,
        updateCartProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
