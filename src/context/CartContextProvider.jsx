import { createContext } from "react";
import axios from "../apis/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const CART_BASE_URL = "/cart";
const SITE_URL = window.location.origin;

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartId, setCartId] = useState(null);
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
      toast.error(error.response.data.message, {
        duration: 3000,
        className: " text-danger px-5 fw-bolder my-3",
      });
    }
  };

  const updateCartProductQuantity = async (productId, count, state) => {
    if (count > 1 && state === "minus") {
      try {
        const { data } = await axios.put(
          `${CART_BASE_URL}/${productId}`,
          {
            count: count - 1,
          },
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
          }
        );

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
        toast.error(error.response.data.message, {
          duration: 3000,
          className: " text-danger px-5 fw-bolder my-3",
        });
      }
    } else if (state === "plus") {
      try {
        const { data } = await axios.put(
          `${CART_BASE_URL}/${productId}`,
          {
            count: count + 1,
          },
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
          }
        );

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
        toast.error(error.response.data.message, {
          duration: 3000,
          className: " text-danger px-5 fw-bolder my-3",
        });
      }
    } else {
      removeFromCart(productId);
    }
  };

  const clearUserCart = async () => {
    try {
      const { data } = await axios.delete(CART_BASE_URL, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });

      toast.success(data.message, {
        duration: 3000,
        className: "text-danger px-5 fw-bolder my-3",
        iconTheme: {
          primary: "#dc3545",
          secondary: "#fff",
        },
      });

      setNumOfCartItems(0);
      setTotalCartPrice(0);
      setCartProducts([]);
    } catch (error) {
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
      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setCartProducts(data.data.products);
      setCartId(data.data._id);
    } catch (error) {
      setIsLoading(false);
      if (error.response.data?.message) {
        // toast.error(error.response.data.message, {
        //   duration: 3000,
        //   className: " text-danger px-5 fw-bolder my-3",
        // });

        setNumOfCartItems(0);
        setTotalCartPrice(0);
        setCartProducts([]);
      }
    }
  };

  const onlinePayment = async (cartId, shippingAddress) => {
    try {
      const res = await axios.post(
        `orders/checkout-session/${cartId}?url=${SITE_URL}`,
        { shippingAddress },
        { headers: { token: localStorage.getItem("userToken") } }
      );

      return res;
    } catch (err) {
      return err;
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
        clearUserCart,
        cartId,
        onlinePayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
