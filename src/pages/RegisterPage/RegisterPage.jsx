import { Fragment } from "react";
import Register from "../../components/Register/Register";
import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div className="container py-5 mt-5">
        <Register />
      </div>
    </Fragment>
  );
};

export default RegisterPage;
