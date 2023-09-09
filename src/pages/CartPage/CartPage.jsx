import { Fragment } from "react";
import greenShoppingCart from "../../assets/images/green-shopping-cart.png";
import CartProducts from "../../components/CartProducts/CartProducts";

const CartPage = () => {
  return (
    <Fragment>
      <h3 className="mt-5 pt-5 text-success fw-bolder text-center text-muted">
        Welcome User to your Cart{" "}
        <i className="fa-solid fa-cart-arrow-down text-success"></i>
      </h3>

      <div className="container mb-3">
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
          <img
            src={greenShoppingCart}
            className=""
            alt="green shopping cart"
            style={{ height: "400px" }}
          />
          <div className="orderPayment text-muted">
            <h2 className="text-center py-3 text-black">Orders</h2>
            <h5 className="pt-3 pb-2 px-3">
              Products <span className="text-success">5 items</span>
            </h5>
            <h5 className="px-3">
              Total Price <span className="text-success">23791 EGP</span>
            </h5>
            <a href="/payment">
              <button className="btn btn-outline-success fw-bolder my-3 w-75 mx-4">
                CheckOut
              </button>
            </a>
          </div>
        </div>

        <div className="row">
          <CartProducts />
        </div>
      </div>
    </Fragment>
  );
};

export default CartPage;