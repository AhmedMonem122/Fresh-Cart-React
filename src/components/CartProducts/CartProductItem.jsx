import useCart from "../../hooks/use-cart";

const CartProductItem = ({ count, price, product }) => {
  const { removeFromCart, getLoggedUserCart, updateCartProductQuantity } =
    useCart();

  return (
    <div className="py-3 border-bottom border-1 border-dark d-flex align-items-center justify-content-between flex-column flex-md-row">
      {" "}
      <div className="col-md-3 rounded-5  ">
        <img
          src={product.imageCover}
          className="rounded-5"
          style={{ height: "200px" }}
          alt={product.title}
        />
      </div>
      <div className="col-md-4 text-center ">
        <div className="rounded-5 ">
          <h6 className="text-success">{product.title}</h6>
          <h6 className="text-muted">
            Price : <span className="text-success"> {price} EGP</span>
          </h6>
          <button
            className="btn btn-outline-danger my-2"
            onClick={() => {
              removeFromCart(product.id);
              getLoggedUserCart();
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="col-md-4 text-center d-flex align-items-center justify-content-center ">
        <button
          className="btn btn-outline-danger fw-bolder"
          onClick={() => updateCartProductQuantity(product.id, count, "minus")}
        >
          -
        </button>
        <h4 className="text-muted px-5">{count}</h4>
        <button
          className="btn btn-outline-success fw-bolder"
          onClick={() => updateCartProductQuantity(product.id, count, "plus")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartProductItem;
