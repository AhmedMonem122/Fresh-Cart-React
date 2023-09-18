import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "../../apis/axios";
import toast from "react-hot-toast";
import { useFormik } from "formik";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const forgetPassword = async (values) => {
    try {
      setLoading(true);
      let { data } = await axios.post("/auth/forgotPasswords", values);
      if (data.statusMsg === "success") {
        toast.success(data.message, {
          duration: 3000,
          className: "text-success px-4 fw-bolder",
        });
        navigate("/verify-code");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message, {
        duration: 3000,
        className: "text-danger px-4 fw-bolder",
      });
    }
  };

  // validate with Yup

  let validationForm = Yup.object({
    email: Yup.string()
      .required("Email is  Required")
      .email("Email Must Be a Valid"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
      forgetPassword(values);
    },
  });

  return (
    <Fragment>
      <h3>Forgot Password :</h3>

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

        {formik.errors.email && formik.touched.email && (
          <small className="text-danger d-block mt-3">
            {formik.errors.email}
          </small>
        )}

        <div className="mt-5">
          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className="btn bg-main text-white"
          >
            {!loading ? (
              "Send Code"
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

export default ForgotPassword;
