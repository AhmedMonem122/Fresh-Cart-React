import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
