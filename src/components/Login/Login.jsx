import { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <h2 className="text-success">Login Form</h2>
      <form className=" ">
        <label className="mt-3 fw-bolder" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="   Email"
          className="form-control"
          value="h@h.com"
        />
        <label className="mt-3 fw-bolder" htmlFor="password">
          Password
        </label>
        <div className="inputWithIcon position-relative">
          <input
            id="password"
            type="password"
            placeholder="   Password"
            className="form-control"
            value="123456"
          />
          <i
            className="fa-solid fa-eye fs-5 position-absolute end-0 top-0 p-2"
            id="togglePassword"
          ></i>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="submit"
            className="btn btn-outline-success mt-3 fw-bolder"
          >
            Login
          </button>
          <a href="/forgetpassword">
            <h5 className="text-muted forgetPass">Forgot Your Password ?</h5>
          </a>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
