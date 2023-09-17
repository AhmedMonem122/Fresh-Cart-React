import { Link } from "react-router-dom";

const CategoryItem = ({ _id, name, image }) => {
  return (
    <div className="sliderItem">
      <Link to={`/categoryProducts/${_id}`}>
        <img
          src={image}
          alt={name}
          className="w-100 rounded-5"
          style={{ height: "200px" }}
        />
        <h2 className="h6 pt-2 text-center text-main">{name}</h2>
      </Link>
    </div>
  );
};

export default CategoryItem;
