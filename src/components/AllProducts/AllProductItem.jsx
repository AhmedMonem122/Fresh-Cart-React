import { Fragment } from "react";
import { Link } from "react-router-dom";

const AllProductItem = ({
  id,
  imageCover,
  price,
  ratingsAverage,
  title,
  category: { name },
  product,
}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="cart-customize item text-white h-100 rounded-5 position-relative shadow">
        <i className=" fa-regular fa-heart text-dark fs-4 position-absolute top-0 end-0 m-3 addWishlist1"></i>
        <i
          className="fa-solid fa-heart fs-4 position-absolute top-0 end-0 m-3 text-danger delWishlist1"
          style={{ display: "none" }}
        ></i>
        <img
          src={imageCover}
          className="w-100 rounded-5"
          alt={title}
          style={{ height: "300px" }}
        />
        <h6 className="px-3 text-success text-start pt-3">{title}</h6>
        <h6 className="px-3 text-black">{name}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="px-3 text-muted py-1">
            {product?.priceAfterDiscount ? (
              <Fragment>
                {" "}
                <span className="text-decoration-line-through text-danger">
                  {price}{" "}
                </span>
                <span className="fw-bold ps-2 text-success">
                  {product?.priceAfterDiscount} EGP
                </span>
              </Fragment>
            ) : (
              <span>{price} EGP</span>
            )}
          </h6>
          <span className="d-flex px-3">
            <i className="fas fa-star star-main  px-1 fs-5"></i>
            <h6 className="text-muted">{ratingsAverage}</h6>
          </span>
        </div>
        <Link to={`/productDetails/${id}`}>
          <button className="btn btn-success text-white w-100 mb-2 rounded-5 fw-bolder">
            Show More about this Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllProductItem;