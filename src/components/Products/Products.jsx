import { Fragment, useEffect, useState } from "react";
import axios from "../../apis/axios";
import Pagination from "../Pagination/Pagination";

const PRODUCTS_URL = "/products/";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);

  const getAllProducts = async (page = 1) => {
    const {
      data: { data, results },
    } = await axios.get(`${PRODUCTS_URL}?page=${page}`);

    setProducts(data);

    console.log(data);
    setPageCount(Math.ceil(results / 8));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products);

  const renderedProductsPerPage = () => {
    console.log(start, end);

    // if (end > products.length) {
    //   setStart(0);
    //   setEnd(8);
    // }

    return products
      .map((product) => {
        const {
          id,
          imageCover,
          price,
          ratingsAverage,
          title,
          category: { name },
        } = product;

        return (
          <div className="col-lg-3 col-md-6 col-sm-12" key={id}>
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
              <a href="/">
                <button className="btn btn-success text-white w-100 mb-2 rounded-5 fw-bolder">
                  Show More about this Product
                </button>
              </a>
            </div>
          </div>
        );
      })
      .slice(start, end);
  };

  return (
    <Fragment>
      <div className="row g-5 my-5 px-5">{renderedProductsPerPage()}</div>
      {products.length >= 1 && (
        <Pagination
          pageCount={pageCount}
          renderedProductsPerPage={renderedProductsPerPage}
          setStart={setStart}
          setEnd={setEnd}
          end={end}
          products={products}
        />
      )}
    </Fragment>
  );
};

export default Products;
