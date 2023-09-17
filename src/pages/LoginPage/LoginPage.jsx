import { Fragment } from "react";
import Login from "../../components/Login/Login";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="container py-5 my-5">
        <Login />
      </div>
    </Fragment>
  );
};

export default LoginPage;
