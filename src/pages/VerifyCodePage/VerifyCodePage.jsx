import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import VerifyCode from "../../components/VerifyCode/VerifyCode";

const VerifyCodePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Verify Code</title>
      </Helmet>
      <div className="formik mx-auto py-4 mb-5 marginTop">
        <VerifyCode />
      </div>
    </Fragment>
  );
};

export default VerifyCodePage;
