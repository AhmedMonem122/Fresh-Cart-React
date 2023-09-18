import { Fragment } from "react";
import greenShoppingCart from "../../assets/images/green-shopping-cart.png";
import CartProducts from "../../components/CartProducts/CartProducts";
import useCart from "../../hooks/use-cart";
import useAuth from "../../hooks/use-auth";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CartPage = () => {
  const {
    getLoggedUserCart,
    numOfCartItems,
    totalCartPrice,
    isLoading,
    cartProducts,
    clearUserCart,
  } = useCart();

  const { userData } = useAuth();

  useEffect(() => {
    getLoggedUserCart();
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Cart</title>
      </Helmet>

      <h3 className="mt-5 pt-5 text-success fw-bolder text-center text-muted">
        Welcome {userData?.name} to your Cart{" "}
        <i className="fa-solid fa-cart-arrow-down text-success"></i>
      </h3>
      {isLoading ? (
        <Loading />
      ) : cartProducts.length ? (
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
                Products{" "}
                <span className="text-success">{numOfCartItems} items</span>
              </h5>
              <h5 className="px-3">
                Total Price{" "}
                <span className="text-success">{totalCartPrice} EGP</span>
              </h5>
              <Link to="/payment">
                <button className="btn btn-outline-success fw-bolder my-3 w-75 mx-4">
                  CheckOut
                </button>
              </Link>

              {cartProducts.length > 1 && (
                <button
                  className="btn btn-outline-danger fw-bolder my-3 w-75 mx-4"
                  onClick={() => {
                    clearUserCart();
                    getLoggedUserCart();
                  }}
                >
                  Clear Cart
                </button>
              )}
            </div>
          </div>

          <div className="row">
            <CartProducts />
          </div>
        </div>
      ) : (
        <div className="mt-5 pt-5 text-success fw-bolder text-center text-muted">
          You haven&apos;t added any products to your cart
        </div>
      )}
    </Fragment>
  );
};

export default CartPage;
