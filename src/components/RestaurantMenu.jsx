import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ResMenuShimmer, ResCardShimmer } from "./ShimmerUI";
export const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = React.useState([]);
  useEffect(() => {
    //getRestaaurantMenu();
  }, []);

  const getRestaaurantMenu = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    setRestaurantData(data);
  };
  const { id } = useParams();
  return restaurantData.length == 0 ? (
    <ResMenuShimmer />
  ) : (
    <div>
      <h1>Reastaurant id : {id}</h1>
      <h2>Namaste</h2>
    </div>
  );
};
