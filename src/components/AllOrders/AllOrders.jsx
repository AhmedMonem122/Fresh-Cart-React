import { useState } from "react";
import { Fragment } from "react";
import useAuth from "../../hooks/use-auth";
import axios from "../../apis/axios";
import { useEffect } from "react";
import Loading from "../Loading/Loading";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const [loading, setLoading] = useState(false);

  const { userData } = useAuth();

  const getAllOrders = async () => {
    if (userData) {
      try {
        setLoading(true);
        let { data } = await axios.get(`/orders/user/${userData?.id}`);

        setAllOrders(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (userData) {
      getAllOrders();
    }
  }, [userData]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : allOrders.length ? (
        <Fragment>
          {allOrders?.map((order, index) => (
            <div key={index} className="col-md-6">
              <div className="order  p-3 rounded-5 my-5">
                <div className="container">
                  <div className="row">
                    {order.cartItems.map((item) => (
                      <div key={item._id} className="col-md-4">
                        <div className="item">
                          <img
                            className="w-100 rounded-5 p-2"
                            src={item.product.imageCover}
                            alt={item.product.title}
                          />

                          <div className="p-2 rounded-5 text-center">
                            <h5 className=" text-success">
                              {item.product.brand.name}
                            </h5>
                            <h5 className="text-success">
                              {item.product.title
                                .split(" ")
                                .splice(0, 1)
                                .join(" ")}
                            </h5>
                            <h5 className="text-muted">
                              Count :{" "}
                              <span className="text-success">{item.count}</span>
                            </h5>
                            <h5 className="text-muted  my-3">
                              Price :{" "}
                              <span className="text-success">
                                {item.price} EGP
                              </span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-light text-white p-3 rounded-5">
                  <h5 className="text-muted">
                    Total Price :{" "}
                    <span className="text-success">
                      {order.totalOrderPrice} EGP
                    </span>
                  </h5>
                  <h5 className="text-muted">
                    Taxes Price :{" "}
                    <span className="text-success">{order.taxPrice} EGP</span>
                  </h5>
                  <h5 className="text-muted">
                    Payment Method :{" "}
                    <span className="text-success">
                      {order.paymentMethodType}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ) : (
        <div className="mt-5 pt-5 text-success fw-bolder text-center text-muted">
          You haven&apos;t ordered any products to your orders
        </div>
      )}
    </Fragment>
  );
};

export default AllOrders;
