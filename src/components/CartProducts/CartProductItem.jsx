const CartProductItem = () => {
  return (
    <div className="py-3 border-bottom border-1 border-dark d-flex align-items-center justify-content-between flex-column flex-md-row">
      {" "}
      <div className="col-md-3 rounded-5  ">
        <img
          src="https://res.cloudinary.com/dwp0imlbj/image/upload/v1680747398/Route-Academy-products/1680403397402-cover.jpeg"
          className="rounded-5"
          style={{ height: "200px" }}
        />
      </div>
      <div className="col-md-4 text-center ">
        <div className="product rounded-5 ">
          <h6 className="text-success">Woman Shaw</h6>
          <h6 className="text-muted">
            Price : <span className="text-success"> 149 EGP</span>
          </h6>
          <button className="btn btn-outline-danger my-2">Remove</button>
        </div>
      </div>
      <div className="col-md-4 text-center d-flex align-items-center justify-content-center ">
        <button className="btn btn-outline-danger fw-bolder">-</button>
        <h4 className="text-muted px-5">2 </h4>
        <button className="btn btn-outline-success fw-bolder">+</button>
      </div>
    </div>
  );
};

export default CartProductItem;
