import { Link } from "react-router-dom";

const CategoryItem = ({ image, name, _id }) => {
  return (
    <div className="col-md-4 col-lg-3 ">
      <Link to={`/categoryProducts/${_id}`}>
        <div className="item cart-customize rounded-5 shadow">
          <img
            src={image}
            className="w-100 rounded-5"
            alt={name}
            style={{ height: "300px" }}
          />
          <h4 className="text-success text-center  py-4">{name}</h4>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
