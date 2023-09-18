import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "../../apis/axios";
import toast from "react-hot-toast";
import { useFormik } from "formik";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const resetPassword = async (values) => {
    try {
      setLoading(true);
      let { data } = await axios.put("/auth/resetPassword", values);
      if (data.token !== null) {
        toast.success("Your Password Changed Successfully", {
          duration: 3000,
          className: "text-success px-4 fw-bolder",
        });
        setLoading(false);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 3000,
        className: "text-danger px-4 fw-bolder",
      });
      setLoading(false);
    }
  };

  // validate with Yup

  let validationForm = Yup.object({
    email: Yup.string()
      .required("Email is  Required")
      .email("Email Must Be a Valid"),
    newPassword: Yup.string()
      .required("Password is Required")
      .min(6, "Password Must Be More Than 6 Characters")
      .max(15, "Password Must Be Less Than 15 Characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
      resetPassword(values);
    },
  });

  return (
    <Fragment>
      <h3>Reset New Password :</h3>

      <form onSubmit={formik.handleSubmit}>
        <label className=" form-label my-3" htmlFor="email">
          Email :
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="form-control"
          placeholder="Enter your Email"
        />

        {formik.errors.email && formik.touched.email ? (
          <small className="text-danger d-block mt-3">
            {formik.errors.email}
          </small>
        ) : null}

        <label className=" form-label my-3" htmlFor="newPassword">
          New Password :
        </label>
        <div className="inputWithIcon position-relative">
          <input
            id="newPassword"
            name="newPassword"
            type={showNewPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
            className="form-control"
            placeholder="Enter your Password"
            autoComplete="true"
          />

          {formik.errors.newPassword && formik.touched.newPassword ? (
            <small className="text-danger d-block mt-3">
              {formik.errors.newPassword}
            </small>
          ) : null}

          <i
            className="fa-solid fa-eye fs-5 position-absolute end-0 top-0 p-2"
            onClick={() => setShowNewPassword(!showNewPassword)}
          ></i>
        </div>
        <div className=" mt-5">
          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className="btn bg-main text-white"
          >
            {!loading ? (
              "Confirm"
            ) : (
              <span
                className="spinner-border spinner-border-sm "
                role="status"
                aria-hidden="true"
              ></span>
            )}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default ResetPassword;
