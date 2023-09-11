import { Fragment } from "react";
import useCart from "../../hooks/use-cart";
import CartProductItem from "./CartProductItem";

const CartProducts = () => {
  const { cartProducts, clearUserCart, getLoggedUserCart } = useCart();

  console.log(cartProducts);

  return (
    <Fragment>
      {cartProducts.length > 1 && (
        <button
          className="btn btn-outline-danger my-4"
          onClick={() => {
            clearUserCart();
            getLoggedUserCart();
          }}
        >
          Clear Cart
        </button>
      )}
      {cartProducts.map((cartProduct) => {
        return <CartProductItem key={cartProduct._id} {...cartProduct} />;
      })}
    </Fragment>
  );
};

export default CartProducts;
