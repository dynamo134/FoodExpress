import { useState, useEffect } from "react";
import { API_RESTAURANTS } from "../api/EndPoints";
// import restaurantList from "../utils/mockData";

const useRestaurantAndFilter = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurant, SetFilterRestaurant] = useState(restaurants);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const response = await fetch(API_RESTAURANTS);
    const data = await response.json();

    const resData =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurants(resData);
    SetFilterRestaurant(resData);
  };

  return { restaurants, setRestaurants, filterRestaurant, SetFilterRestaurant };
};

export default useRestaurantAndFilter;
