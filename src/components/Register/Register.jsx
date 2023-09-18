import { useFormik } from "formik";
import { Fragment, useState } from "react";
import * as Yup from "yup";
import axios from "../../apis/axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const validate = Yup.object({
    name: Yup.string()
      .required("This field is Required!")
      .max(14, "Name must be 14 Characters or less")
      .min(3, "Name must be 3 characters or more"),
    email: Yup.string()
      .required("Email is required")
      .email("Email Must Be Valid"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^01[0125][0-9]{8}$/, "Phone Number Must Be a Valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password Must Be More Than 6 Characters")
      .max(15, "Password Must Be Less Than 15 Characters"),
    rePassword: Yup.string()
      .required("Repassword is required")
      .oneOf([Yup.ref("password")], "Password and Repassword Not Matched"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      sendRegisterData(values);
    },
  });

  async function sendRegisterData(obj) {
    setLoader(true);
    try {
      const { data } = await axios.post("/auth/signup", obj);
      setLoader(false);
      if (data.message === "success") {
        toast.success("Congratulations", {
          duration: 3000,
          className: "text-success px-5 fw-bolder my-3",
        });
        navigate("/login");
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
      <h2 className="text-success">Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label className="mt-2 fw-bolder" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="  Name"
          className="form-control"
          value={formik.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="alert alert alert-danger text-center ">
            {formik.errors.name}
          </div>
        )}
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
        <label className="mt-3 fw-bolder" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          type="text"
          placeholder="  Phone"
          className="form-control"
          value={formik.phone}
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="alert alert alert-danger text-center ">
            {formik.errors.phone}
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
        <label className="mt-3 fw-bolder" htmlFor="rePassword">
          Repassword
        </label>
        <div className="inputWithIcon position-relative">
          <input
            id="rePassword"
            type={showRePassword ? "text" : "password"}
            placeholder="  Repassword"
            className="form-control"
            value={formik.rePassword}
            name="rePassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <i
            className="fa-solid fa-eye fs-5 position-absolute end-0 top-0 p-2"
            onClick={() => setShowRePassword(!showRePassword)}
          ></i>
        </div>
        {formik.touched.rePassword && formik.errors.rePassword && (
          <div className="alert alert alert-danger text-center ">
            {formik.errors.rePassword}
          </div>
        )}
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
            Register
          </button>
        )}
      </form>

      <h5 className="text-muted py-3">
        Already have an account ?{" "}
        <Link to="/login">
          <span className="text-muted signIn ">Sign in</span>
        </Link>
      </h5>
    </Fragment>
  );
};

export default Register;
