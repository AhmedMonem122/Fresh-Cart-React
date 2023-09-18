import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

const ForgotPasswordPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div className="formik mx-auto py-4 mb-5 marginTop">
        <ForgotPassword />
      </div>
    </Fragment>
  );
};

export default ForgotPasswordPage;
