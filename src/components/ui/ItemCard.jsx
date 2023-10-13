/* eslint-disable react/prop-types */
const ItemCard = ({ item }) => {
  const { name, description, image, category, price, isNew } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {isNew && (
            <div className="badge badge-secondary font-bold">Featured</div>
          )}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">Price: ${price}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
