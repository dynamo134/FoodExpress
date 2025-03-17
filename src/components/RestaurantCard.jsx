import { IMG_CDN_URL } from "../utils/constant";
import restaurantList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { name, cuisines, cloudinaryImageId } = props;
  return (
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="card-image" />
      <h3>{name}</h3>
      <p>{cuisines}</p>
    </div>
  );
};

export default RestaurantCard;
