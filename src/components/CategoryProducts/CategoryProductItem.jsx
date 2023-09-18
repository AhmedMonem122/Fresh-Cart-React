import { Fragment } from "react";
import { Link } from "react-router-dom";
import useWishlist from "../../hooks/use-wishlist";

const CategoryProductItem = ({
  imageCover,
  title,
  name,
  categoryProduct,
  price,
  ratingsAverage,
  id,
}) => {
  const { wishlistProducts, handleAddOrRemoveWishlist, getLoggedUserWishlist } =
    useWishlist();

  const productId = wishlistProducts.find(
    (wishlistProduct) => wishlistProduct.id === id
  );

  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="cart-customize item text-white h-100 rounded-5 position-relative shadow">
        <div
          className="position-absolute top-0 end-0 m-3"
          onClick={() => {
            handleAddOrRemoveWishlist(productId, id);
            getLoggedUserWishlist();
          }}
        >
          {productId?.id === id &&
          productId &&
          localStorage.getItem("userToken") &&
          JSON.parse(localStorage.getItem("wishlistDataIds")) ? (
            <i className="fa-solid fa-heart fs-4 text-danger delWishlist1"></i>
          ) : (
            <i className=" fa-regular fa-heart text-dark fs-4  addWishlist1"></i>
          )}
        </div>
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
            {categoryProduct?.priceAfterDiscount ? (
              <Fragment>
                {" "}
                <span className="text-decoration-line-through text-danger">
                  {price}{" "}
                </span>
                <span className="fw-bold ps-2 text-success">
                  {categoryProduct?.priceAfterDiscount} EGP
                </span>
              </Fragment>
            ) : (
              <span>{price} EGP</span>
            )}
          </h6>
          <span className="d-flex px-3">
            <i className="fas fa-star rating-color  px-1 fs-5"></i>
            <h6 className="text-muted">{ratingsAverage}</h6>
          </span>
        </div>
        <Link to={`/productDetails/${id}`}>
          <button className="btn btn-success text-white w-100 mb-2 rounded-5 fw-bolder">
            + Add
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryProductItem;
