import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "../../apis/axios";
import toast from "react-hot-toast";
import { useFormik } from "formik";

const VerifyCode = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const verifyPassword = async (values) => {
    try {
      setLoading(true);
      let { data } = await axios.post("/auth/verifyResetCode", values);
      if (data.status === "Success") {
        toast.success("You can create a new Password", {
          duration: 3000,
          className: "text-success px-4 fw-bolder",
        });
        setLoading(false);
        navigate("/reset-password");
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
    resetCode: Yup.string()
      .required("Reset Code is Required")
      .matches(/^\d{6}$/, "Reset Code must be a 6-digit number"),
  });

  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
      verifyPassword(values);
    },
  });

  return (
    <Fragment>
      <h3>Verify Code :</h3>

      <form onSubmit={formik.handleSubmit}>
        <label className=" form-label my-3" htmlFor="resetCode">
          Enter Reset Code
        </label>
        <input
          id="resetCode"
          name="resetCode"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.resetCode}
          className="form-control"
          placeholder="Enter Reset Code"
        />

        {formik.errors.resetCode && formik.touched.resetCode ? (
          <small className="text-danger d-block mt-3">
            {formik.errors.resetCode}
          </small>
        ) : null}

        <div className="mt-5">
          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className="btn bg-main text-white"
          >
            {!loading ? (
              "Verify Code"
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

export default VerifyCode;
