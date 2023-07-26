import { paymentFooterData, storesFooterData } from "./footerData";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container p-4 my-5 ">
        <div className="row  justify-content-between align-items-center ">
          <div className="col-md-12">
            <h3>Get The FreshCart App</h3>
            <p>
              We Will Send You A Link, Open It On Your Phone To Download The App
            </p>
          </div>
          <div className="col-md-9  ">
            <input
              className=" form-control  "
              placeholder="Enter Your Email..."
            />
          </div>
          <div className="col-md-3">
            <button type="button" className="btn btn-success btn-lg my-2">
              Share App Link
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center flex-column flex-md-row">
            <h6 className="pe-md-4">Payment Partners</h6>
            {paymentFooterData.map((paymentImage) => {
              const { id, image, alt } = paymentImage;

              return (
                <img
                  src={image}
                  className="pt-4 pt-md-0 me-md-3"
                  alt={alt}
                  style={{ width: "4rem" }}
                  key={id}
                />
              );
            })}
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column flex-md-row">
            <h6 className="text-muted mt-3 mt-md-0 me-md-3">
              Get deliveries with FreshCart
            </h6>
            {storesFooterData.map((storeImage) => {
              const { id, image, alt } = storeImage;

              return <img src={image} className="w-25" alt={alt} key={id} />;
            })}
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p className="m-0 text-center py-4 ">
          {" "}
          dev/ By Ahmed Monem &copy; All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
