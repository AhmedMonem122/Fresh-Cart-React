import { useFormik } from "formik";
import { Fragment, useState } from "react";
import * as Yup from "yup";
import useAuth from "../../hooks/use-auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../apis/axios";
import { toast } from "react-hot-toast";
import useWishlist from "../../hooks/use-wishlist";
import useCart from "../../hooks/use-cart";

const Login = () => {
  const { saveUserData } = useAuth();
  const { getLoggedUserWishlist } = useWishlist();
  const { getLoggedUserCart } = useCart();

  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const validate = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Email Must Be a Valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password Must Be More Than 6 Characters")
      .max(15, "Password Must Be Less Than 15 Characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: function (values) {
      sendLoginData(values);
    },
  });

  async function sendLoginData(obj) {
    setLoader(true);
    try {
      const { data } = await axios.post("/auth/signin", obj);
      setLoader(false);
      if (data.message === "success") {
        toast.success("Welcome To Fresh Cart", {
          duration: 3000,
          className: "text-success px-5 fw-bolder my-3",
          iconTheme: {
            primary: "#198754",
            secondary: "#fff",
          },
        });
        localStorage.setItem("userToken", data.token);
        saveUserData();
        getLoggedUserWishlist();
        getLoggedUserCart();
        navigate("/");
      }
    } catch (error) {
      setLoader(false);
      if (error.response.data?.errors) {
        toast.error(error.response.data.errors.msg, {
          duration: 3000,
          className: " text-danger px-5 fw-bolder my-3",
        });
      } else {
        toast.error(error.response.data.message, {
          duration: 3000,
          className: " text-danger px-5 fw-bolder my-3",
        });
      }
    }
  }

  return (
    <Fragment>
      <h2 className="text-success">Login Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label className="mt-3 fw-bolder" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="  Email"
          className="form-control"
          value={formik.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="alert alert alert-danger text-center ">
            {formik.errors.email}
          </div>
        )}
        <label className="mt-3 fw-bolder" htmlFor="password">
          Password
        </label>
        <div className="inputWithIcon position-relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="  Password"
            className="form-control"
            value={formik.password}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="alert alert alert-danger text-center ">
              {formik.errors.password}
            </div>
          )}
          <i
            className="fa-solid fa-eye fs-5 position-absolute end-0 top-0 p-2"
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          {loader ? (
            <button
              type="button"
              className="btn btn-outline-success mt-3 fw-bolder"
            >
              <span
                className="spinner-border spinner-border-sm "
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-outline-success mt-3 fw-bolder"
              disabled={!formik.isValid}
            >
              Login
            </button>
          )}
          <Link to="/forgotPassword">
            <h5 className="text-muted forgetPass">Forgot Your Password ?</h5>
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
