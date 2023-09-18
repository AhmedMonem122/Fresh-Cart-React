import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import ResetPassword from "../../components/ResetPassword/ResetPassword";

const ResetPasswordPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Reset New Password</title>
      </Helmet>

      <div className="formik mx-auto py-4 mb-5 marginTop">
        <ResetPassword />
      </div>
    </Fragment>
  );
};

export default ResetPasswordPage;
