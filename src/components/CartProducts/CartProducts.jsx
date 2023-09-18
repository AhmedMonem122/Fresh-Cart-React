import { Fragment } from "react";
import useCart from "../../hooks/use-cart";
import CartProductItem from "./CartProductItem";

const CartProducts = () => {
  const { cartProducts } = useCart();

  return (
    <Fragment>
      {cartProducts.map((cartProduct) => {
        return <CartProductItem key={cartProduct._id} {...cartProduct} />;
      })}
    </Fragment>
  );
};

export default CartProducts;
