import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/use-auth";
import AllOrders from "../../components/AllOrders/AllOrders";

const AllOrdersPage = () => {
  const { userData } = useAuth();

  return (
    <Fragment>
      <Helmet>
        <title>All Orders</title>
      </Helmet>
      <div className="marginTop">
        <h3 className=" text-success fw-bolder text-center text-muted">
          Welcome {userData?.name} to All Orders
        </h3>

        <div className="row g-5">
          <AllOrders />
        </div>
      </div>
    </Fragment>
  );
};

export default AllOrdersPage;
