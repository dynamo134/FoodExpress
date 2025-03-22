import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ResMenuShimmer } from "./ShimmerUI";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
export const RestaurantMenu = () => {
  //const [restaurantData, setRestaurantData] = React.useState([]);
  const { id } = useParams();

  const restaurantData = useRestaurantMenu(id);

  return restaurantData.length == 0 ? (
    <ResMenuShimmer />
  ) : (
    <div>
      <h1>Reastaurant id : {id}</h1>
      <h2>Namaste</h2>
    </div>
  );
};
