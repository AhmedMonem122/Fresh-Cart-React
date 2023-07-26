const CategoryItem = ({ _id, name, image }) => {
  return (
    <div>
      <div>
        <img
          src={image}
          alt={name}
          className="w-100 rounded-5"
          style={{ height: "200px" }}
        />
        <h2 className="h6 pt-2 text-center text-success">{name}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
