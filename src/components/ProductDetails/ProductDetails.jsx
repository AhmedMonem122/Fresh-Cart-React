import Slider from "react-slick";
import axios from "../../apis/axios";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import useCart from "../../hooks/use-cart";
import { Helmet } from "react-helmet-async";

const PRODUCT_DETAILS_URL = "/products/";

const ProductDetails = () => {
  const { addToCart } = useCart();

  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { id } = useParams();

  const getProductDetails = async () => {
    setLoading(true);

    const {
      data: { data },
    } = await axios.get(`${PRODUCT_DETAILS_URL}${id}`);

    setProductDetails(data);

    setLoading(false);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const { images, price, priceAfterDiscount, quantity, description, title } =
    productDetails;

  return (
    <div className="container mt-5">
      <Helmet>
        <title>Product Details</title>
      </Helmet>

      <div className="row align-items-center gx-5">
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <div className="col-md-4 align-items-center pb-4 g-5 ">
              <Slider {...settings}>
                {images?.map((image, index) => {
                  return (
                    <div style={{ width: "200px" }} key={index}>
                      <div>
                        <img
                          src={image}
                          className="w-100 my-5 rounded-5 "
                          alt={title}
                          style={{ width: "100%", display: "inline-block" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="col-md-8 py-5">
              <h4 className="text-success">{title}</h4>
              <p>{description}</p>
              <h6 className="text-muted py-1">
                Price :{" "}
                {priceAfterDiscount ? (
                  <Fragment>
                    {" "}
                    <span className="text-decoration-line-through text-danger">
                      {price}
                    </span>
                    <span className=" fw-bold ps-2 text-success">
                      {priceAfterDiscount} EGP
                    </span>
                  </Fragment>
                ) : (
                  <span>{price} EGP</span>
                )}
              </h6>
              <h6 className="py-2 text-muted">Quantity : {quantity}</h6>
              <button
                id="addBtn"
                className="btnAdd btn btn-success w-100 mt-5"
                onClick={() => addToCart(id)}
              >
                Add Product to Cart +
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
