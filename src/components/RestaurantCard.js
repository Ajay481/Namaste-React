import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    deliveryTime,
    costForTwo,
    avgRating,
  } = resData?.data;

  return (
    <div className="res-card">
      <img
        className="food-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="foodlogo"
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{deliveryTime} MINS</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

export default RestaurantCard;
